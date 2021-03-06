var app = angular.module('returnRecordEdit', ['toastr']);
app.controller('returnRecordeditCtrl', function($scope, returnRecordSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取id对应的数据 
    returnRecordSer.getOneById(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }else{
            toastr.error( response.data.msg , '温馨提示');
        }
    });

    //点击提交
    $scope.EditFun =function(){
        if(!$scope.data.returnAccount)return
        $scope.data.returnDate = angular.element('.time').val();
        var data = $scope.data;
        data.id = companyId.id;
        returnRecordSer.editData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.borrowRefund.borrowManage.returnRecord.list[12]');
                toastr.success('温馨提示',"此次还款核对成功");
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        })
    }
});
   