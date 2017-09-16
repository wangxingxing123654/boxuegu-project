

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