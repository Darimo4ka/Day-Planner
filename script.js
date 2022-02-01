//  ADD CURRENT DATE AT THE TOP OF THE PAGE
// var today = moment();
// $("#time-display").text(today.format("dddd, MMMM Do"));


// assign var to HTML
var rowEl = $(".row"); 
var saveBtn =$(".col-md-1 col-sm-2 saveBtn");
var todayEl =$("#currentDay");
var timeDisplay =$("#time-display");

function getLocalstorage(){
    rowEl.each(function() {
        var saveTask = $(this).attr("id");
        if(localStorage.getItem(saveTask) !==null){
            $(this).children("input").val(localStorage.getItem(saveTask));
        }
            
    });
}
// handle displaying the time
function checkTime()  {

    var now = moment().hour();

    rowEl.each(function(){
        var workTime = parseInt($(this).attr("id").split("row")[1]);
    if (workTime< now){
        $(this).children("input").addclass("past");
    } else if (workTime === now){
        $(this).children("input").addclass("present");}
        else{
            $(this).children("input").addclass("future");
        }
    });
   }
   $(document).ready(function(){
    todayEl.text(moment().format("dddd,MMMM Do"));
    saveBtn.on("click", function(){
        var inputText=$(this).siblings("input").val();
        var timeSlot =$(this).parents().attr("id");
        localStorage.setItem(timeSlot,inputText);
    });
    checkTime();
    getLocalstorage();
    });