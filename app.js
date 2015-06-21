$(document).ready(function () {
    
    $(".clear").on("click", function(){
		$(".squarestyle").css("background", "red");
	});

    	var gridwidth = 16;
    	var makegrid = gridwidth * gridwidth;
		
		var squaresize = 660 / gridwidth;
    
    
    
        for (var i = 0; i < makegrid; i++) {
        $('<div />', {
            'class' : 'squarestyle', 
            "width": squaresize + "px",
		    "height": squaresize + "px"
        }).appendTo('.container');
        };



	$(".reset").on("click", function(){
		$(".squarestyle").remove();

		var gridwidth = prompt("Please choose a width for the grid");
    	var makegrid = gridwidth * gridwidth;
		
		var squaresize = 660 / gridwidth;
    
    
    
        for (var i = 0; i < makegrid; i++) {
        $('<div />', {
            'class' : 'squarestyle', 
            "width": squaresize + "px",
		    "height": squaresize + "px"
        }).appendTo('.container');
        };

        $(".squarestyle").mouseover(function(){
		$(this).css("background", "#000");
	});
		
	});

	$(".squarestyle").mouseover(function(){
		$(this).css("background", "#000");
	});


});






/*

var button = document.getElementById("theButton"),
value =  button.form.valueId.value;
button.onclick = function() {
    foo(value);
}


function makegridwidth(hwidth) {
	create the html = <div class="first square"></div> + 
	create the html = <div class="square"></div> x height - 1

	return

}

function makefullgrid(makegridwidth, height) {

	create the html  = makegridwidth x height
}


var gridwidth = 16;
var gridheight = 16;
var square = "<div class="square"></div>";
var firstsquare = "<div class="first square"></div>";

  for (i = 0; i < gridwidth; i++ ) {
        boxes.append('<div class="box1"></div>');
    }

 */