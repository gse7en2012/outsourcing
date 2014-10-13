$(function(){
   $(".c-m-r-part3 ul li .c-m-r-part3-num").eq(0).css("color","#ff9900");
   $(".c-m-r-part3 ul li .c-m-r-part3-num").eq(1).css("color","#ff9900");
   $(".c-m-r-part3 ul li .c-m-r-part3-num").eq(2).css("color","#ff9900");
   
   var state=0;
  
   var pindex=parseInt($(".c-m-l-title").attr("data-zj"))-1;
   var pedit=parseInt($(".c-m-l-title").attr("data-num")-1);
   $(".c-m-r-part2-course div").eq(pindex).show();
   $(".c-m-r-part2-course div").eq(pindex).find("a").eq(pedit).addClass("current");
   
   $(".c-m-part2-more").click(function(){
		if(state==0){
			$(".c-m-r-part2-course div").fadeIn();
			$(".c-m-part2-more").text("关闭其他章节")
			$(".c-m-r-part2-h2").css({"background":"url(images/resources_rank/bang_h1.jpg) no-repeat"});
			state=1;
		}else{
			$(".c-m-r-part2-course div").hide();
			$(".c-m-r-part2-course div").eq(pindex).fadeIn();
			$(".c-m-r-part2-h2").css({"background":"url(images/resources_rank/bang_h1_plus.jpg) no-repeat"});
			state=0;
		}
   });

    $('.c-m-r-part2-h2').toggle(function(){
        $('.c-m-r-part2-box').slideUp();
        $(".c-m-r-part2-h2").css({"background":"url(images/resources_rank/bang_h1_plus.jpg) no-repeat"});
    },function(){
        $('.c-m-r-part2-box').slideDown();
        $(".c-m-r-part2-h2").css({"background":"url(images/resources_rank/bang_h1.jpg) no-repeat"});
    })

    $('.c-m-r-part3-h2').toggle(function(){
        $('.c-m-r-part3-box').slideUp();
        $(".c-m-r-part3-h2").css({"background":"url(images/resources_rank/bang_h1_plus.jpg) no-repeat"});
    },function(){
        $('.c-m-r-part3-box').slideDown();
        $(".c-m-r-part3-h2").css({"background":"url(images/resources_rank/bang_h1.jpg) no-repeat"});
    })
	
	
	$(".c-m-l-b-title").click(function(){
		if($(this).next().css("display")!="none"){
			$(this).next().slideUp();
			$(".c-m-l-b-title").css({"background":"url(images/resources_rank/icon_h2_turn.jpg) 20px 5px no-repeat","background-color":"#d0f6ff"})
		}else{
			$(this).next().slideDown();
			$(".c-m-l-b-title").css({"background":"url(images/resources_rank/icon_h2.jpg) 20px 5px no-repeat","background-color":"#d0f6ff"})
		}
	})
});