var module = require('module'),
	jsdom = require("jsdom");
	console.log(jsdom.jsdom);
	var window = jsdom.tstDocument.defaultView;

describe('Page should load',function(){
  
  beforeEach(module('app'));
  
  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

it('Should show',function(){
	describe('$scope.grade', function() {
  it('sets the strength to "strong" if the password length is >8 chars', function() {
    var $scope = {};
    var controller = $controller('PasswordController', { $scope: $scope });
    $scope.password = 'longerthaneightchars';
    $scope.grade();
    expect($scope.strength).toEqual('strong');
  });
});
	                                          });
});