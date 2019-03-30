$(function(){
	//	轮播时间
	$('.carousel').carousel({
	  interval: 2000
	});
	
	//  2.产品介绍 
     //  wow使用必写
     if (!(/meis[6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    }
    
   //下载客户端蒙版
   $(".pro_downloadBox ul li").mouseenter(function(){
   	   $(this).find("em").addClass("pro_down_mask").siblings().find("em").removeClass('pro_down_mask');
   })
    $(".pro_downloadBox ul li").mouseleave(function(){
   	   $(this).find("em").removeClass("pro_down_mask").siblings().find("em").removeClass('pro_down_mask');
   })
           
})