# Module 2 ReadMe File
1. Do you need info on a particular class? Search for "day x" with the `ctrl` + `f` key where `x` is the `class number`
3. Do you need info on a particular lab? Search for "lab x" with the `ctrl` + `f` key where `x` is the `lab number`
4. turn in your labs by adding them to your `module2` repo in `sub-folders` called `module2/lab1`, `module2/lab2`, etc and push your repo
5. profit


# day 1
Module 2 MacBook Setup

1. [brew homepage](http://brew.sh/)
2. 
 [setup brew](https://coolestguidesontheplanet.com/installing-homebrew-on-os-x-el-capitan-10-11-package-manager-for-unix-apps/) 

 * `xcode-select --install`

 * `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

 * `brew doctor`

 * `brew list`

2. [cask homepage](https://caskroom.github.io) _or ez way copy  
 * paste in Terminal: `brew tap caskroom/cask`

3. Install Sublime

 * `brew cask install sublime-text`

4. Install Node

 * `brew install node`
 * `node -v`

5. Install NPM

 * `sudo npm install npm -g`
 * `npm -v`
 
6. Install Bower bower homepage [click to read about](https://bower.io/)

 * `npm install -g bower`

7. create a `HTML` page

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>title</title>
  </head>
  <body>
  
  </body>
</html>
```

# How to Wire Up A Basic Web App

```
.
├── css
│   └── style.css
├── index.html
└── js
    └── app.js
```

# day 2
- very basic HTML CSS review


# day 3
- final review


- Color names
- Color Values
- Color Shades


# CSS Color Names
- 147 Colors Website `http://www.colors.commutercreative.com/` you _may_ want to bookmark this 
- page 250 in book
- `pixlr.com`
- <kbd>⌘</kbd>+<kbd>space</kbd>+<kbd>Digital Color Meter</kbd> Digital Color Meter **OSX ONLY**
- CSS Galleries for _inspiration_ `http://www.cssmania.com/`
- Adobe Kuler for color themes `http://www.cssmania.com/`

# HTML Layout Refresher
- <kbd>⌘</kbd>+<kbd>shift</kbd>+<kbd>H</kbd> Go To Home
- `http://stackoverflow.com/questions/134727/whats-the-key-difference-between-html-4-and-html-5`
- Chapter 13 Box Model
- Block Elements versus Inline Elements `https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements`

# API Review
- http://rest.learncode.academy/api/johnbob/friends



# day 4

#video html5

- https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats

- sample code from: http://thenewcode.com/777/Create-Fullscreen-HTML5-Page-Background-Video: 


```
<video playsinline autoplay muted loop poster="polina.jpg" id="bgvid">
    <source src="http://thenewcode.com/assets/videos/polina.webm" type="video/webm">
    <source src="http://thenewcode.com/assets/videos/polina.mp4" type="video/mp4">
</video>

```


# day 5


Motion

- 2D and 3D transforms: Think Pixar

```
CSS transforms: Changes an element in one or more ways including scaling, rotating, skewing, or moving the element. Requires vendor prefixes and doesn’t work in IE 8 or earlier.
```

- Transitions: Think in real life sublte div changes

- Transitions are actually used IRL: http://www.webdesignerdepot.com/2014/05/8-simple-css3-transitions-that-will-wow-your-users/

- Take away:

Remember transition is more about the way the element looks as it is changing, transform is very much changing that element's `scaling`, `rotating`, etc. See this link. https://robots.thoughtbot.com/transitions-and-transforms


Back to Basics

- Texts, Shadows, Gradient, Colors, Fonts
https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow
https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow

- Try some of these in class assignment:
https://designshack.net/articles/css/12-fun-css-text-shadows-you-can-copy-and-paste/

- CSS Extreeme FX

https://uk.protectyourbubble.com/iphone-timeline/


# day 6

- JavaScript refresher
- Comments, Variables, Operators
re: LAB 5: Intermediate JavaScript assignment – using comments

# day 7

- making a form and validating with function

# day 8 

- form input and validation for prime/natural/etc/Nan
- migrate the code out of codepen
- get browsersync running: `browser-sync start --server --directory --files "*"`

# day 9

- date methods
- objects review

# day 10

- Chapter 4, Duckett Book
- Decisions & Loops (and case statements)
- Comparison Operators
- Logical && and Logical Not and Logical Or
- If
- Else if
- Case/Switch statements
- For Loop
- While Loop
- For While Loop
- Some form validation
- Code dump from this day, you can figure the `HTML` out yourself:

```
//apply css via JS
var rc = document.getElementById("resultcontainer");
function colorize(){
  rc.style.background="lightblue";
}

// object overview basic
var bmw = {
  maker     : 'Bwm',
  built     : 'Germany',
  year      : 1998,
  engineCyl : 6
}

console.log(bmw.built);






// constructor notation pg 106
var auto = new Object();

auto.name = 'Fiat';
auto.built = 'Italia';
auto.year = 2008;
auto.engineCyl = 4;
auto.sunroof = false;
delete auto.sunroof;

console.log(auto.sunroof);










//setup the (object) constructor function
function CarMaker(name, built, color) {
  this.name = name;
  this.built = built;
  this.color = color;
}









//function which makes a new object
var blueBenz = new CarMaker("benz", 2004, "blue");
var redCamaro = new CarMaker("camaro", 2009, "red");

console.log(blueBenz.color);
console.log(redCamaro.color);



















// page 46
var b = document.getElementById("click");
b.addEventListener("click", getTimeFromNet);
function getTimeFromNet (){
  var d = new Date(); 
  console.log(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
}








// maths from eloquent
console.log(typeof true);
console.log(typeof 0);
console.log(typeof Infinity);
console.log(typeof NaN);
console.log(typeof "asdf");
console.log(typeof -340349.3);







// bools
console.log( 100 <= 100 );
console.log( "alphabet" > "google" );


console.log( false && false );
console.log( "alphabet" && "axlphabet" );

// terniary op TMFR
console . log ( true ? "radical" : 2) ;
console . log ( false ? "radical" : 2) ;



// PLAY BUTTON |>
var queryButton = document.getElementById("querybutton");

queryButton.addEventListener("click", function(){
  computeAndReturn();
  colorize();
  
}
                            );


// COMPUTER PROGRAM
function computeAndReturn() {
  var query = document.getElementById("query");
  if(query.value.length > 0 && !isNaN(query.value) && query.value <= 17 ){ //if its truly a number
  document.getElementById("result").innerHTML=query.value + "is too young";
} else if(query.value.length > 0 && !isNaN(query.value) && query.value >= 17 ){ //if its truly a number
  document.getElementById("result").innerHTML=query.value + "is ok";

}
  
  else if (query.value.length > 0 && isNaN(query.value)) { //if its NaN though..
  document.getElementById("result").innerHTML="numbers only are allowed";  
}
}













//switch statements page165
level = 4

switch(level) {
  case 1:
    msg = "jump onna di bricks";
    break;
    
  case 2:
    msg = "fish";
    break;
    
  case 3:
    msg = "laktu";
    break;
    
  case 4:
    msg = "bowser";
    break;
    
  default:
    msg = "welcome to zackn9ne"
        break;

}

console.log(msg);

















// do while loop 
var i = 10;
var msg = "searching..."

do {
  console.log(msg + "hacking wifi passwords: "+i);
  i++;
} while (i <= 100);
```

```
$( "button" ).on( "click", validate );

function validate(){
  
  var thing = $( "input" ).val();

    console.log(thing);

    if (isNaN(thing)) {
      $( "div" ).append("chea error nice try");
      $( "body" ).prepend("stop");
    }  else {
      console.log("valid"); 
      $( "div" ).append("nice job you chose " + thing);

      
    }
}
```




# lab 1
- Lab Info Coming Soon, will be posted before your lab session *dont panic*

- draw a physical object using only html and css


# lab 2
- use what you learned from class 4 to embed a video on the Web page you made in lab 1. You can just embed the video below it. Use fallbacks.

# lab 3
- use `addEventListener` and `document.getEelementById` in a basic Web page and `js` to have it `console.log log something when you click on a div with an id of `trigger`

# lab 4
- use a `css 2d transform on an element` 
- use a `css drop shadowon some BIG text
- use a `css transition` on an element

# lab 5

Intermediate JavaScript assignment – using comments 
// write some javascript and include a comment somewhere in that code, can literally be anything that works without an error. wire it up to some HTML code if you like. include a `input` tag and a `button` if you like.

# lab 6

Intermediate JavaScript assignment – event and numbers 
// write a function where you can put in a number and find out if it is even or odd, if you have spare time write this so it is wired up to a HTML `input` tag, but all I'm looking for is something you can copy paste in `chrome console` and play around with the value of x










<!--- wedge



_day seven_

# Setup Sublime Some More
1. `npm install -g jshint`
2. JSHint `https://packagecontrol.io/packages/JSHint`
3. Package control `https://packagecontrol.io/installation#ST3`

# JS Checking Principles
- `console.log()`
- `document.write()`
- `alert()`

# Do Some JS, Operators
- `%` Modulous Operator
- `===` vs `==`
- Isralei video life michael `https://www.youtube.com/watch?v=n1-MCFsIwXQ`

# Do Some Arrays
- `https://www.youtube.com/watch?v=lP1uBtfssC0`

# JS getElementBy _and crew_
- `http://www.w3schools.com/jsref/prop_node_textcontent.asp`

# Complex Arrays
```
// complex functions pg 95
function size(w, h, d) {
  var sqf = w * h;
  var vol = w * h * d;
  var chooseYourAdventure = [sqf, vol]
  return chooseYourAdventure;
}

var sixFloorSqf = size(3,3)[0]  //[0]to get sqf 6f
var sixFloorVol = size(3,3,553)[1]  //[1]to get vol 6f
```
# Anonymous function video
- https://www.youtube.com/watch?v=LI-0ilvrvYk _(Indian)_

# Homework
- page 83 in the `JS Book`, do the `index.html` and the `app.js`
- use `.length`
- use an `anonymous function` as well for something I don't care what.
- put a `JS Comment` somewhere in the `code`, use both the `//` style and the `block comment` called `/* comment this */` so that you can prove you know the ways

---

_day eight_

# Variable Scope
- http://stackoverflow.com/questions/1470488/what-is-the-purpose-of-the-var-keyword-and-when-to-use-it-or-omit-it

```
var foo = 1;
bar = 2;

var passwordHolder = function()
{
    var foo = "password123"; // Local
    bar = "coco";     // Global

    // Execute an anonymous function
    (function()
    {
        var wibble = 1; // Local
        var foo = 266; // Inherits from scope above (creating a closure)
        moo = 300; // Global
    }())
}
passwordHolder();
alert(foo);
alert(bar);
```

# Awesome Closures Video
- https://www.youtube.com/watch?v=yiEeiMN2Khs

# HW
- String Methods
    - http://www.w3schools.com/js/js_string_methods.asp
    - aka pg. 135

- Write your *own* version of a **Event Listener** pg. 263, try to do 
    - (1) without with `The Event Object` and 
    - (2) one dealing with `The Event Object`, _hint_ think `variable e`

- Number Methods
    - aka pg. 132
    - http://www.w3schools.com/js/js_number_methods.asp

---
_day nine_

# Bubbling v Capturing
- Whats this `.addEventListener(type handler phase)` what does the `false` mean (in phase)?
- `http://www.w3schools.com/js/js_htmldom_eventlistener.asp`
- Default is Bubbling, it bubbles up from Child to Parent
- Default is false
- Swap it to `true` to use `Capturing` aka `useCapture` aka `true` to switch to `Capturing Mode`, meaning the `parent elemet` will harness the activity first

- How to stop: event.stopPropagation() [MDN Link](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)

# Hoisting
- Awesome hoisting video: `https://m.youtube.com/watch?v=WqXeFiii9k0`
- Function Expressions vs Functions
    - `var myFunc = function() { /*do stuff...` vs `function myFunc() { /*do stuff...`
    - the latter gets `hoisted` and will run fine, the former will return `not a func` most likely if called before it is used

# HW Review of `addEventListener` _basic_
- go here to study `http://www.w3schools.com/jsref/met_element_addeventlistener.asp`
- click on `Try it yourself >>`
- be comfortable changing things in there remember its `vanilla JS`

```
<!DOCTYPE html>
<html>
<body>

<p>This example uses the addEventListener() method to attach a click event to a button.</p>

<button id="myBtn">Try it</button>

<p><strong>Note:</strong> The addEventListener() method is not supported in Internet Explorer 8 and earlier versions.</p>

<p id="demo"></p>

<script>
var doStuff = function(){
    document.getElementById("demo").innerHTML = "Hello World";
}
document.getElementById("myBtn").addEventListener("click", doStuff, false );
</script>

</body>
</html>

```
# HW Reveiw of `addEventListener` _advanced_
```
<!DOCTYPE html>
<html>
<body>

<p id="foo">This example uses the addEventListener() method to attach a click event to a button.</p>

<button id="myBtn">Try it</button>

<script>
var bt = document.getElementById("myBtn");
var foo = document.getElementById("foo");

function checkWhatClicked(e) {
  var target = e.target; //get target of event
//  foo.innerHTML = "eee";
  foo.innerHTML = target;
}

function helloWorld(){
    foo.innerHTML ="Hello World!";
}

bt.addEventListener("click", checkWhatClicked, false);
</script>

</body>
</html>
```

# HW Assignment
- `139` in the `JS Book`
- What you're going to do is make a function that caluclates your current age in years.
- If this was _super_ easy for you go ahead and do some differnt **variations** of it to show your `age` in `hours` or `seconds`
- You may have to `Google` for these formulas
- Remember how we talked about phrasing questions to google in the `correct context`

---
_day ten_
- Array Methods _tons of 'em_ `http://www.w3schools.com/jsref/jsref_obj_array.asp`
- [sort filter video](https://egghead.io/lessons/javascript-javascript-array-methods-in-depth-filter)

# overview
- `objects`, `JSON API` Example `http://anilist-api.readthedocs.io/en/latest/anime.html#basic`
- `JS forEach(); Method` Spec'ed from: `http://www.w3schools.com/jsref/jsref_forEach.asp`
```
var gangsterRap = [ "ice cube", "easy e", "dr. dre", "vanilla ice", "ice tea", "ice lattee" ]

gangsterRap.forEach(function(singleRapper) {
    document.write("<li>" + singleRapper + " is rad as hell a juicy *#$&#! from the middle of a cell</li>");
});
```
- JS `filter();` Method, `bottom of page 537`

- Recognize _all_ the `Array Methods` available to study `http://www.w3schools.com/jsref/jsref_obj_array.asp`
- **pro tip** `JS Reserved Words` `http://www.w3schools.com/js/js_reserved.asp`, don't name your `variables` these or you will be confused

# Homework
- use JS `filter() method`
- use `page 537` at the bottom
- use the `.length` in order to set your filters just like _they_ did on `page 537` at the bottom
    - they used `conditionals` here FYI such as `>=` and `<=` we _breezed_ over these in class but go ahead and study them if you don't get what is going on
- learn as much as you can about the JS `filter() method`
- put **your own** spin on this, I want to see interesting variables and not just junk copied from the book

-->
