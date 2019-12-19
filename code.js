

//java local storage?

$(".btn btn-primary").on("click", function () {
    var comment0 = $.trim($("#act-9").val());
    if (comment0 != '') {
        alert(comment0);
        localStorage.setItem('task-0', comment0)
    }


    //Riley help/BTB help - jquery for colors changing time 


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
        console.log("Dont touch this function it works")
    }

