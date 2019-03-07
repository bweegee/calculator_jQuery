$(document).ready( function() {
	var playerScore = 0;
	var comScore = 0;
	var ties = 0;

	// listen for player choice and grab ID
	$('button').on('click', function() {
		game(this.id);
	});

	function game(id) {
		var playerChoice = id;
		var comChoice = generateComChoice();
		result(comChoice, playerChoice);
	}
	
	// generate computer choice
	function generateComChoice() {
		var options = [0, 1, 2];
		option = options[Math.floor(Math.random()*options.length)];
		return option;
	}

	//decide the winner
	function result(com, player) {
		console.log(com + " " + " " + player);
		if ((com + 1) % 3 == player)
			win();
		else if (player == com)
			tie();
		else
			lose();
	}

	function win() {
		$('#result')
			.html('<h1>You WIN</h2>')
			.css({
				'background': 'green',
				'color': 'white'
			})
		$('#player-score')
			.html(++playerScore)
	}
	
	function lose() {
		$('#result')
			.html('<h1>You LOSE</h2>')
			.css({
				'background': 'red',
				'color': 'white'
			})
		$('#com-score')
			.html(++comScore)
	}
	
	function tie() {
		$('#result')
			.html('<h1>TIE</h2>')
			.css({
				'background': '#768FB8',
				'color': 'white'
			})
		$('#ties')
			.html(++ties)
	}
});


