//1.variables and conditionals declarations
//i made them global for reusing 
let names = document.getElementById("name").value;

function sayHello(){

    let names = document.getElementById("name").value;

//these are the conditionals i came up with for making sure the user inputs their name.
    if (names.value== "") {
        alert("Please enter your name.");
    } else {
        alert(`Hello ${names}!`);
    }
}
 
//2.custom functions -->

//function 1:

function changeWebColor() {
    let webColor = document.getElementById("card").style.backgroundColor;
    let card = document.getElementById("card");
    let text = document.getElementById("text1");

    if (webColor === 'white') {
        card.style.backgroundColor = 'green'; // Change the background color to green
        text.innerHTML = 'The background color is now green'; // Change the text content
        console.log('color changed to green');
        
    } else {
        card.style.backgroundColor = 'white'; // Change the background color to white
        text.innerHTML = 'The background color is now back to white'; // Change the text content
        console.log('color changed to white');


    }
}
//function 2:

    let button1x = document.getElementById('btn1x');
    let button2x = document.getElementById('btn3x');
    let button3x = document.getElementById('btn5x');

    let textElement = document.getElementById('textElement');
    button1x.onclick = function() {        
        textElement.style.fontSize = '20px'; 
        console.log('Font size changed to 10px');
    }
    button2x.onclick = function() {        
        textElement.style.fontSize = '25px'; // Change font size to 10px
        console.log('Font size changed to 10px');
    }
    button3x.onclick = function() {        
        textElement.style.fontSize = '30px'; // Change font size to 10px
        console.log('Font size changed to 10px');
    }

//loops

function listHobbies() {
    let hobbies = ['Reading', 'Coding', 'Gaming', 'Hiking'];
    let output = '';

    for (let i = 0; i < hobbies.length; i++) {
        output += `<li>${hobbies[i]}</li>`;
    }

    document.getElementById('hobbies-list').innerHTML = `<ul>${output}</ul>`;
}



