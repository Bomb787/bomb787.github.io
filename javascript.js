function startUpdates() {
    //Update again as the updater will only start after the first second has passed.
    updateTime();
    const t = setInterval(updateTime, 1000);
}
function updateTime() {
    const date = new Date();
    const hours = date.getHours();
    if(3 < hours && hours < 12) {
        document.getElementById("welcomeText").innerText = "Good Morning!"
    } else if(12 <= hours && hours < 17) {
        document.getElementById("welcomeText").innerText = "Good Afternoon!"
    } else {
        document.getElementById("welcomeText").innerText = "Good Evening!"
    }
    document.getElementById("time").innerText = date.toLocaleTimeString();
}

window.onload = (event) => {
    //Update on load then let the timer handle it.
    updateTime();
    //Sync updater to system ms
    setTimeout(startUpdates, 1000 - new Date().getMilliseconds());
};