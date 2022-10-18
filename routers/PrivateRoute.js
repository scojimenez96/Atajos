import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getToken } from "../helpers/storage";

export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  console.log("PrivateRoute => getToken", getToken());
  console.log(localStorage.getItem("@user:token"))
  return (
    <Route

      {...rest}
      render={(props) =>
        localStorage.getItem("@user:token") ? (
          <Component {...props} />
        ) : (
          <>
            {alert("No tienes permitido el acceso a esta página")}
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location },
              }}
            />
          </>
        )
      }
    ></Route>
  );
};