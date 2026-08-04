const time = document.getElementById("time");
const date = document.getElementById("date");

function updateClock(){

    const now = new Date();

    // Time
    const currentTime = now.toLocaleTimeString("en-US",{
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit",
        hour12:true
    });

    // Date
    const currentDate = now.toLocaleDateString("en-US",{
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric"
    });

    time.innerHTML = currentTime;
    date.innerHTML = currentDate;
}

updateClock();
setInterval(updateClock,1000);