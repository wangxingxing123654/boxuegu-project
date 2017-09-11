

var getSearch=require('../common/util.js');

var cg_id=getSearch.getSearch('cg_id');
console.log(cg_id);
$.get('/v6/category/edit',{cg_id:cg_id},function (data) {
    console.log(template('category-edit', data.result));
    $('.category-add').append(template('category-edit',data.result));
})
$('#modifying').ajaxForm({
    delegation:true,
    success:function (data) {
        alert('修改成功');
    }
})