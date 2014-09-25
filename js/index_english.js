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
    $(".c-m-l-b-b-bookWrap").each(function(i) {
        $(this).hover(function() {
            $(this).find("p").css({"text-decoration":"underline"});
        }, function() {
            $(this).find("p").css({"text-decoration":"none"});
        });
    });
});