"use strict";

function showGreeting(){
    //find the message div element
    let messageDiv = document.getElementById("message");

    //Set its content to "Hello World"
    messageDiv.innerHTML="Hello World! ";
}
//call the showGreeting() function when the .js file loads and this line is encountered
showGreeting();
