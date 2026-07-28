function textToAudio(){

    const textBox = document.querySelector(".text");
    const msg = textBox.value.trim();

    if(msg === ""){
        alert("Please enter some text to convert to audio.");
        return;
    }

    const speech = new SpeechSynthesisUtterance(msg);

    speech.lang = "en-US";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch= 1;

    // When speaking is finished
    speech.onend = function () {
        textBox.value = "";      // Clear the textarea
        textBox.focus();         // Cursor returns to the textarea
    };

    window.speechSynthesis.cancel(); // Cancel any ongoing speech synthesis
    window.speechSynthesis.speak(speech);
}