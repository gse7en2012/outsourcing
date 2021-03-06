$(function(){
    // 加入生词本按钮设置
    $(".addNotebook").click(function() {
        com.openD({id:".pop",close:".popClose"});
    });

    // 对话按钮设置
    $(".c-m-l-b-box").each(function(i) {
        $coversation = $(".c-m-l-b-b-conversation");
        // 只显示英文
        $(".c-m-l-b-b-g-o-english").eq(i).click(function() {
            $coversation.eq(i).find(".c-m-l-b-b-c-b-c-m-chinese").stop().animate({opacity:0});
            $coversation.eq(i).find(".c-m-l-b-b-c-b-c-m-english").stop().animate({opacity:1});
            $coversation.eq(i).find(".c-m-l-b-b-c-b-cs-m-english").stop().animate({opacity:1});
        });
        // 只显示中文
        $(".c-m-l-b-b-g-o-chinese").eq(i).click(function() {
            $coversation.eq(i).find(".c-m-l-b-b-c-b-c-m-english").stop().animate({opacity:0});
            $coversation.eq(i).find(".c-m-l-b-b-c-b-cs-m-english").stop().animate({opacity:0});
            $coversation.eq(i).find(".c-m-l-b-b-c-b-c-m-chinese").stop().animate({opacity:1});
        });
        // 隐藏原文
        $(".c-m-l-b-b-g-o-hide").eq(i).click(function() {
            $coversation.eq(i).find(".c-m-l-b-b-c-b-c-m-chinese").stop().animate({opacity:0});
            $coversation.eq(i).find(".c-m-l-b-b-c-b-c-m-english").stop().animate({opacity:0});
            $coversation.eq(i).find(".c-m-l-b-b-c-b-cs-m-english").stop().animate({opacity:0});
        });
        // 显示原文
        $(".c-m-l-b-b-g-o-show").eq(i).click(function() {
            $coversation.eq(i).find(".c-m-l-b-b-c-b-c-m-chinese").stop().animate({opacity:1});
            $coversation.eq(i).find(".c-m-l-b-b-c-b-c-m-english").stop().animate({opacity:1});
            $coversation.eq(i).find(".c-m-l-b-b-c-b-cs-m-english").stop().animate({opacity:1});
        });
    });

    // 课外读物、语音、歌曲、游戏栏目的图片hover
    $(".c-m-l-b-b-bookWrap").each(function() {
        $(this).hover(function() {
            $(this).find("p").css({"text-decoration":"underline"});
        }, function() {
            $(this).find("p").css({"text-decoration":"none"});
        });
    });

//    // 右侧功公共部分标题点击开关
//    $('.c-m-r-part-toggle .block').toggle(function(){
//        $(this).next().stop().slideUp();
//        $(this).find('em').removeClass('c-m-r-p-icon-minus').addClass('c-m-r-p-icon-plus');
//    },function(){
//        $(this).next().stop().slideDown();
//        $(this).find('em').removeClass('c-m-r-p-icon-plus').addClass('c-m-r-p-icon-minus')
//    });
//
//    /*
//    $('.toggle').toggle(function(){
//        $(this).next().stop().slideUp();
//        $(this).find('em').removeClass('c-m-r-p-icon-minus').addClass('c-m-r-p-icon-plus');
//    },function(){
//        $(this).next().stop().slideDown();
//        $(this).find('em').removeClass('c-m-r-p-icon-plus').addClass('c-m-r-p-icon-minus')
//    });
//    */

    // 公共右侧附加短语中文宽度设置
    $('.c-m-r2-part3-appendList li').each(function(i) {
        $(this).find(".c-m-r2-part3-appendList-chinese").css({width:$(this).width()-$(this).find(".c-m-r2-part3-appendList-english").outerWidth(true)-5});
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