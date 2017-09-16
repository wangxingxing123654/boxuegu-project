(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


var tc_avatar;

$.ajax({
    url: '/v6/teacher/profile',
    type: 'get',
    success: function (data) {
        if (data.code == 200) {
            $('.teacher-profile').html(template('profile', data.result));
            tc_avatar=data.result.tc_avatar;
            console.log(tc_avatar);
            init();
        }
    }
})
$('#modify').ajaxForm({
    delegation: true,
    success: function (data) {
        console.log(data);
        alert('修改成功');
    }

})
function init() {
    $('#tc_birthday').datepicker({
        language: 'zh-CN',
        format: 'yyyy-mm-dd',
        endDate: new Date('2010-01-01')
    });
    $('#tc_join_date').datepicker({
        language: 'zh-CN',
        format: 'yyyy-mm-dd',
        endDate: new Date('2010-01-01')
    });
    $('#region-container').region({
        url: '/lib/jquery-region/region.json'
    });
    $('#upfile').uploadify({
        swf: '/lib/jquery-uploadify/uploadify.swf',
        uploader: '/v6/uploader/avatar',
        buttonText: '上传头像',
        fileObjName: 'tc_avatar',
        formData: {                                                  // 如果接口需要额外的数据，通过这个配置来添加
              tc_avatar:"http://static.botue.com/images/avatar/code.jpg"
       },
        fileTypeExts: '*.gif; *.jpg; *.png',
        onUploadSuccess: function (file, dataStr) {
            console.log(dataStr);
            // 图片上传成功后的回调
            var data = JSON.parse(dataStr);
            $('#avatar-img img').attr('src', data.result.path);
        }
    });
     window.edit = CKEDITOR.replace("ckeditor", {
        width:600
    });
}
},{}]},{},[1]);
