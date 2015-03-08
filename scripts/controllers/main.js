'use strict';

/**
 * @ngdoc function
 * @name haoyiminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the haoyiminApp
 */
angular.module('haoyiminApp')
  .controller('MainCtrl', function ($scope) {

    //var age = getAge($scope.birthday);
    $scope.birthday = new Date("01/01/1980");

    $scope.points = $scope.birthday;
    console.log("$scope in controller:" + $scope);
    $scope.agePoints = 0;
    $scope.ieltsPoints = 0;
    $scope.empYearsPoints = 0;
    $scope.eduPoints = 0;
    $scope.stateSponsorshipPoints = 0;
    $scope.spouseBonusPoints = 0;


    $scope.getPoints = function(){
      $scope.total="{color:red}";
//      var age = $scope.age;
//      var agePoints = 0;
//      if(age >= 18 && age <= 24) {
//        agePoints = 25;
//      } else if (age >= 25 && age <= 32){
//        agePoints = 30;
//      } else if (age >= 33 && age <= 39){
//        agePoints = 25;
//      } else if (age >= 40 && age <= 44){
//        agePoints = 15;
//      } else if (age >= 45 && age <= 49) {
//        agePoints = 0;
//      }
      var points = parseInt($scope.agePoints, 10)
        + parseInt($scope.ieltsPoints, 10)
        + parseInt($scope.eduPoints, 10)
        + parseInt($scope.spouseBonusPoints, 10)
        + parseInt($scope.stateSponsorshipPoints, 10)
        + parseInt($scope.empYearsPoints, 10);
      if (isNaN(points)){
        points = 0;
      }
      ga && ga('send', 'event', 'calculation', 'calculate', 'points', points);
      return points;
    };



    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
// bind module name, must provide '[]'
angular.module("App", ['ui']);
function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function controller($scope){
  //var age = getAge($scope.birthday);
  $scope.birthday = new Date("01/01/1980");

  $scope.points = $scope.birthday;
  console.log("$scope in controller:" + $scope);


  $scope.getPoints = function(){
    $scope.total="{color:red}";
    var age = getAge($scope.birthday);
    var agePoints = 0;
    if (age >= 25 && age <= 32){
      agePoints = 30;
    } else if (age >= 33 && age <= 39){
      agePoints = 25;
    }
    var ssPoints = $scope.stateSponsorship ? 5 : 0;
    var sbPoints = $scope.spouseBonus ? 5 : 0;
    console.log("Age:" + agePoints);
    console.log("SS:" + $scope.stateSponsorship);
    console.log("Emp Years:" + $scope.empYearsPoints);
    var points = parseInt(agePoints, 10) + parseInt($scope.ieltsPoints, 10) + parseInt($scope.eduPoints, 10) + parseInt(ssPoints, 10) + parseInt(sbPoints, 10) + parseInt($scope.empYearsPoints, 10);
    if (isNaN(points)){
      points = 0;
    }
    return points;
  };

}
