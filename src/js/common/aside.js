$('.avatar img').attr('src',JSON.parse(localStorage.getItem('userInfo'))['tc_avatar']);
$('.profile h4').text(JSON.parse(localStorage.getItem('userInfo'))['tc_name']);
//控制面板展开
$('.navs ul').prev('a').on('click', function () {
    $(this).next('ul').slideToggle();
});
//定位功能
var path = location.pathname;
$('.navs a').removeClass('active');
$('.navs a[href="' + path + '"]').addClass('active').parents('ul').show();