
var app = angular.module("toDoList", []); 
app.controller("myCtrl", function($scope) {
    $scope.item = ["Today I must"];
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {return;}
        if ($scope.item.indexOf($scope.addMe) == -1) {
            $scope.item.push($scope.addMe);
        } else {
            $scope.errortext = "Already in list.";
        }
    }
    $scope.removeItem = function (x) {
        $scope.errortext = "";    
        $scope.item.splice(x, 1);
    }

    $scope.date = new Date();
});
