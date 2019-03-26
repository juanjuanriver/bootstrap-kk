
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
	
	
	
})
