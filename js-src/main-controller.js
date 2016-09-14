/**
 * Created by Tim Osadchiy on 28/08/2016.
 */

'use strict';

module.exports = function (app) {
    app.controller('MainController', ['$scope', controllerFn]);
};

function controllerFn($scope) {
    $scope.test = 'Hello world!';
}