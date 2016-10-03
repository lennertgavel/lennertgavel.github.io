'use strict';

angular.module('cv.cv', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/cv', {
            templateUrl: 'view/cv/cv.html',
            controller: 'CvCtrl',
            reloadOnSearch: false
        });
    }])

    .controller('CvCtrl', ['$scope', '$timeout',
        function ($scope, $timeout) {

            $scope.showSecond = false;
            $scope.profile = { 'hover' : false };

            $scope.skills = [
                {
                    title: 'GRAFISCH ONTWERP',
                    subSkills: [
                        {
                            title: 'Illustartor / <br>Affinity design',
                            percentage: '10%',
                            amount: 100
                        },
                        {
                            title: 'Photoshop / <br>Affinity photo<br>',
                            percentage: '10%',
                            amount: 75
                        },
                        {
                            title: 'Indesign',
                            percentage: '10%',
                            amount: 90
                        }
                    ]
                },
                {
                    title: 'DEVELOPMENT',
                    subSkills: [
                        {
                            title: 'Javascript / Angular / <br>CSS / HTML',
                            percentage: '10%',
                            amount: 95
                        },
                        {
                            title: 'JAVA / Maven /  GIT / <br>Linux (Bash, zsh) / Mysql',
                            percentage: '10%',
                            amount: 80
                        },
                        {
                            title: 'GRUNT / Bower / Eclipse ',
                            percentage: '10%',
                            amount: 60
                        }
                    ]
                },
                {
                    title: 'TALEN',
                    subSkills: [
                        {
                            title: 'Nederlands <br>(moedertaal)',
                            percentage: '10%',
                            amount: 100
                        },
                        {
                            title: 'Engels (Spreken, lezen <br>en scrhijven)<br>',
                            percentage: '10%',
                            amount: 80
                        },
                        {
                            title: 'Frans (basiskennis)',
                            percentage: '10%',
                            amount: 55
                        }
                    ]
                }
            ];

            $scope.showSkills = function (skills) {

                angular.forEach(skills, function (skill) {

                    angular.forEach(skill.subSkills, function (subSkill) {
                        $scope.randomTime( subSkill );
                    })
                });
            };

            $scope.randomTime = function (subSkill) {

                var rand = Math.random() * 500;
                $timeout(function () {
                    subSkill.percentage = subSkill.amount + '%';
                }, rand);
            };

            $timeout( function(){$scope.showSkills($scope.skills);$scope.showSecond=true;}, 500 );
        }])
;