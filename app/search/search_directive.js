require('angular')
require('./search.js')

angular.module('app')
       .directive('infSearchbar', Searchbar)

function Searchbar(){
    return {
        restrict: 'E',
        templateUrl: 'app/search/search.html',
        controllerAs: 'vm',
        controller: 'SearchController'
    }
}

