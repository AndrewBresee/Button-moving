  $(document).ready(function() {


  	$("#the-button").on('click', function(){
  		var num = parseInt($.trim($("#click-number").html()));
  		$("#click-number").html(++num)
  	})



});
 