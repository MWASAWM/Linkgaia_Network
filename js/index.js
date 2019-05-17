$(function(){
    $('.detail').click(function(){
        var display=$(this).find('dd').css("display");
        if(display!="block"){
            $(this).find('dd').css("display","block");
            $(this).siblings().find('dd').css("display","none");
            if($(this).hasClass("intro")){
                $(".icon1").css("background-image","url(../img/icon11.png)");
            }else{
                $(".icon1").css("background-image","url(../img/icon1.png)");
            }
            if($(this).hasClass("team")){
                $(".icon2").css("background-image","url(../img/icon22.png)");
            }else{
                $(".icon2").css("background-image","url(../img/icon2.png)");
            }
            if($(this).hasClass("idea")){
                $(".icon3").css("background-image","url(../img/icon33.png)");
            }else{
                $(".icon3").css("background-image","url(../img/icon3.png)");
            }
        }
        else {
            $(this).find('dd').css("display","none");
        }
   })
})