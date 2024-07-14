// Function to perform addition
function add(number1, number2) {
    return number1 + number2;
}

// Function to perform subtraction
function subtract(number1, number2) {
    return number1 - number2;
}

// Function to perform multiplication
function multiply(number1, number2) {
    return number1 * number2;
}

// Function to perform division
function divide(number1, number2) {
    // Check if dividing by zero
    if (number2 === 0) {
        return 'Infinity'; // Handle division by zero
    } else {
        return number1 / number2;
    }
}

// Event listener for the addition button
document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Event listener for the subtraction button
document.getElementById('subtract').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Event listener for the multiplication button
document.getElementById('multiply').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Event listener for the division button
document.getElementById('divide').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
