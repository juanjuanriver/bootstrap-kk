$(function(){
	//4.个人中心
//	个人中心弹出二维码
	$(".weixin").mouseenter(function(){
		$(".erweima").show();
	})
	$(".weixin").mouseleave(function(){
		$(".erweima").hide();
	})
	
//	个人中心切换
	$('.zuoping').click(function()  {
            var i = $(this).index();//控制下标
            $(this).addClass('zuoping_on').parent().siblings().find("b").removeClass('zuoping_on');
            $(".sg_zp").show();
	    	$(".bg_zj").hide();
	    	$(".sg_bz").hide();
     })
        
    $(".zhuanji").click(function(){
    	 var i = $(this).index();//控制下标
         $(this).addClass('zuoping_on').parent().siblings().find("b").removeClass('zuoping_on');
    	$(".sg_zp").hide();
    	$(".bg_zj").show();
    	$(".sg_bz").hide();
    })
    
     $(".banzou").click(function(){
    	 var i = $(this).index();//控制下标
        $(this).addClass('zuoping_on').parent().siblings().find("b").removeClass('zuoping_on');
    	$(".sg_zp").hide();
    	$(".bg_zj").hide();
    	$(".sg_bz").show();
    })
    
//  蒙版和删除图标出没
    $(".sg_zp_contents>div").mouseenter(function(){
    	$(this).find(".sg_mask").show().siblings().find(".sg_mask").hide();
    	$(this).find(".glyphicon-trash").show();
    })
    $(".sg_zp_contents>div").mouseleave(function(){
    	$(this).find(".sg_mask").hide().siblings().find(".sg_mask").hide();
    	$(this).find(".glyphicon-trash").hide();
    })
       
       
    //返回顶部
     $("#backtop").click(function(){
    	if(scroll=="off") return;
	$("html,body").animate({scrollTop: 0}, 300);
    });
    
//  //删除图标出现
//  $(".products_conts>p").mouseenter(function(){
//  	$(this).find(".glyphicon-trash").show();
//	})
//	$(".products_conts>p").mouseleave(function(){
//		$(this).find(".glyphicon-trash").hide();
//	})

})