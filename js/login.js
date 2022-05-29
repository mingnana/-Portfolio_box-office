$(document).ready(function(){
    showCate()
})
function showCate(){

    $(".memberCate a").on("click focus", function(){
        $(".memberCate").css("borderBottom","2px solid #333").siblings().css("borderBottom","2px solid #ccc")
        $("#login_mem").css("display","block").siblings().css("display","none")
    })

    $(".nonmemCate a").on("click focus",function(){
        $(".nonmemCate").css("borderBottom","2px solid #333").siblings().css("borderBottom","2px solid #ccc")
        $("#login_nonmem").css("display","block").siblings().css("display","none")
    })

    $(".socialCate a").on("click focus",function(){
        $(".socialCate").css("borderBottom","2px solid #333").siblings().css("borderBottom","2px solid #ccc")
        $("#login_social").css("display","block").siblings().css("display","none")
    })
} 


// 모바일버전 footer
$(".showinfo").hide()
var more = true;
function showgnb(){
   if(more == true){
      $(".showinfo").show().animate({"height":"40px"})
      more = false;
   }else{
    $(".showinfo").hide().animate({"height":"0"})
      more = true;
   }
}