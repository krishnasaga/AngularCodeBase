import angular from 'angular';
import appComponentsHome from './home';
import appComponentsLeave from './leave';
var appComponents = angular.module('appComponents',[
  appComponentsHome,
  appComponentsLeave
]).name;

export { appComponents };
