function addNumbers() {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);
    const result = firstNumber + secondNumber;

    document.getElementById('result').textContent = `Result: ${result}`;
}