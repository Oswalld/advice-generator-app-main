const id = document.querySelector('#api-id');
const advice = document.querySelector('#api-advice');
const button = document.querySelector('#advice-button');

// Getting API
const adviceAPI = "https://api.adviceslip.com/advice";

// fuction to make api change the quote and ID
function fetchAdvice() {
    
    fetch(adviceAPI)
    .then(response => response.json())
    .then(data => {
        id.textContent = data.slip.id;
        advice.textContent = data.slip.advice;
    })
    
}
// 1st use of the function to show something first load
fetchAdvice();

const dice = document.querySelector('.dice');
const fogLayer = document.querySelector('.fogwrapper');
let actionInProgress = false;

// When pressing button
button.addEventListener("click", () => {
    if (!actionInProgress) {
        actionInProgress = true;  
        dice.classList.add("diceAnim");  // add animation of dice
        fogLayer.classList.add("fogAnim"); // add animation of fog
        
        setTimeout(function(){ // delay because without it the quote would instant pop with the fog appear
            fetchAdvice();

        }, 1000); 


        setTimeout(function(){ 
            dice.classList.remove("diceAnim");  // remove animation of dice
            fogLayer.classList.remove("fogAnim"); // remove animation of fog
            actionInProgress = false;
        }, 2000);
    }
});