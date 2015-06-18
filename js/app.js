
$(document).ready(function(){

	 /*--- start a new game on click or page load---*/
  	//populates a global variable - for now...
  	//didn't grow up with globals so not keen on this
  	var globrand = new_game();
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


  	$(".new").click(function(){
    	globrand = new_game();
  	});

  	function new_game() {

  			//clear list items if populated from a previous game
  			$('#guessList li').remove();
  			$('#count').html("0");
  			var numtoguess = gen_rand();
  			return numtoguess;
  	};

  	// return a random number between 1 and 100
  	function gen_rand(){
  			return Math.floor((Math.random() * 100) + 1);
  	};


  	// use enter to retreive the guess
	$('#userGuess').keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#guessButton').click();
		};
	});	

	//guess button clicked retrieve value
	$('#guessButton').click(function(){
		var txtbox = document.getElementById('userGuess');
		var txtval = txtbox.value;
		event.preventDefault();

		if(!(txtval % 1) && (txtval>=1) && (txtval<=100)) {
			checknumber(txtval);
			document.getElementById('userGuess').value = '';
		} else {
			
			alert('Please enter a number between 1 and 100');
			document.getElementById('userGuess').value = '';
		};
	});

	// function to handle valid passed numbers and give feedback
	function checknumber(txtval){

		//add one to the number of guesses
		var attempts = $('#count').text();
		$('#count').html(+attempts+1);

		if (txtval<globrand){
			alert("too low");
		}
		else if (txtval>globrand){
			alert("too high");
		} 
		else{
			alert("Well done - press new game to begin again");
		};
		//add guesses to guessbox
		$('<li class="guessBox"></li>').appendTo('#guessList').html(txtval);
	};

});





