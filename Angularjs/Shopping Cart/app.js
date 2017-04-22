angular.module('shopping',[])
.controller('myCtrl',function($scope,$rootScope){
  $scope.products = ['Jeans','Shirt','T-shirt','Joggers','POLO'];

  $scope.addItem = function(){
  	$scope.errortext = "";
  	if(!$scope.EnterItem){return $scope.errortext="item isn't entered";}
  	if ($scope.products.indexOf($scope.EnterItem) == -1) {
  	   $scope.products.push($scope.EnterItem);
  	 }else{
  	 	    $scope.errortext="The item is already in your shopping list.";
  	 }
    $scope.EnterItem="";
  }

   $scope.removeItem = function(x){
     $scope.products.splice(x,1);
   }

})