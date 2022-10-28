import { createApp,provide,h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "./apollo-client";

import "./tailwind.css";
import App from "./App.vue";
import router from "./router";

const app = createApp({
  setup() {
    provide(DefaultApolloClient,apolloClient)
  },
  render:()=>h(App),
})
 app.use(router)
  app.mount("#app");
