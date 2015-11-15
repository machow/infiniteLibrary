require('angular');
var infLib = require('infinite-library');

angular.module('app')
       .controller('SearchController', SearchController)

function SearchController(){
    var vm = this;
    vm.query = "";
    vm.output = "";
    vm.runQuery = runQuery;
    vm.submitId = submitId;

    function runQuery(){
        vm.output = infLib.getIndex(vm.query);
    }

    function submitId(){
        var book = infLib.generateBook(vm.query);
        vm.output = book.length > 10000 ? book.slice(0,10000) + '...' : book;
    }
}
