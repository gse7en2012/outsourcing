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
		$(".c-m-subject-others").slideToggle();
		return false;
	});

    $('.c-m-s-message .close').click(function(){
        $(this).parent().fadeOut();
    })

    $('.c-m-s-switch .list').click(function(){
        $('.c-m-s-switch .block').removeClass('cur');
        $('.c-m-s-switch .list').addClass('cur');
        $('.c-m-s-content').removeClass('c-m-s-block').addClass('c-m-s-list');
        $('.c-m-s-content .last').addClass('hide');
    })

    $('.c-m-s-switch .block').click(function(){
        $('.c-m-s-switch .list').removeClass('cur');
        $('.c-m-s-switch .block').addClass('cur');
        $('.c-m-s-content').removeClass('c-m-s-list').addClass('c-m-s-block');
        $('.c-m-s-content .last').removeClass('hide');
    })
});