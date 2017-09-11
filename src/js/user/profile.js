$.ajax({
    url:'/v6/teacher/profile',
    type:'get',
    success:function (data) {
       if(data.code==200){

           $('.teacher-profile').html(template('profile',data.result))
       }
    }
})
$('#modify').ajaxForm( {
     delegation:true,
    success:function (data) {
        console.log(data);
        alert('修改成功');
    }

})