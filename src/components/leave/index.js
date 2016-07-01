import angular from 'angular';
import LeaveController from './LeaveController.js';
import templateUrl from './leave.tpl.html';

const appComponentsLeave = angular.module('appComponentsleave',[])
  .controller('LeaveController',LeaveController)
    .config(function($stateProvider) {
      $stateProvider
       .state('leave', {
         url: '/leave',
         template: templateUrl,
         controller: 'LeaveController',
         controllerAs: 'ctrl'
       })
    }).name;

export default appComponentsLeave;
