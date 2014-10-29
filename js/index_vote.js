$(function() {
    // 投票-热门投票tab切换
    com.tab('.c-m-left-nav a', '.c-m-left-main');

    // 投票-热门投票内页tab切换
    com.tab('.labelList a', '.c-m-left-top-main-bottom-voteBoard-content');

    // 投票页面右侧公共部分宽度设置
    $('.c-m-r-par2-content-text').each(function(i) {
        $(this).find(".c-m-r-par2-content-text-voteTitle").css({width:$(this).width()-$(this).find(".c-m-r-par2-content-text-voteNumber").outerWidth(true)-5});
    });

    // 投票-热门投票内页的评论框计数
    $(".c-m-l-discuss textarea").keyup(function() {
        $(".c-m-l-discuss em").html(180-$(this).val().length);
    });

    // 显示/关闭toggle
    $('.toggle').click(function() {
        if(!$(this).hasClass('hide')) {
            $(this).next().stop().slideUp('fast');
            $(this).addClass('hide');
        } else {
            $(this).next().stop().css({'opacity':'1'}).slideDown('fast');
            $(this).removeClass('hide');
        }
    });
});