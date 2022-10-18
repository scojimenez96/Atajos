import React from 'react';
// import { Header } from '../components/Header';
// import { AppRouters } from './routers/AppRouters';

import Home from "./screens/home"
import { Login, Registration, ForgotPassword } from "./components/forms"
import { ConectionScreen } from './screens/conection/ConectionScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginScreen from './screens/login';
import { PrivateRoute } from './routers/PrivateRoute';
import { ReportPowerBi } from './screens/report/ReportPowerBi';
import { YourCompany } from './components/teamMember/YourCompany';
import { Account } from './components/account/Account';
import { ChangePassword } from './components/changePassword/ChangePassword';
//import SignUp from './components/forms/registerui';


function HomePage() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/signup" component={Registration} />
        <Route exact path="/forgot" component={ForgotPassword} />
        <PrivateRoute exact path="/conections" component={ConectionScreen} />
        <PrivateRoute exact path="/reportpowerbi" component={ReportPowerBi} />
        <PrivateRoute exact path="/loginscreen" component={LoginScreen} />
        <PrivateRoute exact path="/home/accont" component={Account} />
        <PrivateRoute exact path="/home/subscription" component={LoginScreen} />
        <PrivateRoute exact path="/home/teammeber" component={YourCompany} />
        <PrivateRoute exact path="/home/changepassword" component={ChangePassword} />

      </Switch>
    </Router>
  )

}



export default HomePage