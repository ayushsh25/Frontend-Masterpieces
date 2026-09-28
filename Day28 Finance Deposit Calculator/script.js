const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", calculateFD);

function calculateFD() {

    const principal = parseFloat(document.getElementById("principle").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const tenure = parseFloat(document.getElementById("tenure").value);

    const result = document.getElementById("result");

    // Validation
    if (isNaN(principal) || isNaN(interestRate) || isNaN(tenure)) {
        result.style.color = "red";
        result.innerHTML = "Please enter all the values.";
        return;
    }

    if (principal <= 0 || interestRate <= 0 || tenure <= 0) {
        result.style.color = "red";
        result.innerHTML = "Values must be greater than 0.";
        return;
    }

    // Compound Interest Formula
    // A = P(1 + R/100)^T

    const maturityAmount =
        principal * Math.pow((1 + interestRate / 100), tenure);

    const interestEarned = maturityAmount - principal;

    result.style.color = "green";

    result.innerHTML = `
        <strong>Principal Amount:</strong> ₹${principal.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}<br><br>

        <strong>Interest Earned:</strong> ₹${interestEarned.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}<br><br>

        <strong>Maturity Amount:</strong> ₹${maturityAmount.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}
    `;
}