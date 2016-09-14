/**
 * Created by Tim Osadchiy on 27/08/2016.
 */

'use strict';

var angular = require('angular');
require('angular-aria');
require('angular-animate');
require('angular-sanitize');
require('angular-touch');

var moduleRequirements = ['ngAnimate', 'ngSanitize', 'ngAnimate', 'ngTouch'],
    app = angular.module('ConfeBeacon', moduleRequirements);

require('./constants')(app);
require('./main-controller')(app);
