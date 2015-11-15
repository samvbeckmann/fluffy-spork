/**
 * Created by Sam on 11/15/2015.
 *
 * Performs operations for emoji to english
 * in Fluffy-Spork.
 */

function translateToEnglish(str) {
    return constructEnglish(preprocess(str));
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
        result += getCommaWithChance(getPseudoRandom(str, 10));
    }
    result += getEnding(getPseudoRandom(str, 3));
    return result;
}

function getCommaWithChance(num){
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
    return ' ' + str.replace('_', ' ');
}

function getPseudoRandom(str, max) {
    var sum = 0;
    for (var i = 0; i < str.length; i++)
        sum += str.charCodeAt(i);
    return Math.pow(sum, 2) % max;
}
