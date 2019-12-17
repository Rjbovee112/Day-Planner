

//Clock//
const clock = document.getElementById('clock');

function updateTime() {
    const now = moment();
    const humanReadable = now.format('MMMM Do YYYY, h:mm a');

    clock.textContent = humanReadable;
}

setInterval(updateTime, 1000);
updateTime();

//java local storage

function save() {
    var saveApt = document.getElementById('wtime').value;
    localStorage.setItem('text', wtime);
}

function load() {
    var storedValue = localStorage.getItem('text');
    if (storedValue) {
        document.getElementById('wtime').value = storedValue;
    }
}