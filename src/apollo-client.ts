// to create an apolloclient instance(an example or single occurance of something)
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core"
// import { getMainDefinition } from "@apollo/client/utilities"
import { onError } from "@apollo/client/link/error"
import Auth from "./Auth0/autho_avilabl"
import { logErrorMessages } from "@vue/apollo-util"

function getHeaders() {
    const headers = {}
    const token = window.localStorage.getItem('')
    if (token) {
        headers["Authorization"] = `Bearer ${token}`
    }
    return headers
}

// Create an http link:
const httpLink = new HttpLink({
  uri: "https://recipes-project.hasura.app/v1/graphql",

  fetch: (uri: RequestInfo, options: RequestInit) => {
    options.headers = getHeaders();
    return fetch(uri, options);
  },
})
const errorLink = onError((error) => {
    if (process.env.NODE_ENV !== "production") {
        logErrorMessages(error)
    }
})

// Create the apollo client
export const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: errorLink.concat(httpLink),
})