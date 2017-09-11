(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$.get(('/v6/category/top'),function (data) {
    
    $('#classify').html(template('category-add',data.result));
})
// $('#addform').on('submit',function () {
    $('#addform').ajaxForm({
        url:'/v6/category/add',
        type:'post',
        success:function (data) {
            if(data.code==200){
                alert('修改成功');
            }
        }
    })
// })
},{}]},{},[1]);
