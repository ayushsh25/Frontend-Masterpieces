const colourDisplaySection = document.getElementById("colour-display");
const newColourBtnElement = document.getElementById("new-colour-button");
const currentColourElement = document.getElementById("current-colour");

const hexDigits = "0123456789ABCDEF";

newColourBtnElement.addEventListener("click", changeColour);

function changeColour(){

    const pageColour = generateRandomHexColour();
    const cardColour = generateRandomHexColour();

    // Change page background
    document.body.style.backgroundColor = pageColour;

    // Change display box background
    colourDisplaySection.style.backgroundColor = cardColour;

    // Show page background HEX code
    currentColourElement.textContent = pageColour;

    // Automatically change text color for better visibility
    currentColourElement.style.color = getTextColour(pageColour);
}

function generateRandomHexColour(){

    let colour = "#";

    for(let i=0;i<6;i++){
        colour += hexDigits[Math.floor(Math.random()*16)];
    }

    return colour;
}

function getTextColour(hex){

    hex = hex.substring(1);

    const r = parseInt(hex.substring(0,2),16);
    const g = parseInt(hex.substring(2,4),16);
    const b = parseInt(hex.substring(4,6),16);

    const brightness = (r*299 + g*587 + b*114)/1000;

    return brightness > 128 ? "#000000" : "#FFFFFF";
}