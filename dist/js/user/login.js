(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// $('#login-form').on('submit', function () {
//     $(this).ajaxSubmit({
//         url: '/v6/login',
//         type: 'post',
//         data: {tc_name: '前端学院',tc_pass:'123456'},
//         success: function (data) {
//             console.log(data)
//              Location.href='/dist';
//
//         }
//     });
//     return false;
// });
$('#login-form').ajaxForm({
    success: function(data) {
        if(data.code == 200) {
            alert('登陆成功');
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
},{}]},{},[1]);
