var cd={
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
	                    cons.hide();
	                    conCurrent[i] = this[num];
	                    $(this[num]).show();
	                });
	            }
	            else {
	                if (conCurrent) cons.hide();
	                conCurrent = cons[num];
	                $(cons[num]).show();
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
	    }
    }
$(function(){
		//初始化
		$(".c-m-r-part2").find("h2").each(function(){
			if(!$(this).next().hasClass("expansion")){
				$(this).find("em").addClass("c-m-r-part2-em-icon1");
				$(this).next().hide();
			}
			else{
				$(this).find("em").addClass("c-m-r-part2-em-icon2");
			}
			
		});
		//绑定事件
        $(".c-m-r-part2").find("h2").click(
            function(){
            	if($(this).next().hasClass("expansion")){
                	$(this).next().hide(200).removeClass("expansion");
                	$(this).find("em").addClass("c-m-r-part2-em-icon1").removeClass("c-m-r-part2-em-icon2");
               		// $(this).find("em").
            	}else{
            		$(this).next().show(200).addClass("expansion");
            		$(this).find("em").addClass("c-m-r-part2-em-icon2").removeClass("c-m-r-part2-em-icon1");
            	}

            });
        
    });