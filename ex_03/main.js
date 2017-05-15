"use strict";
// enum + conditional statements practice
var monthList;
(function (monthList) {
    monthList[monthList["January"] = 1] = "January";
    monthList[monthList["February"] = 2] = "February";
    monthList[monthList["March"] = 3] = "March";
    monthList[monthList["April"] = 4] = "April";
    monthList[monthList["May"] = 5] = "May";
    monthList[monthList["June"] = 6] = "June";
    monthList[monthList["July"] = 7] = "July";
    monthList[monthList["August"] = 8] = "August";
    monthList[monthList["September"] = 9] = "September";
    monthList[monthList["October"] = 10] = "October";
    monthList[monthList["November"] = 11] = "November";
    monthList[monthList["December"] = 12] = "December";
})(monthList || (monthList = {}));
var priceList;
(function (priceList) {
    priceList[priceList["$32.50"] = 1] = "$32.50";
    priceList[priceList["$11"] = 2] = "$11";
    priceList[priceList["$36.99"] = 3] = "$36.99";
})(priceList || (priceList = {}));
var weekDays;
(function (weekDays) {
    weekDays[weekDays["Sunday"] = 1] = "Sunday";
    weekDays[weekDays["Monday"] = 2] = "Monday";
    weekDays[weekDays["Tuesday"] = 3] = "Tuesday";
})(weekDays || (weekDays = {}));
var book1 = "TypeScript in Plain Language";
var nthDay = "third";
alert("My favorite month of the year is " + monthList[10]);
alert(book1 + " costs " + priceList[2]);
switch (nthDay) {
    case "first":
        alert("The " + nthDay + " of the week is " + weekDays[1]);
        break;
    case "second":
        alert("The " + nthDay + " of the week is " + weekDays[2]);
        break;
    case "third":
        alert("The " + nthDay + " of the week is " + weekDays[3]);
        break;
    default:
        alert("That day is not on the list");
}
