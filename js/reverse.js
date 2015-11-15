/**
 * Created by Sam on 11/15/2015.
 *
 * Performs operations for emoji to english
 * in Fluffy-Spork.
 */

function translateToEnglish() {
    var str = document.getElementById('emoji-in').value;
    if (str.length == 0)
        $('#eng-out').val('');
    else
        $('#eng-out').val(constructEnglish(preprocess(str), str));

    setTimeout(translateToEnglish, 500);
}

function preprocess(str) {
    str = str.replace(/ /g, '');
    str = str.substring(1, str.length - 1);
    return str.split('::');
}

function constructEnglish(emojiList, str) {
    var result = getBeginning(getPseudoRandom(str, 3));
    for (var i = 0; i < emojiList.length; i++) {
        result += englishFormat(emojiList[i]);
        if (i < emojiList.length - 2) {
            result += getCommaWithChance(getPseudoRandom(emojiList[i], 10));
        }
    }

    result = result.replace(new RegExp(",? exclamation", "g"), "!").replace(new RegExp(",? question", "g"), "?").replace(new RegExp(",? interrobang", "g"), "!?");
    if (result.charAt(result.length - 1) != "!" && result.charAt(result.length - 1) != "?") {
        result += getEnding(getPseudoRandom(str, 3));
    }
    return result;
}

function getCommaWithChance(num) {
    if (num == 0)
        return ',';
    else
        return '';
}

function getBeginning(number) {
    switch (number) {
        case 0:
            return 'A';
        case 1:
            return 'The';
        case 2:
            return 'Some';
    }
}

function getEnding(number) {
    if (number == 0)
        return '.';
    else
        return '!';
}

function englishFormat(str) {
    return ' ' + str.replace(/_/g, ' ');
}

function getPseudoRandom(str, max) {
    var sum = 0;
    for (var i = 0; i < str.length; i++)
        sum += str.charCodeAt(i);
    return Math.pow(sum, 2) % max;
}

function removeSpaces2() {


    var darr = translate(document.getElementById('comment').value, 0);


    var listOfThangs = darr.split(",", darr.length - 1);

    var src = document.getElementById("wow");
    src.innerHTML = '';

    for (var x = 0; x < listOfThangs.length - 1; x++) {
        var wee = "http://www.emoji-cheat-sheet.com/graphics/emojis/" + listOfThangs[x] + ".png";
        var img = document.createElement("img");
        img.src = wee;
        img.height = "25";
        img.width = "25";


        src.appendChild(img);

    }

    setTimeout(removeSpaces2, 500);

}
