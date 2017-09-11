(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$('#repass-form').on('submit', function () {

    // 两次新密码校验，如果密码一致了，那么转ajax提交
    if ($('#input-pass').val() !== $('#input-pass-repeat').val()) {
        alert('两次密码输入不一致');
        return false;
    }

    // 这个方法只负责获取表单中的值，发送ajax请求，并不负责表单事件的监听与阻止，
    // 即时调即时发送请求，调用这个方法就相当于调用$.ajax
    // 之前的那个方法比较强大，但是不灵活，这个相对弱一点，但是比较灵活。
    $('#repass-form').ajaxSubmit({
        success: function (data) {
            console.log(data);
        }
    });
    return false;
});

},{}]},{},[1]);
