function onKeyUp()
{
    // grab the input element + its value
    let input = document.getElementById("myInput") as HTMLInputElement;
    let firstname = input.value;

    // grab the output element
    let output = document.getElementById("myOutput") as HTMLOutputElement;

    // send the message to the span with id=myOutput
    output.innerText = "Hi " + firstname + "\nYour firstname length is: " + firstname.trim().length;
}