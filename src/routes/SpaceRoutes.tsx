import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import AuthenticatedGuard from '../guards/AuthenticationGuard';
import Loading from '../components/Loading/Loading';
import { PATH } from '../constants/paths';
const Space = lazy(() => import('../pages/Space/Space'));

export default function SpaceRoutes() {
  return (
    <Switch>
      <AuthenticatedGuard
        exact
        path={PATH.SPACE}
        component={() => (
          <Suspense fallback={<Loading />}>
            <Space />
          </Suspense>
        )}
      />
    </Switch>
  );
}
