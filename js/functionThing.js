function removeSpaces()
{
	/*
		var img = document.createElement("img");
		img.src = "http://www.emoji-cheat-sheet.com/graphics/emojis/" + document.getElementById('comment').text + ".png";
	*/

	var wee = "http://www.emoji-cheat-sheet.com/graphics/emojis/" + document.getElementById('comment').value + ".png";


	var img = document.createElement("img");
	img.src = wee

	var src = document.getElementById("wooloo")

	src.appendChild(img)
	alert(wee)

}