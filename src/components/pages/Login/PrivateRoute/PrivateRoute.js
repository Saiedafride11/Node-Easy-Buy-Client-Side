import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading} = useAuth();
    if(isLoading){
      return <div className="mx-auto">
          <Spinner animation="border"  style={{color: 'rgb(171, 122, 95)'}}/>
      </div>;
  }
    return (
        <Route
          {...rest}
          render={({ location }) =>
            user.displayName ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              >
              </Redirect>
            )
          }
        >
      </Route>
    );
};

export default PrivateRoute;