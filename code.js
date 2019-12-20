

//java local storage?


$('.btn').on('click', function () {
    var key = $(this).siblings()[0];
    key = $(key).attr('id')
    // console.log(key)
    var comment = $("#" + key).val()
    localStorage.setItem(key, comment)
})

function printTasks() {


}


//Riley help/BTB help - jquery for colors changing time 


function hourColor() {
    var currentHour = moment().hours()
    // console.log(currentHour);
    $(".wtime").each(function () {
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
    if (currentHour <= 8 || currentHour >= 18) {
        clearStorage();
    }

    console.log("Dont touch this function it works")
}

