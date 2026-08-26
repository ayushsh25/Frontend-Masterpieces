document.addEventListener("DOMContentLoaded", function(){

    const input = document.querySelector("textarea");
    const characterCount = document.querySelector("#characterCount");
    const wordCount = document.querySelector("#wordCount");
    const sentenceCount = document.querySelector("#sentenceCount");

    input.addEventListener("input", function(){

        const text = input.value.trim();

        //Character count
        characterCount.textContent = text.length;

        //Words count
        const words = text.split(/\s+/).filter(word => word.length > 0);
        wordCount.textContent = words.length;

        //Sentences count
        const sentences = text.split(/[.!?]+/).filter(sentence => sentence.length > 0);
        sentenceCount.textContent = sentences.length;
    });
});