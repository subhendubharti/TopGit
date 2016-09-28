

var app = angular.module("GithubRepos",[]);

app.controller('MainController', [ '$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
    $scope.index = [];
    $scope.MyBookmarks = [];
    $scope.showBookmarks = false;
    $http.get('https://gist.githubusercontent.com/mayurah/5a4d45d12615d52afc4d1c126e04c796/raw/ccbba9bb09312ae66cf85b037bafc670356cf2c9/languages.json')
    .then(function (response) {
        $scope.Languages = response.data;
        //alert($scope.Languages.length);
        for (i = 0; i < $scope.Languages.length; i++) {
            $scope.index.push(i);
        }
    }, function (error) {
    });
    $scope.allLanguages = $scope.Languages;
    $scope.searchRepo = function () {
        //alert($scope.searchLang);
        $http.get('https://api.github.com/search/repositories?q=stars:>500+language:' + $scope.searchLang + '&sort=stars&order=desc')
    .then(function (response) {
        $scope.repo = response.data;
    }, function (error) {
    });
    }
    $scope.addRepo = function (Item) {
        $scope.MyBookmarks.push(Item);
    }
   
} ]);


