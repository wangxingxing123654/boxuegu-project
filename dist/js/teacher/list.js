(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$.get('/v6/teacher', function (data) {
    var html = template('teacher-list-tpl', data.result);
    $('#table-list-tpl').append(html);
})
//启用或者注销讲师。
$(document).on('click', '#toggle', function () {
    var tc_id = $(this).attr('data-id');
    var tc_status = $(this).attr('data-status');
    var $this = $(this);
    var param = {tc_id: tc_id, tc_status: tc_status};


    $.post('/v6/teacher/handle', param, function (data) {
        console.log(data.result.tc_status);
        if (data.code == 200) {
            $this.text(data.result.tc_status == 0 ? '注销' : '启用');
            $this.attr('data-status', data.result.tc_status )
        }
    })
})

},{}]},{},[1]);
