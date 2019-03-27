
$(function(){
	//导航条变色
	 $(".nav>li").click(function()  {
            var i = $(this).index();//控制下标
             $(this).addClass('active').siblings().removeClass('active');
        });
	
//	轮播时间
	$('.carousel').carousel({
	  interval: 2000
	});
//	返回顶部箭头
    $("#backtop").click(function(){
    	if(scroll=="off") return;
	$("html,body").animate({scrollTop: 0}, 300);
    });
	
//	查看更多
    $(".ds_more").click(function(){
    	$("#dasai_click").show();
    })
    
    
//个人中心
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
    
//  蒙版
    $(".sg_zp_contents>div").mouseenter(function(){
    	var i = $(this).index();//控制下标
    	$(this).find(".sg_mask").show().siblings().find(".sg_mask").hide();
    })
    $(".sg_zp_contents>div").mouseleave(function(){
    	var i = $(this).index();//控制下标
    	$(this).find(".sg_mask").hide().siblings().find(".sg_mask").hide();
    })
        
//  产品介绍 
//下载客户端蒙版
   $(".pro_downloadBox ul li").mouseenter(function(){
   	   $(this).find("em").addClass("pro_down_mask").siblings().find("em").removeClass('pro_down_mask');
   })
    $(".pro_downloadBox ul li").mouseleave(function(){
   	   $(this).find("em").removeClass("pro_down_mask").siblings().find("em").removeClass('pro_down_mask');
   })
        
        
        
        
        
        
        
        
        
        
        
        
//  删除图标出现
    $(".products_conts>p").mouseenter(function(){
    	$(this).find(".glyphicon-trash").show();
	})
	$(".products_conts>p").mouseleave(function(){
		$(this).find(".glyphicon-trash").hide();
	})
	
	
})
