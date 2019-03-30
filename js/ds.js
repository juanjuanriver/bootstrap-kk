$(function(){
	 //3.大赛
	 //	返回顶部箭头
    $("#backtop").click(function(){
    	if(scroll=="off") return;
	$("html,body").animate({scrollTop: 0}, 300);
    });
    
    //查看更多
    $(".ds_more").click(function(){
    	$("#dasai_click").show();
    })
   
   //大赛模态框手机图出现
	$(".motai_content").mouseenter(function(){
		$(this).find("span").children().show();
		
	})
	$(".motai_content").mouseleave(function(){
		$(this).find("span").children().hide();
	})
	  
})