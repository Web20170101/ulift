/**
 * Created by Administrator on 2017/6/11.
 */
//加载footer
$("footer").load('footer.html');
function main(callback){
    $(".header").load("header.html", function () {
        //判断是否登录
        isLogin();
        //调用回调函数
        if(callback){
            callback();
        }
    });
}
//判断用户是否登录
function isLogin(){
    if(sessionStorage.userId){//已登录
        logined();
    }else{//未登录
        noLogin();
    }
}
//已登录
function logined(){

}
//未登录
function noLogin(){
    var userStr = '<a href="" id="loginModal">登录</a>|<a href="#">注册</a>';
    $("#header_user").html(userStr);
    //为登录绑定事件
    $("#loginModal").click(function (e) {
        e.preventDefault();//阻止默认事件
        if($(".login_bg").size()==0){//未加载
            $.ajax({
                type:'get',
                url:'login.html',
                success: function (data) {
                    $('body').append(data);
                    //关闭登陆框
                    $(".login_bg").click(function (e) {
                        /*兼容性解决方案：
                         e = e || window.event; // 事件
                         var target = e.target || e.srcElement; // 获得事件源
                         还可以通过为$(".login_box)添加阻止事件冒泡来解决：
                         $(".login_box").click(function(e){
                         e.stopPropagation();
                         });
                         */
                        if(e.target==this){
                            $(this).hide();
                        }
                    });
                    $(".close").click(function () {
                        $(".login_bg").hide();
                    });
                    //登录
                    $("#login").click(function () {
                        login();
                    });
                }
            });
        }else{//已加载
            $(".login_bg").show();
        }
    });
}
//登录
function login(){

}
