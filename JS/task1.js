function reverseNumber() {
    // Отримати значення введеного числа
    var originalNumber = document.getElementById('numberInput').value;

    // Перевернути число
    var reversedNumber = reverseDigits(originalNumber);

    // Вивести результат в інше вікно
    var resultContainer = document.getElementById('passwordResult');
    resultContainer.innerHTML = ' ' + reversedNumber;
    resultContainer.style.display = 'block';
}

function reverseDigits(number) {
    // Перетворити число в рядок, перевернути його та повернути як число
    return parseInt(number.toString().split('').reverse().join(''));
}
