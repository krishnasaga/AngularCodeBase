import './sass/main.scss';
import 'style!raw!bootstrap/dist/css/bootstrap.css';

global.jQuery = require('jquery');
require('bootstrap');

import angular from 'angular';

import { appComponents } from './components';
import uiRouter from 'angular-ui-router';
import { appCommon } from './common';
angular.module('app', [
  uiRouter,
  appComponents,
  appCommon
]);
