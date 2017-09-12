$('#teacher-adding').ajaxForm({
    success:function (data) {
        if(data.code==200){
            console.log(data);
            alert('修改成功')
        }
    }
})