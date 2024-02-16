function capitalizeWords() {
    // Отримати значення введеного рядка
    var inputText = document.getElementById('inputText').value;

    // Зробити першу літеру кожного слова великою
    var capitalizedText = capitalizeFirstLetter(inputText);

    // Вивести результат в інше вікно
    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = ' ' + capitalizedText;
    resultContainer.style.display = 'block';
}

function capitalizeFirstLetter(text) {
    // Розділити рядок на слова, перетворити першу літеру кожного слова великою
    return text.replace(/\b\w/g, function (match) {
        return match.toUpperCase();
    });
}
