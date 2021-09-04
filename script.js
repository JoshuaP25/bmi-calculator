import { calculateBMI } from './calculation.js';

const display = document.getElementById("calculatedBMI");
const total = document.getElementById("digits");
const calc = document.getElementById("calculate");

function displayResult() {
    const w = document.getElementById("weight").value;
    const h = document.getElementById("height").value;
    const result = calculateBMI(w, h).toFixed(1);
    
    if(isNaN(result)) {
        total.innerHTML = "Warning!";
    }
    else {
        total.innerHTML = 'BMI = ' + result;
    }
    if(result < 18.5) {
        display.innerHTML = "Underweight";
        display.style.color = "#1abc9c";
    } 
    else if(result >= 18.5 && result <= 24.9) {
        display.innerHTML = "Healthy";
        display.style.color = "#27ae60";
    }
    else if(result >= 25 && result <= 29.9) {
        display.innerHTML = "Overweight";
        display.style.color = "#f39c12";
    }
    else if(result >= 30) {
        display.innerHTML = "Obese";
        display.style.color = "#c0392b";
    } else {
        display.innerHTML = "Invalid input";
        display.style.color = "#e74c3c";
    }
}

calc.addEventListener("click", displayResult);

