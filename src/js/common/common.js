    NProgress.start();
    window.onload=function () {
        NProgress.done();
    }
var isLogin=!!$.cookie('PHPSESSID');
var isLoginPath=location.pathname=='/dist/html/user/login.html';

//如果在登录页面而且有cookie。跳到首页
if(isLogin&&isLoginPath){
    location.href='/dist';
}
//如果不在登录页面，而且没有cookie,跳到登录页面。
if(!isLogin&&!isLoginPath){
    location.href='/dist/html/user/login.html';
}