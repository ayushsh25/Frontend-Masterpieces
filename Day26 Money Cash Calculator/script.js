// Denominations
const notes = [500, 200, 100, 50, 20, 10, 5, 2, 1];

// Add event listeners
notes.forEach(value => {
    document.getElementById(`et${value}`).addEventListener("input", calculateCash);
});

// Reset button
document.getElementById("btnReset").addEventListener("click", resetCalculator);

// Calculate Total Cash
function calculateCash() {

    let total = 0;

    notes.forEach(value => {

        const input = document.getElementById(`et${value}`);
        const output = document.getElementById(`txt${value}`);

        let count = parseInt(input.value);

        if (isNaN(count) || count < 0) {
            count = 0;
        }

        const amount = count * value;

        output.innerText = "₹ " + amount.toLocaleString("en-IN");

        total += amount;
    });

    document.getElementById("txtFinalCash").innerText =
        "Total Cash : ₹ " + total.toLocaleString("en-IN");

    document.getElementById("txtFinalCashInWords").innerText =
        numberToWords(total) + " Rupees Only";
}

// Reset Function
function resetCalculator() {

    notes.forEach(value => {
        document.getElementById(`et${value}`).value = "";
        document.getElementById(`txt${value}`).innerText = "₹ 0";
    });

    document.getElementById("txtFinalCash").innerText = "Total Cash : ₹ 0";
    document.getElementById("txtFinalCashInWords").innerText = "Zero Rupees Only";
}

// Number to Words
function numberToWords(num) {

    if (num === 0) return "Zero";

    const ones = [
        "", "One", "Two", "Three", "Four", "Five",
        "Six", "Seven", "Eight", "Nine", "Ten",
        "Eleven", "Twelve", "Thirteen", "Fourteen",
        "Fifteen", "Sixteen", "Seventeen",
        "Eighteen", "Nineteen"
    ];

    const tens = [
        "", "", "Twenty", "Thirty", "Forty",
        "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    ];

    function convert(n) {

        if (n < 20)
            return ones[n];

        if (n < 100)
            return tens[Math.floor(n / 10)] +
                (n % 10 ? " " + ones[n % 10] : "");

        if (n < 1000)
            return ones[Math.floor(n / 100)] +
                " Hundred" +
                (n % 100 ? " " + convert(n % 100) : "");

        if (n < 100000)
            return convert(Math.floor(n / 1000)) +
                " Thousand" +
                (n % 1000 ? " " + convert(n % 1000) : "");

        if (n < 10000000)
            return convert(Math.floor(n / 100000)) +
                " Lakh" +
                (n % 100000 ? " " + convert(n % 100000) : "");

        return convert(Math.floor(n / 10000000)) +
            " Crore" +
            (n % 10000000 ? " " + convert(n % 10000000) : "");
    }

    return convert(num);
}

// Initial Load
calculateCash();