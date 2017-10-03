var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ffoxlogo.jpg'){
        myImage.setAttribute('src', 'images/funpic2.jpg');
    } else {
        myImage.setAttribute('src', 'images/ffoxlogo.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Pickle RICK!!! is cooler than ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Pickle RICK!!! is cooler than ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
