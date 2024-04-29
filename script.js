const convertButton = document.querySelector(".convert-button");

const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-value").value; //Valor a se converter.
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); //Em Real
    const currencyValueConverted = document.querySelector(".currency-value-converted"); //Convertido (Dolar/Euro)

    console.log(currencySelect.value)

    const dolarToday = 5.2;
    const euroToday = 6.2;

    if (currencySelect.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);

    }

    if (currencySelect.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);

    }
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-image");

    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar Americano";
        currencyImage.src = "./assets/usa.png";
    }

    if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/euro.png";
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);

