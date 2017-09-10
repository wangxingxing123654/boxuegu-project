$('#login-form').on('submit', function () {
    $(this).ajaxSubmit({
        url: '/v6/login',
        type: 'post',
        data: {tc_name: '前端学院',tc_pass:'123456'},
        success: function (data) {
            console.log(data)
             Location.href='/dist';

        }
    });
    return false;
});
