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
  if (value === '') {
      return;
    }


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
  deleteListItem.textContent = '';

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


//week
var d = new Date();
var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
document.getElementById("whatweek").innerHTML = n;

//month
var d = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[d.getMonth()];
document.getElementById("whatmonth").innerHTML = n;


//date
var d = new Date();
    var n = d.getDate();
    document.getElementById("whatdate").innerHTML = n;

//  document.getElementById("whatmonth").innerHTML = n;
