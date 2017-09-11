(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


var getSearch=require('../common/util.js');

var cg_id=getSearch.getSearch('cg_id');
console.log(cg_id);
$.get('/v6/category/edit',{cg_id:cg_id},function (data) {
    console.log(template('category-edit', data.result));
    $('.category-add').append(template('category-edit',data.result));
})
$('#modifying').ajaxForm({
    delegation:true,
    success:function (data) {
        alert('修改成功');
    }
})
},{"../common/util.js":2}],2:[function(require,module,exports){
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
},{}]},{},[1]);
