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
		
    	var makegrid = gridwidth * gridwidth;
		
		var squaresize = 660 / gridwidth;
		var gridwidth = prompt("Please choose a width for the grid");
     	
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



