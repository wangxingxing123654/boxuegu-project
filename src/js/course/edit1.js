var getSearch=require('../common/util.js');
var cs_id=getSearch.getSearch('cs_id');

$.get('/v6/course/basic',{cs_id:cs_id},function (data) {
    console.log(template('cs-edit1', data.result));
    $('.content').append(template('cs-edit1',data.result));
})
$('#course-edit-tpl').ajaxForm({
    delegation:true,
    success:function (data) {
        if(data.code==200){
            alert('修改成功')
        }
    }
})