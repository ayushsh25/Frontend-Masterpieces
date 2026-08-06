document.addEventListener("DOMContentLoaded", function () {

    const percentageSlider = document.getElementById("percentageSlider");
    const percentageValue = document.getElementById("percentageValue");

    percentageValue.textContent = `${percentageSlider.value}%`;

    percentageSlider.addEventListener("input", function () {
        percentageValue.textContent = `${percentageSlider.value}%`;
    });

});

function calculatePercentage() {

    const percentageSlider = document.getElementById("percentageSlider").value;
    const baseNumber = document.getElementById("baseNumber").value;

    if (baseNumber === "") {
        alert("Please enter the base number");
        return;
    }

    const result = (
        parseFloat(baseNumber) * parseFloat(percentageSlider) / 100
    ).toFixed(2);

    document.getElementById("result").innerHTML = `Result: ${result}`;
}