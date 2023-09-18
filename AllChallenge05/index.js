const inputElement = document.getElementById("userInput");
const numbers = document.querySelectorAll('.num');
const results = document.querySelectorAll('.result');
const itera = document.querySelectorAll('.iteration');

inputElement.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        const userInput = inputElement.value;
        
        // Check if userInput is a valid number or not
        if (!isNaN(userInput) && userInput >= 1 && userInput <= 100) {
            for (let i = 0; i < 10; i++) {
                numbers[i].textContent = userInput;
            }
            for (let j = 0; j < itera.length; j++) {
                let ans = userInput * parseInt(itera[j].textContent);
                results[j].textContent = ans;
            }
        } else {
            alert("Please enter a valid number.");
        }
    }
});
