var app=angular.module("mainApp",["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider.when("/",{
		templateUrl:'js/login.html',
		controller:'loginCtrl'
	}).when("/dashboard",{
		templateUrl:'js/dashboard.html',
		controller:'loginCtrl'
	}); 
});

app.controller('loginCtrl',function($scope,$location){
  $scope.submit = function(){
   var uname = $scope.username;
   var pass = $scope.password;
   if($scope.username == 'admin' && $scope.password == 'admin'){
     $location.path('/dashboard');
   }
  };
})