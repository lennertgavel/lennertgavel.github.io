'use strict';

/* Controllers */

angular.module('cv.controllers', [])

    .controller('CommonCtrl', ['$scope', '$timeout', '$route',
        function ($scope, $timeout, $route) {

            $scope.choise = 0;
            $scope.calligraphy = false;
            $scope.absurd = false;

            $scope.toggleAbsurd = function(){
                $scope.absurd = !$scope.absurd;
            };

            $scope.typo = function () {
                $scope.typography = $scope.typos[$scope.choise];
                $scope.choise++;
            };

            $scope.typos = [
                'Coiny',
                'Eczar',
                'Baloo Bhai',
                'Yatra One',
                'Shrikhand',
                'Aclonica'
            ];

            function guid() {
                function s4() {
                    return Math.floor((1 + Math.random()) * 0x10000)
                        .toString(16)
                        .substring(1);
                }

                return 'img/lennert_script_v2.gif?' +
                    s4() + s4() + s4() + s4() +
                    s4() + s4() + s4() + s4() + '\')';
            }

            $scope.calligraphyToggle = function(){
                $scope.calligraphy = !$scope.calligraphy;
                $scope.calligraphyPath = guid();
            }

        }])
;