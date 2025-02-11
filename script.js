document.getElementById("convert-btn").addEventListener("click", function () {
    const numberInput = document.getElementById("number").value.trim();
    const outputElement = document.getElementById("output");

    outputElement.textContent = "";

    if (numberInput === "") {
        outputElement.textContent = "Please enter a valid number";
        return;
    }

    const number = parseInt(numberInput, 10);

    if (isNaN(number)) {
        outputElement.textContent = "Please enter a valid number";
        return;
    }

    if (number < 1) {
        outputElement.textContent = "Please enter a number greater than or equal to 1";
        return;
    }

    if (number >= 4000) {
        outputElement.textContent = "Please enter a number less than or equal to 3999";
        return;
    }

    const romanNumerals = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1],
    ];

    let roman = "";
    let remaining = number;

    for (const [symbol, value] of romanNumerals) {
        while (remaining >= value) {
            roman += symbol;
            remaining -= value;
        }
    }

    outputElement.textContent = roman;
});
