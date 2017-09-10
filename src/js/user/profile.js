$.ajax({
    url:'/v6/teacher/profile',
    type:'get',
    success:function (data) {
       if(data.code==200){
           console.log(template('profile',data.result));
           $('.teacher-profile').html(template('profile',data.result))
       }
    }
})