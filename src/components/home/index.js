import angular from 'angular';
import HomeController from './HomeController.js';
import templateUrl from './home.tpl.html';

const appComponentsHome = angular.module('appComponentsHome',[])
  .controller('HomeController',HomeController)
    .config(function($stateProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          template: templateUrl,
          controller: 'HomeController',
          controllerAs: 'ctrl',
        })
    }).name;

export default appComponentsHome;
