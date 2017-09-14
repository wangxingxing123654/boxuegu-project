var getSearch=require('../common/util.js');
var cs_id=getSearch.getSearch('cs_id');
$.get('/v6/course/lesson',{cs_id:cs_id},function (data) {
    data.result.page=3;
    $('.course-add').append(template('course-edit3-tpl',data.result));
})

//编辑章节
//1.回显
//2.修改
//3.添加
$(document).on('click','#modalEdit',function (data) {
    var ct_id=$(this).attr('data-ct-id');
    $.get('/v6/course/chapter/edit',{ct_id:ct_id},function (data) {
        if(data.code==200){
            data.result.ct_id=ct_id;
            $('#chapterModal').html(template('modal',data.result));
        }
    })

})
$(document).on('click', '#btn-lesson-add', function() {
     // 空对象中额外添加cs_id是因为后端需要这个值来区分修改的章节属于那个课程
        $('#chapterModal').html(template('modal', { ct_cs_id: cs_id }));
});
$('#modal-modify').ajaxForm({
    delegation:true,
    success:function (data) {
        console.log(data);
        if(data.result){
            alert('添加成功');
            $('#modal-modify').get(0).reset();
        }else{
            alert('修改成功')
        }

    }
})

