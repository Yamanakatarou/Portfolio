/*
 You can change anything in these files--HTML tags, CSS styles, JavaScript functions, etc. 
 Do what you need to make it suitable for your STEM problem.

 The getInput function will take user input from the page. 
 You should call your functions from inside the getInput function.

 The writeOutput function will write some given text to the output span on the page. 
 You can call this function from your code and give it your result.
*/

// This function will get the text entered into the "input" text field.
// Then it calls another function with the input as an argument.
// function getWeight() {
//   let inputWeight = document.querySelector("#input1");
//   let weight = inputWeight.value;

//   // do something with the input
//   writeOutput(input); // <-- replace this with YOUR CODE
// }

// function getHeight() {
//   let inputHeight = document.querySelector("#input2");
//   let height = inputHeight.value;

//   // do something with the input
//   writeOutput(input); // <-- replace this with YOUR CODE
// }

// This function will write some text to the output span on the page.
function writeOutput(text) {
  let outputSpan = document.querySelector("#output1");
  outputSpan.textContent = text;
}

const image = document.createElement('img');
image.src = 'img/Great.jpg'

const image2 = document.createElement('img');
image2.src = 'img/Fat.jpg'

const image3 = document.createElement('img');
image3.src = 'img/skinny.jpg'

const image4 = document.createElement('img');
image4.src = 'img/Oh.jpg'

document.querySelector("#buttonGo").addEventListener("click", getBMI);

function getBMI() {

  let weight, height;


  weight = document.querySelector("#input1").value; 
  height = document.querySelector("#input2").value;

  let BMI = weight / ((height / 100) * (height / 100)) * 100 ;
  BMI = Math.round(BMI) / 100


  if (BMI < 18) {
    output2.innerHTML = '';
    alert("Too skinny!");
    document.querySelector("#output2").appendChild(image3) .height = 200;

  } else if (BMI > 10000) {
    output2.innerHTML = '';
    alert("Really?????!!!!!");
    document.querySelector("#output2").appendChild(image4) .height = 200;

  } else if (BMI > 25) {
    output2.innerHTML = '';
    alert("Fat!")
    document.querySelector("#output2").appendChild(image2) .height = 200;
    
  } else {
    output2.innerHTML = '';
    alert("Great!")
    document.querySelector("#output2").appendChild(image) .height = 200;
  }
  

  document.querySelector("#output1").textContent = BMI;
}

let submitButton = document.querySelector("#buttonGo");
submitButton.addEventListener("click", getBMI);