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
	init:function(){
		this.signEdit();
	}
}
$(function(){
	com.init();
});