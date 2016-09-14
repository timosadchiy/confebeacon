/**
 * Created by Tim Osadchiy on 28/08/2016.
 */

'use strict';

module.exports = function (app) {
    app.controller('MainController', ['$scope', controllerFn]);
};

function controllerFn($scope) {
    $scope.rooms = ['Room 1', 'Room 2'];
    $scope.times = getTimes(10, 17, 15);
}

function getTimes(start, end, step) {
    var times = [];
    for (var i=start; i<=end; i++) {
        for (var j=0; j<60; j+=step) {
            times.push((String(i).length == 1 ? '0' : '') + i + ':' + (String(j).length == 1 ? '0' : '') + j);
        }
    }
    return times;
}