function removeSpaces()
{
	/*
	var img = document.createElement("img");
	img.src = "http://www.emoji-cheat-sheet.com/graphics/emojis/" + document.getElementById('comment').text + ".png";

*/
		alert("http://www.emoji-cheat-sheet.com/graphics/emojis/" + document.getElementById('comment').value + ".png")

	var img = document.createElement("img");

	var wee = "http://www.emoji-cheat-sheet.com/graphics/emojis/smile.png";

	$('#output').prepend('<img id="img" src=wee />')

}