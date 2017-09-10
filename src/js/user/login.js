// $('#login-form').on('submit', function () {
//     $(this).ajaxSubmit({
//         url: '/v6/login',
//         type: 'post',
//         data: {tc_name: '前端学院',tc_pass:'123456'},
//         success: function (data) {
//             console.log(data)
//              Location.href='/dist';
//
//         }
//     });
//     return false;
// });
$('#login-form').ajaxForm({
    success: function(data) {
        if(data.code == 200) {
            alert('登陆成功');
            var dataStr=JSON.stringify(data.result);
            localStorage.setItem('userInfo',dataStr);
            location.href = '/dist';
        }else {
            alert('登陆失败');
        }
    },
    error: function() {
        alert('登陆失败');
    }
});