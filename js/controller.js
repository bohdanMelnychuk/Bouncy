var app = angular.module('appBouncy',[]);
    app.controller('bouncyCtrl',['$scope',function($scope){
        $scope.validateInputField = function(error){
            var massage;
            if(angular.isDefined(error)){
                if(error.required){
                    massage = 'This field is required';
                }else if(error.email){
                    massage = 'Not valid email';
                }
            }
            return massage;
        };
        $scope.showMap = function(e){
            e.preventDefault();
            $('.find-us-on-map').css({
                opacity : 0
            })
        };
            
    }]);