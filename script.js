//  ADD CURRENT DATE AT THE TOP OF THE PAGE
var today = moment();
$("#time-display").text(today.format("dddd, MMMM Do"));
