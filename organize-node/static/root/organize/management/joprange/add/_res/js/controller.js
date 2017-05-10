var app = angular.module('joprangeAdd', ['toastr']);
app.controller('joprangeAddCtrl', function($scope,$state,toastr,joprangeSer){

    joprangeSer.getDirection().then(function(response){
       if(response.data.code==0){
           $scope.directionList = response.data.data;
       }
    });
    joprangeSer.getProject().then(function(response){
       if(response.data.code==0){
           $scope.projectList = response.data.data;
       }
    });
    joprangeSer.findClassify().then(function(response){
       if(response.data.code==0){
           $scope.classifyList = response.data.data;
       }
    });


    $scope.joprangeAddFun=function(){
        var data={
            direction:$scope.direction,
            project:$scope.project,
            classify:$scope.classify,
            workRange:$scope.workRange,
            node:$scope.node,
        }
        joprangeSer.addJoprange(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.joprange.list');
                toastr.success( $scope.direction+"已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        })
    }

});





