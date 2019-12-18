

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


//Riley help 

$(document).ready(funtion(){

    $(".btn btn-primary").on("click", function () {
        console.log($(this))
    })

    function hoursUpdater() {
    var currentHour = moment().hours();
    console.log(currentHour);

    $(".wtime").each(function) {

    var blockHour = ($(this).attr("id").split("-")[1])
        console.log(typeof blockHour);
    console.log(typeof currentHour);

    if(blockHour <currentHour) {

        console.log("Block Hour is before current hour");

    }else if(condition) {
        if 
    }
}
}

    console.log("hoursUpdater funtion did run");
};

console.log("hoursUpdater is ready");
hoursUpdater();

var setInterval = setInterval(hoursUpdater, 15000)

})
