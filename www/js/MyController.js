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
                aclass: '', 
                food1: '',
                food2: '', 
                food3: '',
                pasttenseverb: '',
                adjective: '',
                adverb: '',
                noun: '',
                phone: '',
                dancemove: '',
                greekorg: '',
                username: '',
                place: '',
                verb: '',
                emotion: '',
            };
        }

});
