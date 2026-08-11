function readMore() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");

    if (window.getComputedStyle(moreText).display === "none") {
        moreText.style.display = "inline";
        dots.style.display = "none";
        btnText.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        dots.style.display = "inline";
        btnText.textContent = "Read More";
    }
}