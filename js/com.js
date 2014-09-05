var com = {
    signEdit: function () {
        $(".c-h-s-btn").click(function () {
            $(".c-h-s-btn,.c-h-s-text").hide();
            $(".c-h-sign-edit").show();
        });
        $(".c-h-sign-edit").find("a,button").click(function () {
            $(".c-h-s-btn,.c-h-s-text").show();
            $(".c-h-sign-edit").hide();
        });
    },
    tab: function (btnObj, conObj, params) {
        /**可公用组件：tab切换
         * @constructor tab
         * @param {jquery Object||String} btnObj 按钮对象
         * @param {jquery Object||String||Array} conObj 内容对象,如多个可为Array（如：["#more li","#con li"]）
         **/
        function chk(val, defaultVal) {
            return (typeof params != "undefined" && typeof params[val] != "undefined") ? params[val] : defaultVal;
        }

        function activeBtn(btnObj) {
            $(btnCurrent).removeClass(activeClass);
            btnCurrent = btnObj;
            $(btnObj).addClass(activeClass);
        }

        function activeFun(num) {
            if ($.isFunction(fn)) fn(num);
        }

        function activeCons(num) {
            if (typeof conObj != "string") {
                $.each(cons, function (i) {
                    $(conCurrent[i]).removeClass(activeClass);
                    conCurrent[i] = this[num];
                    $(this[num]).addClass(activeClass);
                });
            }
            else {
                if (conCurrent) $(conCurrent).removeClass(activeClass);
                conCurrent = cons[num];
                $(cons[num]).addClass(activeClass);
            }
        }

        var btns = $(btnObj),
            btnCurrent,
            conCurrent,
            cons,
            fn = chk("fn", null),
            overStatus,
            timer,
            time = chk("time", "100"),
            index = chk("index", 0),
            currentIndex,
            event = chk("event","hover"),//增加选择类型
            activeClass = chk("activeClass", "current");
        if (typeof conObj != "string") {
            cons = [], conCurrent = [];
            $.each(conObj, function () {
                cons.push($(this.toString()));
                conCurrent.push({});
            });
            conCurrent = [];
        }
        else {
            cons = $(conObj);
            conCurrent = {};
        }
        $.each(btns, function (i) {
            if(event == 'hover'){
                $(this).bind("mouseenter", {"i": i, "o": btns[i]},function (e) {
                    overStatus = true;
                    (function () {
                        var btn = e.data.o,
                            index = e.data.i;
                        timer = setTimeout(function (o) {
                            if (overStatus && currentIndex != index) {
                                currentIndex = index;
                                activeBtn(btn);
                                activeCons(index);
                                activeFun(index);
                            }
                        }, time);
                    })();
                }).bind("mouseleave", {"i": i}, function (e) {
                    clearTimeout(timer);
                    overStatus = false;
                });
            }else if(event = "click"){
                $(this).bind("click", {"i": i, "o": btns[i]},function (e) {
                    overStatus = true;
                    (function () {
                        var btn = e.data.o,
                            index = e.data.i;
                        timer = setTimeout(function (o) {
                            if (overStatus && currentIndex != index) {
                                currentIndex = index;
                                activeBtn(btn);
                                activeCons(index);
                                activeFun(index);
                            }
                        }, time);
                    })();
                }).bind("mouseleave", {"i": i}, function (e) {
                    clearTimeout(timer);
                    overStatus = false;
                });
            }

        });
        activeBtn(btns[index]);
        activeCons(index);
        activeFun(index);
    },
    scrolltab:function(opt){
        /**可公用组件：图片切换
         * @constructor scrolltab
         *
         * @param {jquery Object} wrap 切换的外包裹
         * @param {jquery Object} prebtn 上一条
         * @param {jquery Object} nextbtn 下一条
         * @param {jquery Object} tab 切换的当前项
         * @param {boolean} autoplay 是否自动切换
         * @param {int} time 自动切换时间
         * @param {int} speed 切换速度
         * @param {int} minNum 切换个数
         **/
    var settings = {
            wrap:'',
            prebtn:'',
            nextbtn:'',
            autoplay : true,
            minNum: 1,
            time: 5000,
            tab: '',
            speed:400
        },
        opt = opt || {};
    settings = $.extend(settings, opt);

    var $wrap = $(settings.wrap),
        ul = $wrap.find("ul"),
        li_len = ul.find("li").length,
        li_w = ul.find("li").width(),
        left = $(settings.prebtn),
        right = $(settings.nextbtn),
        tab = $(settings.tab),
        timer = null,
        currentIndex = 0;
    tab.eq(currentIndex).addClass('current');
        ul.css('width',li_len*li_w+'px');

    if(li_len > settings.minNum){
        right.click(function() {
            currentIndex++;
            if(currentIndex == li_len){
                currentIndex = 0;
            }
            tab.removeClass('current').eq(currentIndex).addClass('current');
            ul.stop().animate({
                "left": -(li_w*currentIndex)
            }, settings.speed)
        });
        left.click(function() {
            currentIndex--;
            if(currentIndex < 0){
                currentIndex = li_len - 1;
            }
            tab.removeClass('current').eq(currentIndex).addClass('current');

            ul.stop().animate({
                "left": -(li_w*currentIndex)
            }, settings.speed)
        });
        tab.click(function(){
            currentIndex = $(this).index(settings.tab);
            tab.removeClass('current').eq(currentIndex).addClass('current');
            ul.stop().animate({
                "left": -(li_w*currentIndex)
            }, settings.speed)
        });
        if (settings.autoplay) {
            timer = setInterval(function() {
                right.trigger("click");
            }, settings.time);
            $wrap.mouseenter(function() {
                clearInterval(timer);
            })
            $wrap.mouseleave(function() {
                clearInterval(timer);
                timer = setInterval(function() {
                    right.trigger("click");
                }, settings.time);
            })
        };
    }
    },
    openD:function(opt){
    var settings = {
            id: '',
            close:'.close'
        },
        opt = opt || {};
    settings = $.extend(settings, opt);

    var popid = $(settings.id),
        dh = $(document).height(),
        wh = $(window).height(),
        ww = $(window).width(),
        st = $(window).scrollTop(),
        sl = $(window).scrollLeft();
// 弹层弹出
    function posPop(idname){
        idname.height()>wh?idname.fadeIn().css({'top':st,'left':(ww-idname.width())/2+sl}):idname.fadeIn().css({'top':(wh-idname.outerHeight())/2+st,'left':(ww-idname.outerWidth())/2+sl});
    }
//  弹层关闭
        $(settings.close).click(function(){
        $(this).closest('.pop-box').fadeOut();
    });
        posPop(popid);

},
    init: function () {
        this.signEdit();
    }
}
$(function () {
    com.init();
});