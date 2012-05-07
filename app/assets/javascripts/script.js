$(document).ready(function(){
	
	
	
	/* Countdown Script */
	var launch = new Date(2012, 8, 2);
	$("#countdown .count .numbers").countdown({until: launch});
	
	/* Featured Sandwich */
	$(".featured #"+(Math.ceil(Math.random()*3))).slideDown();
	
	$(".featured > div").click(function(){
		$(this).slideUp('fast', function() {
			var num = parseInt($(this).attr("id"));
			
			if (num == 3) {
				num = 1;
			} else {
				num++;
			}
			
	 		$(".featured #"+num).slideDown();
 		});
	});
	
	/* Drag and Click Countdown */
	
	var expanded = false;
	var drug = false;
	var countdown_div = $("#countdown");
	var div_height = 325;
	
	$('.countdown').bind('dragstart', function(event) {
		
		drug = true;
		
		$(this).addClass("selected");
	
	}).bind('drag',function(event){
		var y = (event.clientY - 20)
		var num = -div_height + (event.clientY - 20);
		
		if (y > div_height) {
			num = 0;
		} else if (y < 0) {
			num = -div_height;
		}
		
		$(countdown_div).css({marginTop: num+"px"});
		
    }).bind('dragend', function(event) {
    	
		if (event.clientY > (div_height / 10)) {
			$(countdown_div).animate({marginTop: "0px"}, function(){ drug = false; });
			expanded = true;
		} else {
			$(countdown_div).animate({marginTop: -div_height+"px"}, function(){ drug = false; });
			expanded = false;
		}
		
    	$(this).removeClass("selected");
    }).click(function(event) {
    	if (!drug) {
    		$(countdown_div).animate({marginTop : (expanded ? -320 : 0) + "px"});
    		expanded = !expanded;
    	
	    	$(this).removeClass("selected");
    	}
    });

});