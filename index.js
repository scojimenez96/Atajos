import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import initFacebookSdk from './helpers/initFacebookSdk';
//import LoginYoutube from './components/youtube/AuthYoutube';
import { initYoutubeSdk } from './helpers/initYoutubeSdk';
//import { Header } from './components/Header';
//import {Registro} from '../src/components/forms/Registro'
//import { Login } from './components/forms/Login';
//import { ForgotPassword } from './components/forms/ForgotPassword';

initFacebookSdk().then(startApp);
// initYoutubeSdk().then(startApp)


function startApp() {
  ReactDOM.render(
    <HomePage />,
    document.getElementById('root')
  );
}