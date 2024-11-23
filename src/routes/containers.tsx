import * as routes from './';
import { IRoute } from '../types';
import { bindContainerToRoute } from '../utils';
import { HomeContainer, PrivacyPolicyContainer } from '../containers';
import { AuthCallbackContainer } from '../containers/AuthCallbackContainer';

export const containers: IRoute[] = [
  bindContainerToRoute(routes.indexRoute, HomeContainer),

  bindContainerToRoute(routes.privacyPolicyRoute, PrivacyPolicyContainer),

  bindContainerToRoute(routes.authCallbackRoute, AuthCallbackContainer),
];
