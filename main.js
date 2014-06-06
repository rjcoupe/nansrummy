function parseCards(str) {
	var cards = str.split('');
	var total = 0;
	for (i=0; i<cards.length; i++) {
		card = cards[i];
		console.log(card);
		switch (card) {
			case 'T':
			case 'J':
			case 'Q':
			case 'K':
				total += 10;
				break;
			case 'A':
				total += 11;
				break;
			default:
				total += Number(card);
		}
	}
	return total;
}