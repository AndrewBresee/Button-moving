  $(document).ready(function() {


  	$("#the-button").on('click', function(){

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
