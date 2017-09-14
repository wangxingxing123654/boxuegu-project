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
    data.result.page=1;
    $('.course-add').append(template('cs-edit1',data.result));
})
$('#course-edit-tpl').ajaxForm({
    delegation:true,
    success:function (data) {
        if(data.code==200){

            alert('修改成功');
            location.href='/dist/html/course/edit2.html?cs_id='+cs_id;
        }
    }
})
/**
 * 学科二级联动：
 * 1、因为整个数据回显是动态构建的，所以通过委托的方式监听父级学科select的change事件
 * 2、事件发生时获取所选顶级学科cg_id，调用接口获取对应的子级学科列表
 * 3、拿到数据后动态生成新的子级option进行替换
 * */
$(document).on('change', '#category-top-select', function() {

    // select的value就是用户所选的顶级学科cg_id
    var topCgid = $(this).val();

    // 利用顶级学科cg_id获取对应子级学科列表
    $.get('/v6/category/child', { cg_id: topCgid }, function(data) {

        var html = '';
        var childList = data.result;

        if(data.code == 200) {
            // 根据子级列表动态生成对应的option
            for(var i = 0, len = childList.length; i < len; i++) {
                html += '<option value="' + childList[i].cg_id + '">' + childList[i].cg_name + '</option>'
            }
        }

        // 使用新的option进行替换
        $('#category-child-select').html(html);
    });
});
},{"../common/util.js":1}]},{},[2]);
