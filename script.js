const convertButton = document.querySelector(".convert-button")

function convertMoney() {
    const inputMoneyValue = document.querySelector(".input-value").value

    const currancyValueToConvert = document.querySelector(".currancy-value-to-convert")// Valor em Real
    const currancyValueToConverted = document.querySelector(".currancy-value")// Outras Moedas

    const dolarToday = 5.2

    const convertedValue = inputMoneyValue / dolarToday

    currancyValueToConvert.innerHTML = inputMoneyValue

    console.log(convertedValue)
}

convertButton.addEventListener("click", convertMoney)