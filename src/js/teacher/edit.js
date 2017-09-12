var getId=require('../common/util.js');
var tc_id=getId.getSearch('tc_id');



$.get('/v6/teacher/edit',{tc_id:tc_id},function (data) {
    if(data.code==200){
             $('.teacher-add').html(template('teacher-edit-tpl',data.result));
      }
})
$('#teacher-edit-form').ajaxForm({
    delegation:true,
    success:function (data) {
        console.log(data.code);
        alert('修改成功');
    }
})