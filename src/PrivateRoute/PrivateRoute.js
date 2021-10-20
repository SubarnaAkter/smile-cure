import React from 'react';

import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';
import spinner from '../images/spinner.gif';

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading}= useAuth();
    if (isLoading) {
        return <div className=" text-center " >
            <img className=" mx-auto img-fluid" src={spinner} alt="" />
        </div>
    }
    return (
        <Route
        {...rest}
        render={({location})=>
       user.displayName || user.email? (children):
        <Redirect
        to={{
            pathname: "/login",
            state: { from: location }
          }}
        >

        </Redirect>
    }
        >
            
        </Route>
    );
};

export default PrivateRoute;