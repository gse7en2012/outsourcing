var com={
	signEdit:function(){
		$(".c-h-s-btn").click(function(){
			$(".c-h-s-btn,.c-h-s-text").hide();
			$(".c-h-sign-edit").show();
		});
		$(".c-h-sign-edit").find("a,button").click(function(){
			$(".c-h-s-btn,.c-h-s-text").show();
			$(".c-h-sign-edit").hide();
		});
	},
    tab:function(btnObj,conObj,params){
      /**可公用组件：tab切换
        * @constructor tab
        * @param {jquery Object||String} btnObj 按钮对象
        * @param {jquery Object||String||Array} conObj 内容对象,如多个可为Array（如：["#more li","#con li"]）
    **/
      function chk(val,defaultVal){
          return (typeof params!="undefined" &&typeof params[val]!="undefined")?params[val]:defaultVal;
      }
        function activeBtn(btnObj){
            $(btnCurrent).removeClass(activeClass);
            btnCurrent = btnObj;
            $(btnObj).addClass(activeClass);
        }
        function activeFun(num){
            if($.isFunction(fn)) fn(num);
        }
        function activeCons(num){
            if (typeof conObj != "string") {
                $.each(cons, function(i){
                    $(conCurrent[i]).removeClass(activeClass);
                    conCurrent[i] = this[num];
                    $(this[num]).addClass(activeClass);
                });
            }
            else {
                if(conCurrent) $(conCurrent).removeClass(activeClass);
                conCurrent = cons[num];
                $(cons[num]).addClass(activeClass);
            }
        }
        var btns = $(btnObj),
            btnCurrent,
            conCurrent,
            cons,
            fn = chk("fn",null),
            status,
            timer,
            time = chk("time","180"),
            index = chk("index",0),
            currentIndex,
            activeClass = chk("activeClass","current");
        if (typeof conObj != "string") {
            cons = [],conCurrent=[];
            $.each(conObj, function(){
                cons.push($(this.toString()));
                conCurrent.push({});
            });
            conCurrent = [];
        }
        else {
            cons = $(conObj);
            conCurrent={};
        }
        $.each(btns,function(i){
            $(this).bind("mouseenter",{"i":i,"o":btns[i]}, function(e){
                overStatus=true;
                (function(){
                    var btn = e.data.o,
                        index = e.data.i;
                    timer = setTimeout(function(o){
                        if (overStatus&&currentIndex!=index) {
                            currentIndex=index;
                            activeBtn(btn);
                            activeCons(index);
                            activeFun(index);
                        }}, time);
                })();
            }).bind("mouseleave",{"i":i},function(e){
                clearTimeout(timer);
                overStatus=false;
            });
        });
        activeBtn(btns[index]);
        activeCons(index);
        activeFun(index);
    },
	init:function(){
		this.signEdit();
	}
}
$(function(){
	com.init();
    //上网记录
    com.tab('.c-tab-btn li','.c-tab-cont');
});