$(function(){
	
	//	轮播时间
	$('.carousel').carousel({
	  interval: 2000
	});
//	返回顶部箭头
    $("#backtop").click(function(){
    	if(scroll=="off") return;
	$("html,body").animate({scrollTop: 0}, 300);
    });
	
	
//	1.主页
	//导航条变色
	 $(".nav>li").click(function()  {
            var i = $(this).index();//控制下标
             $(this).addClass('active').siblings().removeClass('active');
      });
//  主页换一批
      $(function() {
        sjShow();
        $("#index_change").click(function(){
            sjShow();
        });
    })
    function sjShow(){
        $(".change_1>div>div").hide();
        var showCount=0;
        while(showCount<8){
            var id=Math.floor(Math.random()*16);
            var curDiv=$(".change_1>div>div").eq(id);
            if(curDiv.css("display")=="none"){
                curDiv.css("display","block");
                showCount++;
            }
        }
    }
	
	
	
})
