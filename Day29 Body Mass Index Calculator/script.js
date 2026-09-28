const bmiForm = document.getElementById("bmiForm");
const resetBtn = document.getElementById("resetBtn");

const resultCard = document.getElementById("resultCard");

const displayGender = document.getElementById("displayGender");
const displayAge = document.getElementById("displayAge");
const displayBMI = document.getElementById("displayBMI");
const displayCategory = document.getElementById("displayCategory");
const healthyWeight = document.getElementById("healthyWeight");
const healthTip = document.getElementById("healthTip");
const progress = document.getElementById("progress");

// Calculate BMI
bmiForm.addEventListener("submit", function (e) {

    e.preventDefault();

    calculateBMI();

});

// Reset
resetBtn.addEventListener("click", function () {

    resultCard.style.display = "none";

    progress.style.width = "0%";

});

// Main Function
function calculateBMI() {

    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);

    const feet = parseFloat(document.getElementById("height-feet").value);
    const inches = parseFloat(document.getElementById("height-inches").value);

    const weight = parseFloat(document.getElementById("weight").value);

    // Validation

    if (
        gender === "" ||
        isNaN(age) ||
        isNaN(feet) ||
        isNaN(inches) ||
        isNaN(weight)
    ) {

        alert("Please fill all fields.");

        return;
    }

    if (age < 2 || age > 120) {

        alert("Age must be between 2 and 120.");

        return;
    }

    if (feet <= 0 || inches < 0 || inches > 11) {

        alert("Enter valid height.");

        return;
    }

    if (weight <= 0) {

        alert("Enter valid weight.");

        return;
    }

    // Convert Height

    const totalInches = (feet * 12) + inches;

    const heightMeters = totalInches * 0.0254;

    // BMI

    const bmi = weight / (heightMeters * heightMeters);

    let category = "";
    let tip = "";
    let className = "";

    if (bmi < 18.5) {

        category = "Underweight";
        className = "underweight";

        tip =
            "Increase calorie intake, eat protein-rich foods and perform strength training.";

    }

    else if (bmi < 25) {

        category = "Normal Weight";
        className = "normal";

        tip =
            "Excellent! Maintain a balanced diet, regular exercise and proper sleep.";

    }

    else if (bmi < 30) {

        category = "Overweight";
        className = "overweight";

        tip =
            "Reduce sugary foods, exercise daily and maintain a calorie deficit.";

    }

    else {

        category = "Obese";
        className = "obese";

        tip =
            "Consult a healthcare professional and adopt a healthy lifestyle.";

    }

    // Healthy Weight Range

    const minWeight = 18.5 * heightMeters * heightMeters;

    const maxWeight = 24.9 * heightMeters * heightMeters;

    // Progress Bar

    let percent = (bmi / 40) * 100;

    if (percent > 100) {

        percent = 100;

    }

    progress.style.width = percent + "%";

    // Show Result

    displayGender.innerHTML = gender;

    displayAge.innerHTML = age + " Years";

    displayBMI.innerHTML = bmi.toFixed(2);

    displayCategory.innerHTML = category;

    displayCategory.className = className;

    healthyWeight.innerHTML =
        `${minWeight.toFixed(1)} kg - ${maxWeight.toFixed(1)} kg`;

    healthTip.innerHTML = tip;

    resultCard.style.display = "block";

    // Scroll to Result

    resultCard.scrollIntoView({

        behavior: "smooth"

    });

}

// Press Enter Anywhere

document.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

        e.preventDefault();

        calculateBMI();

    }

});