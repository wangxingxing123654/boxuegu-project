(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
    NProgress.start();
    window.onload=function () {
        NProgress.done();
    }
var isLogin=!!$.cookie('PHPSESSID');
var isLoginPath=location.pathname=='/dist/html/user/login.html';

//如果在登录页面而且有cookie。跳到首页
if(isLogin&&isLoginPath){
    location.href='/dist';
}
//如果不在登录页面，而且没有cookie,跳到登录页面。
if(!isLogin&&!isLoginPath){
    location.href='/dist/html/user/login.html';
}
},{}],2:[function(require,module,exports){
require('../common/common.js');
$('#login-form').ajaxForm({
    success: function(data) {
        if(data.code == 200) {
            alert('登陆成功');
            console.log(data);
            var dataStr=JSON.stringify(data.result);
            localStorage.setItem('userInfo',dataStr);
            location.href = '/dist';
        }else {
            alert('登陆失败');
        }

    },
    error: function() {
        alert('登陆失败');
    }
});
var userinfo = JSON.parse(localStorage.getItem('userInfo')) || {};
var tc_avatar = userinfo.tc_avatar || 'http://static.botue.com/images/avatar/58613845e749c.jpg';
$('.avatar img').attr('src', tc_avatar);


},{"../common/common.js":1}]},{},[2]);
