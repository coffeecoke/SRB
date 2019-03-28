 // <!-- header切换-->
 $(".box-head-l-switch li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});
/*鼠标滑过出现二三级菜单*/
$(".box-nav-list li").hover(function(){
    $(this).find(".box-second-nav").toggleClass("toggleBox");
    $(this).find("a").toggleClass("borderBottom");
});
/* banner切换 */
var swiper=new Swiper("#swiper1",{
    slidesPerView:1,
    spaceBetween:0,
    loop:true,
    autoplay:2000,
    pagination:".swiper-pagination"
}); 

/* 左侧菜单 */
$(".box-meau-ul li a").click(function(){
    $(this).parent().toggleClass("meauHover");
    $(this).siblings().slideToggle();
})
var liNum=$(".box-nav-meau li").length/2;
$(".box-nav-meau").css("width",liNum*175)