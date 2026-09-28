const loveForm = document.getElementById("loveForm");
const resetBtn = document.getElementById("resetBtn");
const shareBtn = document.getElementById("shareBtn");

const resultCard = document.getElementById("resultCard");
const progress = document.getElementById("progress");

const lovePercent = document.getElementById("lovePercent");
const relationshipStatus = document.getElementById("relationshipStatus");
const loveMessage = document.getElementById("loveMessage");

// Romantic Quotes
const quotes = [
    "True love begins when nothing is expected in return. ❤️",
    "Love is not about finding the perfect person, but seeing an imperfect person perfectly. 💖",
    "Every love story is beautiful, but yours could be my favorite. 💕",
    "Love grows stronger when shared with trust and respect. 🌹",
    "A relationship is strongest when two people choose each other every day. 💘",
    "Together is a wonderful place to be. ❤️",
    "Love is friendship set on fire. 🔥",
    "Happiness is being loved for who you are. 😊"
];

// Generate a consistent percentage based on names
function calculateLovePercentage(name1, name2) {

    const combined = (name1 + name2).toLowerCase();

    let hash = 0;

    for (let i = 0; i < combined.length; i++) {
        hash += combined.charCodeAt(i) * (i + 1);
    }

    let percentage = (hash % 51) + 50; // 50–100%

    return percentage;
}

// Calculate
loveForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const yourName = document.getElementById("yourName").value.trim();
    const partnerName = document.getElementById("partnerName").value.trim();

    if (yourName === "" || partnerName === "") {
        alert("Please enter both names.");
        return;
    }

    const score = calculateLovePercentage(yourName, partnerName);

    showResult(score, yourName, partnerName);

});

// Display Result
function showResult(score, yourName, partnerName) {

    resultCard.style.display = "block";

    let count = 0;

    progress.style.width = "0%";

    const animation = setInterval(() => {

        lovePercent.innerHTML = count + "%";

        progress.style.width = count + "%";

        if (count >= score) {

            clearInterval(animation);

        }

        count++;

    }, 20);

    let status = "";
    let message = "";

    if (score >= 95) {

        status = "💍 Perfect Match";

        message = "Your bond is incredibly strong. Wishing you a lifetime of happiness together! ❤️";

    }
    else if (score >= 85) {

        status = "😍 Excellent Match";

        message = "You both have amazing compatibility. Trust and love will make your relationship stronger.";

    }
    else if (score >= 70) {

        status = "😊 Good Match";

        message = "You have a good connection. Communication and understanding will strengthen your relationship.";

    }
    else if (score >= 60) {

        status = "🙂 Average Match";

        message = "Every relationship needs patience, trust, and effort to grow.";

    }
    else {

        status = "💛 Friendship First";

        message = "The strongest relationships often begin with friendship, respect, and understanding.";

    }

    relationshipStatus.innerHTML = status;

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    loveMessage.innerHTML = `
        <strong>${yourName}</strong> ❤️ <strong>${partnerName}</strong><br><br>
        ${message}
        <br><br>
        <em>${randomQuote}</em>
    `;

    resultCard.scrollIntoView({
        behavior: "smooth"
    });

}

// Reset
resetBtn.addEventListener("click", function () {

    resultCard.style.display = "none";

    progress.style.width = "0%";

    lovePercent.innerHTML = "0%";

    relationshipStatus.innerHTML = "Waiting...";

    loveMessage.innerHTML = "Enter both names to discover your compatibility.";

});

// Share Result
shareBtn.addEventListener("click", async function () {

    const text =
        `❤️ Love Calculator ❤️

Love Score: ${lovePercent.innerText}

${relationshipStatus.innerText}

${loveMessage.innerText}`;

    if (navigator.share) {

        try {

            await navigator.share({

                title: "Love Calculator",

                text: text

            });

        }
        catch (error) {
            console.log(error);
        }

    }
    else {

        navigator.clipboard.writeText(text);

        alert("Result copied to clipboard!");

    }

});

// Enter Key Support
document.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

        e.preventDefault();

        loveForm.requestSubmit();

    }

});