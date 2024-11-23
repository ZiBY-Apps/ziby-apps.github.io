import { createRoute } from '../utils';

export const indexRoute = createRoute('/', {
  title: 'ZiBY Apps',
  pageTitle: 'ZiBY Apps',
});

export const privacyPolicyRoute = createRoute('/privacy-policy', {
  title: 'Privacy Policy',
  pageTitle: 'Privacy Policy',
});

export const authCallbackRoute = createRoute('/auth/callback', {
  title: 'Auth Callback',
  pageTitle: 'Auth Callback',
});
