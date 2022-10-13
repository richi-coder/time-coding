let title = document.querySelector(".title");
let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let displayDays = document.getElementById("days");
let displayHours = document.getElementById("hours");
let displayMinutes = document.getElementById("minutes");
let displaySeconds = document.getElementById("seconds");
let time = 0;
let startTime = new Date(2022, 0, 28); // My starting time coding in seconds
let btn = document.getElementsByTagName("button")[0];
let lightDark = document.getElementById("light-dark");
let theme = document.getElementsByClassName("theme")[0];
let userBtn = document.getElementById("yes");
let resetBtn = document.getElementById("reset");
let userDate = document.getElementById("date");
let userTime = 0;
let timeUser = 0;
let daysUser = 0;
let hoursUser = 0;
let minutesUser = 0;
let secondsUser = 0;
let userDays = document.getElementById("days-user");
let userHours = document.getElementById("hours-user");
let userMinutes = document.getElementById("minutes-user");
let userSeconds = document.getElementById("seconds-user");
let intervalo = "";
let userContainer = document.getElementById("user-container");

/* Current clicks counter */ 

let xhrCC = new XMLHttpRequest();
xhrCC.open("GET", "https://api.countapi.xyz/get/timecoding/clicks");
xhrCC.responseType = "json";
xhrCC.onload = function () {
    document.getElementById('clicks').innerText = this.response.value;
}
xhrCC.send();


/* Initialization */ 
resetBtn.disabled = true;
setTimeout(() => {
    /* Title Reload */

    title.onclick = () => location.reload();

    userDate.focus();
setInterval(() => {
    time = (new Date() - startTime)/1000;
    days = Math.floor(time/(3600*24));
    hours = Math.floor((time/(3600*24) - days) * 24);
    minutes = Math.floor(((time/(3600*24) - days) * 24 - hours) * 60);
    seconds = Math.floor(((((time/(3600*24) - days) * 24 - hours) * 60) - minutes) * 60);
    if (seconds < 10) seconds = "0" + seconds;
    if (minutes < 10) minutes = "0" + minutes;
    if (hours < 10) hours = "0" + hours;
    displayDays.textContent = days;
    displayHours.textContent = hours;
    displayMinutes.textContent = minutes;
    displaySeconds.textContent = seconds;
}, 200);

}, 6000);

/* Dark-light button */

btn.onclick = () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
    if (lightDark.innerHTML == "Light") lightDark.innerHTML = "Dark";
    else lightDark.innerHTML = "Light";
    theme.classList.toggle("active");
}

/* Another user */ 

userBtn.onclick = () => {
    userDate = document.getElementById("date");
    userTime = new Date(userDate.value.split("-").join(","));
    if (userDate.value.split("-").length == 3) {
        userContainer.style.opacity = "1";
        userContainer.style.height = "fit-content";
        /* Another user time */
        intervalo = setInterval(() => {
            timeUser = (new Date() - userTime)/1000;
            daysUser = Math.floor(timeUser/(3600*24));
            hoursUser = Math.floor((timeUser/(3600*24) - daysUser) * 24);
            minutesUser = Math.floor(((timeUser/(3600*24) - daysUser) * 24 - hoursUser) * 60);
            secondsUser = Math.floor(((((timeUser/(3600*24) - daysUser) * 24 - hoursUser) * 60) - minutesUser) * 60);
            if (secondsUser < 10) secondsUser = "0" + secondsUser;
            if (minutesUser < 10) minutesUser = "0" + minutesUser;
            if (hoursUser < 10) hoursUser = "0" + hoursUser;
            userDays.textContent = daysUser;
            userHours.textContent = hoursUser;
            userMinutes.textContent = minutesUser;
            userSeconds.textContent = secondsUser;
        }, 200);
                /* Calculate Clicks  */ 

                let xhrClicks = new XMLHttpRequest();
                xhrClicks.open("GET", "https://api.countapi.xyz/hit/timecoding/clicks");
                xhrClicks.responseType = "json";
                xhrClicks.onload = function () {
                    document.getElementById('clicks').innerText = this.response.value;
                }
                xhrClicks.send();
    }
    userBtn.disabled = true;
    resetBtn.disabled = false;
    userDate.disabled = true;
}

/* Reset Btn */
resetBtn.onclick = () => {
    userBtn.disabled = false;
    resetBtn.disabled = true;
    userDate.disabled = false;
    userDate.focus();
    clearInterval(intervalo);
    userDays.textContent = 0;
    userHours.textContent = 0;
    userMinutes.textContent = 0;
    userSeconds.textContent = 0;
    userContainer.style.opacity = "0";
    userContainer.style.height = "0";
}

/* Visits key: 540280d3-b72e-4321-a577-9f2170cb24ed */
/* Visits namespace: timecoding */
/* CountAPI */ 

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/hit/timecoding/540280d3-b72e-4321-a577-9f2170cb24ed");
xhr.responseType = "json";
xhr.onload = function() {
    document.getElementById('visits').innerText = this.response.value;
}
xhr.send();