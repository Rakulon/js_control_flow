//var x = prompt("What was your 1-100 number grade?")
var x = 78;

switch (true) {
  case (x >= 90):
    //document.write("You get an A!");
    console.log("You get an A!");
    break;
  case (x < 90) && (x >= 80 ):
    //document.write("You gettin a B son!<br>");
    console.log("You gettin a B son!<br>");
    break;
  case (x >= 70) &&  (x < 80):
    //document.write("You pass with a C.<br>");
    console.log("You pass with a C.<br>");
    break;
  case (x >= 60) && (x < 70):
    //document.write("Sorry you got a D...<br>");
    console.log("Sorry you got a D...<br>");
    break;
  case (x <= 59):
    //document.write("FAILURE WITH LETTER F D:.<br>");
    console.log("FAILURE WITH LETTER F D:.<br>");
    break;
  default:
    //document.write("Thats not a number grade... " + expr + ".<br>");
    console.log("Thats not a number grade... " + expr + ".<br>");
}

//document.write("Is there anything else you'd like?<br>");
console.log("Is there anything else you'd like?<br>");