$(function() {
    // 广播广场-大家在说、同城广播、热门转播tab切换
    com.tab('.c-m-left-nav a', '.c-m-left-main');

    // 广播广场-排行榜页面tab切换
    $('.c-m-content-box-content-box').each(function(i) {
        $(this).addClass('tabClass'+i);
        com.tab('.tabClass' + i + ' .c-m-content-box-content-box-title-navList-a', '.tabClass' + i + ' .c-m-content-box-content-box-title-rankList');
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