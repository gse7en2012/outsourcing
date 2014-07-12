$(function(){
	/*right bottom banner*/
	com.tab(".c-m-banner-btns span",".c-m-banner-pic a");
	/*record tab*/
	$(".c-m-record-left").click(function(){
		if($(".c-m-record-bd .current").index()==0){
			$(".c-m-record-bd ul").last().addClass("current").siblings().removeClass("current");
			$(".c-m-record-title span").last().addClass("current").siblings().removeClass("current");
		}else{
			$(".c-m-record-bd .current").prev().addClass("current").siblings().removeClass("current");
			$(".c-m-record-title .current").prev().addClass("current").siblings().removeClass("current");
		}
	});
	$(".c-m-record-right").click(function(){
		if($(".c-m-record-bd .current").index()==($(".c-m-record-bd ul").length-1)){
			$(".c-m-record-bd ul").first().addClass("current").siblings().removeClass("current");
			$(".c-m-record-title span").first().addClass("current").siblings().removeClass("current");
		}else{
			$(".c-m-record-bd .current").next().addClass("current").siblings().removeClass("current");
			$(".c-m-record-title .current").next().addClass("current").siblings().removeClass("current");
		}
	});
	/*subjects*/
	$(".c-m-s-more").click(function(){
		$(this).toggleClass("c-m-s-more-on");
		$(".c-m-subject-others").toggleClass("c-m-subject-others-on");
		return false;
	});
});