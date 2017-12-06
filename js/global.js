// JavaScript Document 

$(document).ready(function() {
	
	var isTouch=false;
	
	// 搜索栏下拉
	$(".si_input").focus(function(){
		$(this).siblings(".search_xiala").slideDown("fast");
	}).blur(function(){
		window.setTimeout(function(){$("#head_box .top_line .search_form .search_xiala").slideUp("fast");},500);
	});
	
	// 手机搜索下拉
	$("#head_box .top_line .ip_search").bind("click touchend",function(){
		if(isTouch)
			return;
		if($("#head_box .empty_search").is(':hidden')){
			$("#head_box .empty_search").slideDown("fast");
		}else{
			$("#head_box .empty_search").slideUp("fast");
		}
		isTouch=true;
		window.setTimeout(function(){isTouch=false;},500);
	});
	
	
	// more
	$(".sd_icon").bind("click touchend",function(){
		if(isTouch)
			return;
		$(".short_description").hide();


		$(this).parent().next(".short_description_main").slideDown("fast");
		var couponids=$(this).attr("cid");
		var param="couponids="+couponids+"&action=getCouponDescription";
	    $.ajax({
	    	type: 'POST',

	        async:false,
	        data:param,
	        dataType: "text",
	        success: function(data){
	        	$("#short_description_main"+couponids).html(data+" <span class=\"sdm_icon\">Less</span>");
	        	$(".sdm_icon").bind("click touchend",function(){
	        		if(isTouch)
	        			return;
	        		
	        		$(".short_description_main").slideUp("fast");
					$(".short_description").slideToggle("slow");
	        		isTouch=true;
	        		window.setTimeout(function(){isTouch=false;},500);
	        	});
	        }
	    });
		
		isTouch=true;
		window.setTimeout(function(){isTouch=false;},500);
	});
	// 去到顶部
	$("#footer .follow").click(function(){
		ScrollTop();
	});
	$(window).scroll(function(){
		if($(this).scrollTop()>300){
			$("#footer .follow").show();
		}else{
			$("#footer .follow").hide();
		}
	});	
	
	
	
	
	
	
	
	
});