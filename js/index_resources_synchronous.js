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
			$(this).css({"background":"url(images/resources_rank/icon_h2_turn.jpg) 20px 5px no-repeat","background-color":"#d0f6ff"})
		}else{
			$(this).next().slideDown();
			$(this).css({"background":"url(images/resources_rank/icon_h2.jpg) 20px 5px no-repeat","background-color":"#d0f6ff"})
		}
	})



    $('.c-m-l-nav-link1').click(function () {
        $('.pop-bg').show();
        com.openD({
            id: '#pop2',//弹出的弹层id
            close: '.close'
        })
    });

    $('.c-m-l-nav-link2').click(function () {
        $('.pop-bg').show();
        com.openD({
            id: '#pop3',//弹出的弹层id
            close: '.close, .cancel'
        })
    });

    $('.c-m-l-nav-link3').click(function () {
        $('.pop-bg').show();
        com.openD({
            id: '#pop4',//弹出的弹层id
            close: '.close, .cancel'
        })
    });

    $('.send-btn-bot').click(function () {
        $('.pop-box').hide();
        com.openD({
            id: '#pop1',//弹出的弹层id
            close: '.close'
        })
    });


    $('#pop1 :radio').click(function () {
        $('.pop-table .selected').removeClass('selected');
        $(this).parent().parent().addClass('selected');
    });
    selectItemHelper();
    function selectItemHelper() {
        var leftBox = $('.select-left'),rightBox = $('.select-right'),leftBtn=$('.s-b-left'),rightBtn=$('.s-b-right');
        $(document).on('click','.select-left li',function(){
            $(this).parent().find('li').removeClass('sel');
            $(this).addClass('sel');
        });

        $(document).on('click','.select-right li',function(){
            $(this).parent().find('li').removeClass('sel');
            $(this).addClass('sel');
        });

        leftBtn.click(function(){
            var newDom=$('.select-left').find('.sel').eq(0).html();
            if(!newDom){
                return alert('请先选择！')
            }
            leftBox.find('.sel').detach();
            rightBox.prepend(['<li>',newDom,'</li>'].join(''));
        });
        rightBtn.click(function(){
            var newDom=$('.select-right').find('.sel').eq(0).html();
            if(!newDom){
                return alert('请先选择！')
            }
            rightBox.find('.sel').detach();
            leftBox.prepend(['<li>',newDom,'</li>'].join(''));
        });
    }

    // 收藏按钮弹层的输入框计数
    $("#pop3 textarea").keyup(function() {
        $("#pop3 b").html(50-$(this).val().length);
    });

    // 广播按钮弹层的输入框计数
    $("#pop4 textarea").keyup(function() {
        $("#pop4 b").html(50-($(this).val().length-87));
    });

});