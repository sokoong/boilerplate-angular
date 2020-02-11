var app = angular.module("app", []);
var httpconfig = {
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
};

app.controller("AppController", function($scope, $http, $timeout) {
    $scope.hello = 'Hello world';
    // var req = $.param({ id: 1 });
    // $http.post("", req, httpconfig).then(function(res) {
    //     console.log("res", res);
    // });
});
