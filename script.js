//  ADD CURRENT DATE AT THE TOP OF THE PAGE


//  research Document ready function
$(document).ready(function (){
    //  ADD CURRENT DATE AT THE TOP OF THE PAGE
    var today = moment();
    console.log(today);


    $("#time-display").text(today.format("dddd, MMMM Do"));
    // assign var to HTML
    var rowEl = $(".row"); 
    var saveBtn =$(".col-md-1 col-sm-2 saveBtn");
    var todayEl =$("#currentDay");
    var timeDisplay =$("#time-display");  
    //  work with colours and past present future function()

    function checkTime()  {

        var now = moment().hour();
        rowEl.each(function(){
        var workTime = parseInt($(this).attr("id").split("row")[1]);
        
        if (workTime< now){
            $(this).children("input").addClass("past");

            // console.log($(this).children("input"))
            
        } else if (workTime === now){
            $(this).children("input").addClass("present");}
        else{
            $(this).children("input").addClass("future");
        }
    });
   }
   function getLocalstorage(){
    rowEl.each(function() {
        var saveTask = $(this).attr("id");
        if(localStorage.getItem(saveTask) !==null){
            $(this).children("input").val(localStorage.getItem(saveTask));
        }
            
    });
}
getLocalstorage();
 checkTime()
})




//    $(document).ready(function(){
//     todayEl.text(moment().format("dddd,MMMM Do"));
//     saveBtn.on("click", function(){
//         var inputText=$(this).siblings("input").val();
//         var timeSlot =$(this).parents().attr("id");
//         localStorage.setItem(timeSlot,inputText);
//     });
//     checkTime();
//     getLocalstorage();
//     });