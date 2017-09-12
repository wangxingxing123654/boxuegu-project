(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function getSearch(key) {
    var searchStr=location.search.slice(1);         //切断？
    var searchArr=searchStr.split('&');
    var searchObj={};

    for(var i=0;i<searchArr.length;i++){
       var tempArr=searchArr[i].split('=');
        searchObj[tempArr[0]]=tempArr[1];
    }
    return key?searchObj[key]:searchObj;
}
//暴露接口
  module.exports.getSearch=getSearch;
},{}],2:[function(require,module,exports){
var getSearch=require('../common/util.js');
var cs_id=getSearch.getSearch('cs_id');

$.get('/v6/course/basic',{cs_id:cs_id},function (data) {
    console.log(template('cs-edit1', data.result));
    $('.content').append(template('cs-edit1',data.result));
})
$('#course-edit-tpl').ajaxForm({
    delegation:true,
    success:function (data) {
        if(data.code==200){
            alert('修改成功')
        }
    }
})
},{"../common/util.js":1}]},{},[2]);
