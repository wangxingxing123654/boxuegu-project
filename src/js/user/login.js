require('../common/common.js');
$('#login-form').ajaxForm({
    success: function(data) {
        if(data.code == 200) {
            alert('登陆成功');
            console.log(data);
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
var userinfo = JSON.parse(localStorage.getItem('userInfo')) || {};
var tc_avatar = userinfo.tc_avatar || 'http://static.botue.com/images/avatar/58613845e749c.jpg';
$('.avatar img').attr('src', tc_avatar);

