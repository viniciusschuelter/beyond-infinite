import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedGuard = (props: {
  component: any;
  path: string;
  isAuthenticated?: boolean;
  exact: boolean;
}) => {
  const { isAuthenticated, component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated && localStorage.getItem('token')) {
          return <Redirect to="/login" />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default AuthenticatedGuard;
