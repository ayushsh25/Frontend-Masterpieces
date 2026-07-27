const keys = document.querySelectorAll(".key");

// Mouse Click
keys.forEach((key) => {

    key.addEventListener("click", function (e) {

        e.stopPropagation();

        const note = this.dataset.note;

        const audio = document.getElementById(note);

        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }

        this.classList.add("active");

        setTimeout(() => {
            this.classList.remove("active");
        },150);

    });

});

// Keyboard Mapping
const keyMap = {
    a:"C",
    w:"Cs",
    s:"D",
    e:"Ds",
    d:"E",
    f:"F",
    t:"Fs",
    g:"G",
    y:"Gs",
    h:"A",
    u:"As",
    j:"B"
};

document.addEventListener("keydown",(event)=>{

    const note = keyMap[event.key.toLowerCase()];

    if(!note) return;

    const audio=document.getElementById(note);

    if(audio){
        audio.currentTime=0;
        audio.play();
    }

    const key=document.querySelector(`[data-note="${note}"]`);

    if(key){
        key.classList.add("active");

        setTimeout(()=>{
            key.classList.remove("active");
        },150);
    }

});