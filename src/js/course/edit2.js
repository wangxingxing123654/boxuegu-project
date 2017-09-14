var getSearch=require('../common/util.js');
var cs_id=getSearch.getSearch('cs_id');
$.get('/v6/course/picture',{cs_id:cs_id},function (data) {
    data.result.page=2;
    $('.course-add').append(template('course-edit2-tpl',data.result));
})
// $('#course-edit2-tpl').ajaxForm({
//     delegation:true,
//     success:function (data) {
//         if(data.code==200){
//
//             alert('修改成功');
//             location.href='/dist/html/course/edit3.html?cs_id='+cs_id;
//         }
//     }
// })