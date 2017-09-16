var getSearch=require('../common/util.js');
var cs_id=getSearch.getSearch('cs_id');
$.get('/v6/course/picture',{cs_id:cs_id},function (data) {
    data.result.page=2;
    $('.course-add').append(template('course-edit2-tpl',data.result));
    initPlugin();
})
function initPlugin() {

    $('#uploadify').uploadify({
        swf: '/lib/jquery-uploadify/uploadify.swf',  // 这个是flash脚本，必须引入，不然无法选择文件
        uploader: '/v6/uploader/cover',                  // 这个是上传图片的接口
        fileTypeExts: '*.gif; *.jpg; *.png',                 // 这个用来限制上传图片的类型
        fileObjName: 'cs_cover_original',                // 这个用来设置提交给后端时，文件数据对应的name
        formData: {                                                  // 如果接口需要额外的数据，通过这个配置来添加
            cs_id:  cs_id
        },
        buttonText: '选择图片',
        buttonClass: 'btn btn-success btn-sm',
        onUploadSuccess: function(file, dataStr) {                    // 图片上传成功后的回调
            var data = JSON.parse(dataStr);
            $('.preview img').attr('src', data.result.path);
        }
    });

}
// $('img').Jcrop({
//     aspectRatio: 1,
//     setSelect: [ x,y,w,h ],
//     bgColor: 'red'
// }, callback);
$(document).on('click', '#btn-clip', function() {

    // 当裁剪插件初始化完毕后，会执行回调，回调中的this为插件实例，通过这个实例可以拿到一些的数据
    $('.preview img').Jcrop({
        aspectRatio: 2
    }, function() {
        window.J = this;
    });

});

/**
 * 委托方式给保存按钮绑定点击事件，点击时把裁剪的数据传送给后端
 * */
$(document).on('click', '#btn-slip-save', function() {

    var data = J.getSelection();
    data.cs_id = cs_id;
    $.post('/v6/course/update/picture', data, function(data) {
        alert('裁剪成功');
        location.href = '/dist/html/course/edit3.html?cs_id=' + cs_id;
    });

});