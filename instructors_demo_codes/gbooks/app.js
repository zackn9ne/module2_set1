$(function (){

    var queryURL = "https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse";

	$.ajax({
		type: 'GET',
		url: queryURL,
		success: function(data){
			console.log(data); // success statement 1 everything is OK
		//	alert("API is UP safe to proceed");

			$.each(data, function(i, thing){ // success statement 2
				$thingsDiv.append('<li>' + thing.name + '</li>');
			});
		},
		error: function() {
			alert("API is down /shrugz");
		}
	});   // get request is done
});
