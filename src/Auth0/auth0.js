import {
  authDomain,
} from '../constants';
export const AUTH_CONFIG = {
  domain: authDomain,
  admin:admin_secret,
  callbackUrl: 'http://localhost:5173/callback'
};