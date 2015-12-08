// Create variables for our form and list
var form = document.querySelectorAll('.new-item-form')[0];
var list = document.querySelectorAll('.list')[0];

// Create listener for form submissions
function formListener(e){
  // Prevent the form from submitting by default
  e.preventDefault();

  // Get the value from the form input
  // using the input's name attribute
  var value = form['new-item-input'].value;

  // Create new li element to insert in list
  var item = document.createElement('li');
  item.setAttribute('class', 'item');
// here the cancel button

  // Create checkbox to toggle item status
  var checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('class', 'item-checkbox');

  // Create span to wrap title of item
  var title = document.createElement('span');
  title.setAttribute('class', 'item-title');
  title.textContent = value;

  var deleteListItem = document.createElement('button');
  deleteListItem.textContent = 'Remove';

  function removeListItem(event){
    var listItem = event.target.parentNode;
    var list = listItem.parentNode;

    list.removeChild(listItem);
  }

  deleteListItem.addEventListener('click', removeListItem);

  // Add checkbox and title to li element
  item.appendChild(checkbox);
  item.appendChild(title);
  item.appendChild(deleteListItem);

  // Add li element to list
  list.insertBefore(item, list.firstChild);
  form['new-item-input'].value = '';
//  list.appendChild(item);
}

// Add an event listener for form submit events
form.addEventListener('submit', formListener);


///here the cancel button


//for (var i = 0; i< )
//addTolist();

//mike button style
var button_1 = document.querySelectorAll('.button_1')[0];
var button_2 = document.querySelectorAll('.button_2')[0];
var button_3 = document.querySelectorAll('.button_3')[0];
var button_4 = document.querySelectorAll('.button_4')[0];

function changeColor_1(){
  document.body.setAttribute('class', 'theme-1');
}

function changeColor_2(){
  document.body.setAttribute('class', 'theme-2');
}

function changeColor_3(){
  document.body.setAttribute('class', 'theme-3');
}

function changeColor_4(){
  document.body.setAttribute('class', 'theme-4');
}

button_1.addEventListener('click', changeColor_1);
button_2.addEventListener('click', changeColor_2);
button_3.addEventListener('click', changeColor_3);
button_4.addEventListener('click', changeColor_4);

<!--calender-->
$(document).ready(function () {

var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
var dayNames= [ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" ];

var newDate = new Date();
newDate.setDate(newDate.getDate());

setInterval( function() {
	var hours = new Date().getHours();
	$(".hour").html(( hours < 10 ? "0" : "" ) + hours);
    var seconds = new Date().getSeconds();
	$(".second").html(( seconds < 10 ? "0" : "" ) + seconds);
    var minutes = new Date().getMinutes();
	$(".minute").html(( minutes < 10 ? "0" : "" ) + minutes);

    $(".month span,.month2 span").text(monthNames[newDate.getMonth()]);
    $(".date span,.date2 span").text(newDate.getDate());
    $(".day span,.day2 span").text(dayNames[newDate.getDay()]);
    $(".year span").html(newDate.getFullYear());
}, 1000);

});
