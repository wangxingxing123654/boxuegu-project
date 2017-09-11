$.get(('/v6/category/top'),function (data) {
    
    $('#classify').html(template('category-add',data.result));
})
// $('#addform').on('submit',function () {
    $('#addform').ajaxForm({
        url:'/v6/category/add',
        type:'post',
        success:function (data) {
            if(data.code==200){
                alert('修改成功');
            }
        }
    })
// })