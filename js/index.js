


$(document).ready(function(){
	
    $("#aboutCard").on('click', function(event) {
    	//$('#deck').toggle("slide", 1000);
    	$('#deck').fadeOut(300, function(){
    		$( "#about" ).show( "slide", { direction: "right" }, 800, function(){$('.return').show();} );
    	});
    });


    $('.return').on('click', function(event) {
    	$('.return').hide();
    	$(this).parent().hide("slide", {direction:'right'}, 800, function(){
    		$('#deck').fadeIn(300);
    	});
    });
});