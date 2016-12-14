$(function() {
    console.log("ready"); 
/* in case you want to disable button state
	$( "input" ).attr('disabled',true);
*/
    
    var theFormDiv = $( "input" );

//* on clicks
    $( "button" ).on( "click", displayMessage )
    $( "button" ).on( "click", cleanUp )
//* on clicks

    function cleanUp(){
	$( "input" ).val('');
    }

    function displayMessage(){
	
	var thing = $( "input" ).val();

	console.log(thing);

	if (isNaN(thing)) {
	    $( "div" ).html("<p>chea error nice try</p>");

	}  else {
	    console.log("valid"); 
	    $( "div" ).html("<p>nice job you chose " + thing + "</p>");
	    
	}
    }
});
