angular.module('starter', ['ionic'])
    .controller("MyController", function($scope) {
        initializeForm();

        $scope.submit = function () {
            $scope.submitted = true;
            $scope.view = "story";
        };

    $scope.submitted = false;

        function initializeForm() {
            $scope.data = getNewWords();
            $scope.submitted = false;
            $scope.view = "form"; // views are 'form' and 'story'
        }

        function getNewWords() {
            return {
                aclass: '___', 
                food1: '___',
                food2: '___', 
                food3: '___',
                pasttenseverb: '___',
                adjective: '___',
                adverb: '___',
                noun: '___',
                phone: '___',
                dancemove: '___',
                greekorg: '___',
                username: '___',
                place: '___',
                verb: '___',
                emotion: '___',
            };
        }

});
