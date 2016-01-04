  $(document).ready(function() {


  	$("#the-button").on('click', function(){
  		if($(this).html() === "Start"){
  			var count = $("#time-remaining").html()
	    	var timer = setInterval(function() {
		    $("#time-remaining").html(count--);

		    if(count == -1){
		    	clearInterval(timer);
		    	alert("TIMES UP!")
		    }

		}, 1000);

  		}

  		$(this).html("Click!");

  		var num = parseInt($.trim($("#click-number").html()));
  		$("#click-number").html(++num)


	  	var h = $(window).height() - 50;
	    var w = $(window).width() - 50;
	    
	    var nh = Math.floor(Math.random() * h);
	    var nw = Math.floor(Math.random() * w);

	    $("#the-button").animate({"top": nh, "left": nw });

	    
  
  	})



});
//When the page loads, the button starts off as "start"
//When "start" is clicked, it becomes "Click!"
//Now the button will move around the screen. But everytime the user "clicks" the timmer resets to 60
