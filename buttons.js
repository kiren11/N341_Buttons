/**************************************
* TITLE: button
* AUTHOR: Kiren Kaur
* CREATE DATE: 3/31/18
* PURPOSE: learn about event handlers
* LAST MODIFIED ON: 3/31/18
**************************************/

$(document).ready(function(){

  //battle function
  function battleFunction(divID, strOutput, intNum, strOuput2) {
			var strMessage = intNum.toString();
			var strPirateName = strOutput + strMessage + strOuput2;
			document.getElementById(divID).textContent = strPirateName;
	}


  //3 handler buttons
  var handler1 = document.getElementById("handler1");
  handler1.onclick = function() {
    battleFunction("output", "Oy lass! ", 35, " pirates have walked the plank already!");
  }

  var handler2 = document.getElementById("handler2");
  handler2.onclick = function() {
    battleFunction("output", "But alas ", 100, " chests were obtained from ye enemy ships!");
  }

  var handler3 = document.getElementById("handler3");

  handler3.onclick = function() {
    battleFunction("output", "O lister ere, ", 60, " cap'ns were hollered from our loot snagging!");
  }



  //3 listener buttons
  var listener1 = document.getElementById("listener1");

  listener1.addEventListener("click", function() {
      battleFunction("output", "Across the wild sea ", 4, " ships came hither, lookin for a real fight!");
  }, false);


  var listener2 = document.getElementById("listener2");

  listener2.addEventListener("click", function() {
    battleFunction("output", "Me sailors threw ", 2000, " pirates right into the sea without a moments notice!");
  }, false);


  var listener3 = document.getElementById("listener3");

  listener3.addEventListener("click", function() {
    battleFunction("output", "Mi loot had ", 2000, " doubloons in it before they were stolen from me!");
  }, false);

}());
