const adviceId = document.querySelector('#adviceId');
const textId = document.querySelector('#adviceText');
const btn = document.querySelector('#btn');


/*
this script allows the site to generate new advice whenever they click on the dice. I fetch the public api with the weblink 
then I save the the advice number and text into variables which I send to the html file using the IDs I set in the html file
*/


function getAdvice(){

    fetch('https://api.adviceslip.com/advice').then(response => {
return response.json();

}).then(adviceData => {

const adviceNum = adviceData.slip.id; // assigns advice number
const advice = adviceData.slip.advice; // assigns advice text


adviceId.textContent = adviceNum; 
textId.innerHTML = `<p>${advice}</p>`; // uses the adviceId and sets the advice text in the html document

}).catch(error => {

    console.log(error); // catches and prints errors to the console

})
}

btn.addEventListener('click', function(){  //function allows new advice to be generated when user clicks dice
    getAdvice();
})

window.onload = () => {   //generates advice on page startup
    getAdvice();
}

