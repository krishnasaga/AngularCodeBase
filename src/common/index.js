import angular from 'angular';
import SideMenu from './directives/sidebar.directive.js';

const appCommon = angular.module('appCommon',[])
  .directive('sideMenu',() => new SideMenu())
  .name;

export  { appCommon };