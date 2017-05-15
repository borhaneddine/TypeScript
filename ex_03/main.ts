// enum + conditional statements practice

enum monthList { January = 1, February, March, April, May, June,
    July, August, September, October, November, December }

enum priceList { "$32.50" = 1, "$11", "$36.99" }

enum weekDays { Sunday = 1, Monday, Tuesday }

let book1:  string = "TypeScript in Plain Language";
let nthDay: string = "third";

alert("My favorite month of the year is " + monthList[10]);
alert(book1 + " costs " + priceList[2]);

switch (nthDay)
{
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