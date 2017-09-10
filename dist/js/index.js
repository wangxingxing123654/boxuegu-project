(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$('.avatar img').attr('src',JSON.parse(localStorage.getItem('userInfo'))['tc_avatar']);
$('.profile h4').text(JSON.parse(localStorage.getItem('userInfo'))['tc_name']);
//控制面板展开
$('.navs ul').prev('a').on('click', function () {
    $(this).next('ul').slideToggle();
});
//定位功能
var path = location.pathname;
$('.navs a').removeClass('active');
$('.navs a[href="' + path + '"]').addClass('active').parents('ul').show();
},{}],2:[function(require,module,exports){

	// NProgress.start();
    //
	// NProgress.done();
    
},{}],3:[function(require,module,exports){
// �˳�����
$('#btn-logout').on('click', function() {
    $.ajax({
        url: '/v6/logout',
        type: 'post',
        success: function(data) {
            if(data.code == 200) {
                alert('退出成功');
                location.href = '/dist/html/user/login.html';
            }
        }
    });
});

},{}],4:[function(require,module,exports){
require('./common/header.js');
require('./common/aside.js');
require('./common/common.js');
},{"./common/aside.js":1,"./common/common.js":2,"./common/header.js":3}]},{},[4]);
