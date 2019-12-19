

//java local storage?

function save() {
    var saveApt = document.getElementById('wtime').value;
    localStorage.setItem('textarea', wtime);
}

function load() {
    var storedValue = localStorage.getItem('textarea');
    if (storedValue) {
        document.getElementById('wtime').value = storedValue;
    }
}


//Riley help ? jquery for colors changing time 
function hourColor() {
    var currentHour = moment().hours()
    // console.log(currentHour);
    $("wtime").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        console.log(blockHour);
        if (blockHour < currentHour) {
            console.log('Hour is past')
            $(this).addClass("past");
        } else if (blockHour > currentHour) {
            console.log('Hour is soon')
            $(this).addClass("future");
        } else {
            console.log('Hour is now')
            $(this).addClass("present");
        }
    })
}


