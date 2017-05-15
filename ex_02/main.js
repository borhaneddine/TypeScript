"use strict";
function onKeyUp() {
    // grab the input element + its value
    var input = document.getElementById("myInput");
    var firstname = input.value;
    // grab the output element
    var output = document.getElementById("myOutput");
    // send the message to the span with id=myOutput
    output.innerText = "Hi " + firstname + "\nYour firstname length is: " + firstname.trim().length;
}
