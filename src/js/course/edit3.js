var getSearch = require('../common/util.js');
var cs_id = getSearch.getSearch('cs_id');
var lessons;
$.get('/v6/course/lesson', {cs_id: cs_id}, function (data) {
    lessons = data.result.lessons;
    data.result.page = 3;
    $('.course-add').append(template('course-edit3-tpl', data.result));
})

//编辑章节
//1.回显
//2.修改
//3.添加
$(document).on('click', '#modalEdit', function (data) {
    var ct_id = $(this).attr('data-ct-id');
    $.get('/v6/course/chapter/edit', {ct_id: ct_id}, function (data) {
        if (data.code == 200) {
            data.result.ct_id = ct_id;
            $('#chapterModal').html(template('modal', data.result));
        }
    })

})
$(document).on('click', '#btn-lesson-add', function () {
    // 空对象中额外添加cs_id是因为后端需要这个值来区分修改的章节属于那个课程
    $('#chapterModal').html(template('modal', {ct_cs_id: cs_id}));
});
$('#modal-modify').ajaxForm({
    delegation: true,
    beforeSubmit: function (arrData, $form, options) {
        arrData.push({
            name: 'ct_is_free',
            value: $('#ct_is_free').prop('checked') ? 1 : 0
        })
    },
    success: function (data) {
        if (data.result) {
            alert('添加成功');
            upLessons(data.result);
            $('#modal-modify').get(0).reset();
        } else {
            alert('修改成功');
            upLessons();
        }
        console.log(lessons);
        $('#rendering').html(template('upLessons', lessons));
    }
})
//1.lessons
function upLessons(ct_id) {
    var formData = getFormdata();
    console.log(formData);
    var lesson = {
        ct_name: formData.ct_name,
        ct_video_duration: formData.ct_minutes + ':' + formData.ct_seconds,
        ct_id: formData.ct_id || ct_id
    }
    if (ct_id) {
        lessons.push(lesson);
    } else {
        var index = getIndex(formData.ct_id);
        console.log(index);
        lessons.splice(index, 1, lesson);
    }
}

//
function getFormdata() {
    var newFormDataArr = {};
    var formDataArr = $('#modal-modify').serializeArray();
    for (var i = 0; i < formDataArr.length; i++) {
        newFormDataArr[formDataArr[i].name] = formDataArr[i].value;
    }
    ;
    return newFormDataArr;
}
function getIndex(ct_id) {
    for (var i = 0; i < lessons.length; i++) {
        if (lessons[i].ct_id == ct_id) {
            return i;
        }
    }
}