

//java local storage?


$('.btn').on('click', function () {
    var key = $(this).siblings()[0];
    key = $(key).attr('id')
    var comment = $("#" + key).val()
    localStorage.setItem(key, comment)
})

function printTasks() {
    var key = $(this).siblings()[0];
    key = $(key).attr('id')
    var comment = $("#" + key).val()
    comment.val(localStorage.getItem(key))
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
        var textArea = $(this).children().children()[0];
        var localKey = $(this).children().children()[0].attr("id");
    })
    if (currentHour <= 8 || currentHour >= 18) {
        clearStorage();
    }


}

// printTasks()
hourColor()
