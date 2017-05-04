var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){

    this.contactList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/interactionrelation/v1/listInteractionRelation?limit=10&page='+argvs.page,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 添加
    this.contactAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/interactionrelation/v1/add',
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 编辑
    this.contactEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/interactionrelation/v1/edit',
            form:argvs
        };
        return request(options);
    };
    //获取ID
    this.findContactId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/interactionrelation/v1/getOne/' + argvs.id
        };
        return request(options);
    };
    //删除
    this.contactDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + '/interactionrelation/v1/delete/' + argvs.id
        };
        return request(options);
    };
    //获取总条数
    this.getContactTotal = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/interactionrelation/v1/count'
        };
        return request(options);
    };
    //留言列表
    this.contactMessage = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/leavingmessage/v1/listLeavingMessage?limit=10&page='+argvs.page+'&interactionId='+argvs.id
        };
        return request(options);
    };
    // 添加留言
    this.MessageAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/leavingmessage/v1/add',
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取留言列表总条数
    this.getMessageTotal = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/leavingmessage/v1/count'
        };
        return request(options);
    };
    //互动平台描述列表
    this.demandList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/demand/v1/listDemand?limit=10&page${argvs.page}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 添加互动平台描述
    this.demandAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/demand/v1/add',
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 编辑互动平台描述
    this.demandEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/demand/v1/edit',
            form:argvs
        };
        return request(options);
    };
    //获取ID
    this.findDemandId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/demand/v1/getOne/${argvs.id}`
        };
        return request(options);
    };
    //删除互动平台描述
    this.demandDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/demand/v1/delete/${argvs.id}`
        };
        return request(options);
    };
    //获取总条数互动平台描述
    this.getDemandTotal = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/demand/v1/count'
        };
        return request(options);
    };
    //洽谈详情列表
    this.TalkList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/talkdetail/v1/listTalkDetail?limit=10&page=${argvs.page}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 添加洽谈详情
    this.TalkAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/talkdetail/v1/add?userToken=${argvs.userToken}`,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 编辑洽谈详情
    this.TalkEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/talkdetail/v1/edit?userToken=${argvs.userToken}`,
            form:argvs
        };
        return request(options);
    };
    //获取ID洽谈详情
    this.findTalkId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/talkdetail/v1/getOne/${argvs.id}`
        };
        return request(options);
    };
    //删除洽谈详情
    this.TalkDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/talkdetail/v1/delete/${argvs.id}?userToken=${argvs.userToken}`
        };
        return request(options);
    };
    //获取总条数洽谈详情
    this.getTalkTotal = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/talkdetail/v1/count'
        };
        return request(options);
    };
    //邮件汇总列表
    this.MailList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/collectemail/v1/listCollectEmail?limit=10&page=${argvs.page}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 添加邮件汇总
    this.MailAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/collectemail/v1/add?userToken=${argvs.userToken}`,
            form:argvs
        };
        return request(options);
    };
    // 编辑邮件汇总
    this.MailEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/collectemail/v1/edit',
            form:argvs
        };
        return request(options);
    };
    //获取ID邮件汇总
    this.findMailId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/collectemail/v1/getOne/${argvs.id}`
        };
        return request(options);
    };
    //删除邮件汇总
    this.mailDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/collectemail/v1/delete/${argvs.id}?userToken=${argvs.userToken}`
        };
        return request(options);
    };
    //获取总条数邮件汇总
    this.getMailTotal = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/collectemail/v1/count'
        };
        return request(options);
    };
    //冻结邮件汇总
    this.MailCongeal = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/collectemail/v1/congeal/${argvs.id}`
        };
        return request(options);
    };
    //解冻邮件汇总
    this.MailThaw = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/collectemail/v1/thaw/${argvs.id}`
        };
        return request(options);
    };
    //汇总
    this.collectSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/collectemail/v1/collect?areas=${encodeURIComponent(argvs)}`,
            form:argvs,
        };
        return request(options);
    };
    //获取所有地区
    this.getAllArea = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/collectemail/v1/listArea'
        };
        return request(options);
    };
    return this;
}