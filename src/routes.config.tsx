import React from 'react';
import { matchPath } from 'react-router';
import { mapView } from './views/mapView';

export interface Route {
  name: string;
  path: string;
  Component: React.FC;
  protect: boolean;
}

export const routes: Array<Route> = [
  { name: 'Test', path: '/', Component: mapView, protect: false },
  // { name: 'Models', path: '/models', Component: ServiceFeeModels, protect: true },
  // { name: 'Model Name', path: '/model/:uuid/*', Component: FeeModel, protect: true },
  // { name: 'Auth', path: '/auth/callback', Component: AuthCallback, protect: false },
  // { name: 'Logout', path: '/logout', Component: Logout, protect: false }
];

export const matchRoutes = (routes: Array<Route>, path: string) => {
  return routes.filter((item: Route) => {
    const match = matchPath({ path: item.path, end: false }, path);
    if (match) {
      return true;
    }
  });
};
