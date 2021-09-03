import { calculateBMI } from './calculation.js';

const display = document.getElementById("calculatedBMI");
const total = document.getElementById("digits");
const calc = document.getElementById("calculate");

function displayResult() {
    const w = document.getElementById("weight").value;
    const h = document.getElementById("height").value;
    const result = calculateBMI(w, h).toFixed(1);
    total.innerHTML = result;
    if(result < 18.5) {
        display.innerHTML = "Underweight";
    } 
    else if(result >= 18.5 && result <= 24.9) {
        display.innerHTML = "Healthy";
    }
    else if(result >= 25 && result <= 29.9) {
        display.innerHTML = "Overweight";
    }
    else {
        display.innerHTML = "Obese";
    }
}

calc.addEventListener("click", displayResult);

