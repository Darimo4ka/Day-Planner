//  ADD CURRENT DATE AT THE TOP OF THE PAGE


//  research Document ready function
$(document).ready(function (){
    //  ADD CURRENT DATE AT THE TOP OF THE PAGE
    var today = moment();
    // console.log(today);


    $("#time-display").text(today.format('MMM DD, YYYY [at] hh:mm:ss a'));
    // assign var to HTML
    var rowEl = $(".row"); 
    var saveBtn =$(".col-md-1.col-sm-2.saveBtn");
    console.log(saveBtn);
    // var todayEl =$("#currentDay");
    // var timeDisplay =$("#time-display");  
    //  work with colours and past present future function()

    function checkTime()  {

        var now = moment().hour();
        rowEl.each(function(){
        var workTime = parseInt($(this).attr("id").split("row")[1]);
        
        if (workTime< now){
            $(this).children("input").addClass("past");

        } else if (workTime === now){
            $(this).children("input").addClass("present");
           
        } else{
            $(this).children("input").addClass("future");

            // console.log($(this).children("input"))
        }
    });
   }
   saveBtn.on("click", function(){
    //    console.log(element.onclick)

        var inputText=$(this).siblings("input").val();

        // console.log($(this).children("input"))

        var timeSlot =$(this).parents().attr("id");

        // console.log($(this).parents().attr("id"))

        localStorage.setItem(timeSlot,inputText);
        // console.log($(this).parents)
});
   function getLocalstorage(){
        rowEl.each(function() {
            // console.log($(this))
            var saveTask = $(this).attr("id");
            if(localStorage.getItem(saveTask) !==null){
            $(this).children("input").val(localStorage.getItem(saveTask));
        }
            
    });
}
   
    getLocalstorage();
    checkTime()
})
