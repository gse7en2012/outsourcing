$(function(){
	var hd=$(".c-m-r-hd");
	hd.click(function(){
		var p=$(this).parent();
		if(p.hasClass("c-m-res-off")){
			$(this).find("strong").find("i").text("-");
			p.stop(false,true).animate({"height":253},function(){
				p.toggleClass("c-m-res-off");
			});
		}else{
			$(this).find("strong").find("i").text("+");
			p.stop(false,true).animate({"height":35},function(){
				p.toggleClass("c-m-res-off");
			});
		}
	});
});