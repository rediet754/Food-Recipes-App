import auth0 from 'auth0-spa.js';
import { AUTH_CONFIG } from './auth0';


export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: AUTH_CONFIG.domain,
        redirectUri: AUTH_CONFIG.callbackUrl,
        responseType: 'token accessToken'
    })
}