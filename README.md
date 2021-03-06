- Take me to [end](#pookie)

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



# lab 7

Intermediate JavaScript assignment – dates and date methods 
// write a javascript function that spits out the date to the HTML page, either invoke that function with a button or just have it invoke automatically with page load



# lab 8

Intermediate JavaScript assignment – comparisons and conditions 
// write a javascript conditional that prints out "old enough" if the age entered is over or equal to 18, and prints out "not old enough" if the age is less. if you have extra time on your hands put in error checking to not allow strings of text or numbers that are obviously not real like 0 and or -333.



# lab 9 

Loop For, Loop While

LAB 9: Intermediate JavaScript assignment - looping

Do this: 

1. Write an array of types of cars  and loop through it. 
2. Render it to a HTML list.


# lab 10
Get your labs straight. 

Get your lab repos straight are you kidding me?

Put them in the right folders in your module 2 repo...

aka

```
../lab1
../lab2
../lab3
```

I dont care if labs arent complete or done yet, set up your folder structure and push what you have.


# lab 11
- Setup Ruby and Rails Locally: http://karloespiritu.com/replacing-rvm-with-rbenv-in-os-x/
- Setup a http://c9.io account for coding ruby rails in the cloud



# lab  11
- read this book: https://www.railstutorial.org/book/beginning up to chapter 1.3 for this particular `lab 11` where it says about doing the command `rails new hello_app`
- either use rails locally or
- go to c9.io
- sign up with your github
- create a rails workspace
- press `ruby -v` in the terminal panel
- press `rails -v` in the terminal panel
- run the command `rails new hello_app`
- this will do for now

# lab 12
- take a look at your `hello_app/Gemfile`
- proceed reeding from 1.3 onto 1.5
- Once you’ve placed the contents of Listing 1.5 into the application’s Gemfile, install the gems using `bundle install`
- this may fail, if you read properly the error message you should `bundle update` first
- do this:

```
$ cd ~/workspace/hello_app/
$ rails server -b $IP -p $PORT
```

- your site will be now running on port `:8080`
- go to the `cloud9` `preview` menu and go down to `preview running application` it will reveal your rails site
- thats it

# day 11
Intermediate JavaScript - Switch - Loop For, Loop While 

A little random number randomness:

```
var clicker = document.getElementById('clicker');

clicker.addEventListener('click', randomer, false);

var colors = ['fuschia','red','molehair','leather','peruvian'];



function randomer(){

  var selector = Math.floor(Math.random() * colors.length);

  console.log(colors[selector]);
}
```

A little fun with a *faux store*: http://jsbin.com/zetorawuvi/edit?html,js,output

A little fun with *switchies*: http://jsbin.com/honanomecu/edit?html,js,console,output

# day 12
- http://karloespiritu.com/replacing-rvm-with-rbenv-in-os-x/
- http://c9.io

# day 13
- see how hard it is to do this yourself? https://www.railstutorial.org/book/modeling_users
- let's be civilised and use `bcrypt` and `has_secure_password`
- clone this and see what it does https://github.com/thebucknerlife/gif_vault.git
- if you are feeling brave you can use Thoughtbot's `Clearance` `gem` which we will look for a good example of

# day 14
- `bundle install --without production`
- lab is to follow the below two links to install clearance auth gem on a new rails app
- https://github.com/thoughtbot/clearance
- https://www.sitepoint.com/simple-rails-authentication-with-clearance/

# day 15
- make a `rails new devise_lab`
- https://github.com/plataformatec/devise
- https://www.youtube.com/watch?v=qY5HccvIuS4
- https://www.youtube.com/watch?v=3zvyeEYXT78

# day 16
- you did a `rails model`
- back half of this video is probably more important
- https://www.youtube.com/watch?v=gTBCHu0btn8&t=194s

# day 17
- brew cask install sqlitebrowser
- https://www.tutorialspoint.com/ruby-on-rails/rails-migrations.htm
- http://guides.rubyonrails.org/v3.2/migrations.html

databasey things via rails
- `rails c`
- `Modelname.column_names`
- `u = Model.create :field => "string", :field2 => "string", :field3 => integer, :field4 => "sometext"`

# day 18
- 1NF explained brilliantly: https://www.lynda.com/Access-tutorials/First-normal-form/412845/438437-4.html

`$ rails g model Person name:string age:integer title:string email:string`

`ActiveRecord::Base.connection.tables`

`ModelnameSingluar.column_names`

- Note integer only holds four charachters

- bookmark this link for proper Rails Singular or Plural https://gist.github.com/zackn9ne/46caab9141dbe6e344ba9f51c8bdd119

# day 19

- debugging your rails:db cheatsheet: Paste created: https://gist.github.com/a0d8f5a67b9e77a3b4e9f064d4d5f06e

- HW read: https://www.railstutorial.org/book/filling_in_the_layout

- HW try to do: 5.1.2

# day 20 "The Rails Asset Pipeline"

Bibliography
- Textbook Source for this info: https://www.railstutorial.org/book/filling_in_the_layout

- Additional src: http://api.rubyonrails.org/classes/ActionView/Helpers/UrlHelper.html

- Choose Bootstrap Components from: http://getbootstrap.com/components/

- A video on how to use Bootstrap Components: https://www.youtube.com/watch?v=no-Ntkc836w

How to Make a Link in Rails:

Step 1:
`$ rake routes`

Step 2:
look at the `left hand` column and take the `route_name` and + `_path`

Step 3:
add your choice of this code in any of your `.erb` templates:

```
<%= link_to "Home", root_path %>

<%= link_to "About", about_path %>

<%= link_to "Sign up now!", '#', class: "btn btn-lg btn-primary" %>  # nulled out link

```

What about using an Image or linking an Image:

Step 1:

`$ rake routes`

Step 2:
- look at the `left hand` column and use the following formula:

`route_name` and + `_path`

Step 3:
download an image and place your asset (image) in

`your_rails_app/app/assets/images`

Step 4: 
use the following most basic `erb syntax` to display your image:

`<%= image_tag("rails.png") %>`

Step 5:
this is the equivelant of `<img src="/some/path/logo.png">`

```
<%= link_to image_tag('logo.png'), root_path %> # link with an img

<%= link_to image_tag("rails.png", alt: "Rails logo"), root_path %>  # link with img and alt`
```

How do I use an External `CSS` Stylesheet In Rails?

`$ touch app/assets/stylesheets/custom.scss`

- Write your own `CSS` styles in that file, save it and reload the web page.
- How does this work? the prexisting code in the rails `application.html.erb` `<head>` section will already bring in your files.
- What is `SCSS`? you can write standard `CSS` or `SCSS` either will render properly in this file.

How do I use an `TWBS` In Rails?

1. Add to Gemfile: gem 'bootstrap-sass', '3.3.6'
2. $ bundle
3. $ touch app/assets/stylesheets/custom.scss
4. write your own CSS styles to the mid section of (the file mentioned in) 3:
5. add these two lines to the top of (the file mentioned in) 3:

```
@import "bootstrap-sprockets";
@import "bootstrap";
```

6. REBOOT Rails SERVER! `$ (ctrl-c) && ($ rails s)`
7. Add the following line to the bottom of `application.js` (include the forward slashes, I know it looks like comments but it's not): 

```
//= require bootstrap-sprockets
```

8. profit

* this is to bring in Twitter Bootstrap and be able to use any of Bootstrap's built-in styles
** if you don't want Bootstrap and only want to add a SCSS file to the asset pipeline, follow step 3 & 4 ONLY and no other steps are needed at all.





# Day 21

- rails troubleshooting

- On To The Lesson:

- get prepaired for angular/Mongo/Express/Node: http://yeoman.io/codelab/setup.html


# Day 22

- Grading Overview
- On To The Lesson:

40% ATT
40% FIN
20% MT
- get prepaired for angular/Mongo/Express/Node: http://yeoman.io/codelab/setup.html

physically late policy > 7m
2LATES = 1PRESENT

Late assignmet policy: For ever week late you lose 1 letter grade.

- Midterm Assignment Due: friday 23rd of December (via GitHub)

1. Make a Rails App
2. Use CSS
3. Use an image or images in your rails app
4. Make links, images and CSS "the rails way" (see #Day 20 there is tons of what you need in there)



<a name="pookie"></a>

# Day 23 Tue Jan  3 13:49:09 EST 2017

Rails cheatsheet below
* Rails Cheatsheet Singular or Plural			   :rails:cheatsheet:

```
| Controller | Plural   | rails g controller Users index show 
| Helper     | Plural   | rails g helper Users
| Mailer     | Singular | rails g mailer UserMailer                     
| Migration  | Plural   | rails g migration AddEmailToUsers email:string
```

### Rails Cheetsheet Project Workflow

1. `$ rails g controller Songs`

2. `$ rails g model Song name:string artist:string serialNumber:string`

2a. `$ rails g model Person name:string age:integer title:string email:string`

### Check Your DB (Schema) From Rails C

1. show all the tables with: `ActiveRecord::Base.connection.tables`

2. show info on a sigle table: `ModelnameSingluar.column_names`

3. show all the info on that column: `ModelnameSingluar.all`

4. Create a sample data directly in `$ rails c` *Note integer only holds four charachters: `u = Model.create :field => "string", :field2 => "string", :field3 => integer, :field4 => "sometext"`

# Day 31 Tue Jan 17 21:10:49 EST 2017

- trials and tribulations of webpack.js

- homework/ongoing investigation of webpack.js: https://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html

- try above link yourself XD

# Day 32 Wed Jan 18 13:09:24 EST 2017

- THE FINAL

- skim the following tutorial, substituting "Judo Heroes" for something YOU are interested in (the tutorial here): https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app

- set your version of `athletes.js` with a set of things you like such as `candy, shoes, access-a-ride client trips, tv shows` do it based on the following link: https://github.com/lmammino/judo-heroes/blob/master/src/data/athletes.js

- _it would be best if you start putting together your data ASAP aka `thestuffyoulike.js`_