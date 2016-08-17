// functions area
function say(input){
	console.log(input);
}
say("app.js was just hit");





window.onload = function() {  //wait to DOM is ready document ready in JQ

// var firstltem=document.getElementById('someclass'); //II Get the first item
// firstltem.className = 'complete '; //II Change its class attribute


function durr(){
	console.log("im so easy cuz there are nothing in the parens")
}



function itemOnSale( id, newvalue ){
	var selctedProduct = document.getElementById(id);
	selctedProduct.innerHTML = newvalue;
	console.log("greetz function ran");
}
itemOnSale("iphone6","items are on sale now 50% off");







// a little referesh course on Arrays and their BFF's loops
/////////     0        1       2        3        4


var cars = ["Saab", "Volvo", "BMW", "Bentley", "Lexus"];

// second part aka looping an array

//in english prounounce as "for ( before; during(condition bool); after)"
for (i = 0; i < cars.length; i++) { 

    console.log (cars[i]);

}

} //end js on load








$(function() { //drf

	var lolz = $('#lolz');
	var kk = $('#kk');

	kk.click(function() {
	  	// alert(lolz.val());
		var lolzval = lolz.val() // must be in func
		console.log("this getting in dom:" + lolzval);
		
		$( ".userinput" ).html( lolzval );
		// $( ".userinput" ).html( lolzval );
	})

	            
    
    window.say_what = function () { 
            console.log("say what");
    }















    var whoAreYou = 'Stephanie';
    var greetTues = 'Hello \';lsdiflkjdits\' Tuesday and you are: ' + 'Ms. ' + 'whoAreYou'

        // document.write(greetTues);
    var favourite = " favourite number is: "; 
    var calculateIt = 3+5;

    // trying ++
    plain = 10;
    plain++;
    // var more = plain++;

    // document.write(" We are incrementing " + " NOW, we are putting a ++ to make it: " + plain );













// anonymous function
    var a = (function(){
    	var width = 3
    	var height = 2
    	return width * height + greetTues;

    }());
    console.log(a);











// complex functions pg 95
function size(w, h, d) {
  var sqf = w * h;
  var vol = w * h * d;
  var chooseYourAdventure = [sqf, vol]
  return chooseYourAdventure;
}

var sixFloorSqf = size(3,3)[0]  //[0]to get sqf 6f
var sixFloorVol = size(3,3,553)[1]  //[1]to get vol 6f










//getter and setter textContent
var text = document.getElementsByClassName("accept")[0].textContent = "This is some text";















// var name = 'Molly';
name = 'Molly';


function greetUser() {
    return 'Hello ' + getName();
}

function getName() {
    // var name = 'Molly';

    // name = 'Molly';
    return name;
}


var greeting = greetUser();
// document.write(greeting);
document.write(name);










}); //drf




