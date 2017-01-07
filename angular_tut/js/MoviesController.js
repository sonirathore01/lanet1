function MoviesController($scope) {
    $scope.items = [
        {title:'yjhd',year:'2013',popular:true,category:'love'},
        {title:'rustom',year:'2016',popular:false,category:'patriotism'},
        {title:'bajrangi',year:'2015',popular:false,category:'patriotism'},
        {title:'ydhm',year:'2016',popular:true,category:'love'}];

    $scope.newtitle = '';
    $scope.newyear = '';

    $scope.addMovie = function () {
        $scope.items.unshift({
            title: $scope.newtitle,
            year: $scope.newyear
        });
    }
}
angular
    .module('app')
    .controller('MoviesController',MoviesController)