var app = angular.module('alreadyMonth', ['toastr']);
app.controller('alreadyMonthCtrl', function($scope,$state,toastr,alreadySer){
    $scope.collect = function(){
        var data = {
            years:$scope.years,
            month:$scope.month
        };
        alreadySer.monthReady(data).then(function(response){
            if(response.data.code == 0&&response.data.data){
                $scope.summaryLists = response.data.data
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





