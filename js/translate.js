var stopWords = [
    'able',
    'about',
    'across',
    'after',
    'all',
    'almost',
    'also',
    'among',
    'an',
    'and',
    'any',
    'are',
    'as',
    'at',
    'be',
    'because',
    'been',
    'but',
    'by',
    'can',
    'cannot',
    'could',
    'dear',
    'did',
    'do',
    'does',
    'either',
    'else',
    'ever',
    'every',
    'for',
    'get',
    'got',
    'had',
    'has',
    'have',
    'he',
    'her',
    'hers',
    'him',
    'his',
    'how',
    'however',
    'i',
    'if',
    'in',
    'into',
    'is',
    'its',
    'just',
    'least',
    'let',
    'like',
    'likely',
    'may',
    'me',
    'might',
    'most',
    'must',
    'my',
    'neither',
    'no',
    'nor',
    'not',
    'of',
    'off',
    'often',
    'only',
    'or',
    'other',
    'our',
    'own',
    'rather',
    'said',
    'say',
    'says',
    'she',
    'should',
    'since',
    'so',
    'some',
    'than',
    'that',
    'the',
    'their',
    'them',
    'then',
    'there',
    'these',
    'they',
    'this',
    'tis',
    'to',
    'too',
    'twas',
    'wants',
    'was',
    'we',
    'were',
    'what',
    'when',
    'where',
    'which',
    'while',
    'who',
    'whom',
    'why',
    'will',
    'with',
    'would',
    'yet',
    'you',
    'your'
];

var emoji = [
    "diamond shape with a dot inside",
    "notebook with decorative cover",
    "first quarter moon with face",
    "stuck out tongue closed eyes",
    "stuck out tongue winking eye",
    "negative squared cross mark",
    "last quarter moon with face",
    "chart with downwards trend",
    "white medium small square",
    "black medium small square",
    "twisted rightwards arrows",
    "leftwards arrow with hook",
    "eight pointed black star",
    "chart with upwards trend",
    "person with pouting face",
    "small red triangle down",
    "put litter in its place",
    "arrows counterclockwise",
    "triangular flag on post",
    "running shirt with sash",
    "information desk person",
    "two women holding hands",
    "heavy multiplication x",
    "heavy exclamation mark",
    "vertical traffic light",
    "sunrise over mountains",
    "hourglass flowing sand",
    "person with blond hair",
    "part alternation mark",
    "ballot box with check",
    "eight spoked asterisk",
    "fishing pole and fish",
    "two men holding hands",
    "disappointed relieved",
    "small orange diamond",
    "large orange diamond",
    "european post office",
    "flower playing cards",
    "mailbox with no mail",
    "closed lock with key",
    "waning crescent moon",
    "waxing crescent moon",
    "globe with meridians",
    "kissing smiling eyes",
    "white square button",
    "black square button",
    "white medium square",
    "black medium square",
    "heavy division sign",
    "ideograph advantage",
    "oncoming police car",
    "oncoming automobile",
    "waning gibbous moon",
    "waxing gibbous moon",
    "full moon with face",
    "busts in silhouette",
    "construction worker",
    "man with gua pi mao",
    "kissing closed eyes",
    "small red triangle",
    "small blue diamond",
    "large blue diamond",
    "white large square",
    "black square",
    "white small square",
    "black small square",
    "information source",
    "arrow heading down",
    "suspension railway",
    "mountain bicyclist",
    "telephone receiver",
    "first quarter moon",
    "new moon with face",
    "bust in silhouette",
    "large blue circle",
    "heavy dollar sign",
    "currency exchange",
    "children crossing",
    "non-potable water",
    "arrow double down",
    "arrow upper right",
    "arrow lower right",
    "bullettrain front",
    "articulated lorry",
    "mountain cableway",
    "statue of liberty",
    "convenience store",
    "house with garden",
    "mailbox with mail",
    "incoming envelope",
    "lock with ink pen",
    "last quarter moon",
    "couple with heart",
    "white check mark",
    "heavy check mark",
    "heavy minus sign",
    "six pointed star",
    "mobile phone off",
    "heart decoration",
    "no mobile phones",
    "passport control",
    "arrows clockwise",
    "left right arrow",
    "arrow right hook",
    "arrow heading up",
    "arrow down small",
    "arrow upper left",
    "arrow lower left",
    "bullettrain side",
    "mountain railway",
    "steam locomotive",
    "department store",
    "musical keyboard",
    "triangular ruler",
    "open file folder",
    "money with wings",
    "four leaf clover",
    "grey exclamation",
    "revolving hearts",
    "stuck out tongue",
    "heavy plus sign",
    "congratulations",
    "signal strength",
    "arrow double up",
    "performing arts",
    "izakaya lantern",
    "bridge at night",
    "european castle",
    "japanese castle",
    "closed umbrella",
    "high brightness",
    "dromedary camel",
    "thought balloon",
    "japanese goblin",
    "crying cat face",
    "man with turban",
    "person frowning",
    "bride with veil",
    "sparkling heart",
    "vibration mode",
    "no pedestrians",
    "arrow up small",
    "arrow backward",
    "checkered flag",
    "rotating light",
    "aerial tramway",
    "roller coaster",
    "carousel horse",
    "fork and knife",
    "tropical drink",
    "womans clothes",
    "rugby football",
    "straight ruler",
    "page with curl",
    "page facing up",
    "mailbox closed",
    "low brightness",
    "christmas tree",
    "jack o lantern",
    "school satchel",
    "earth americas",
    "deciduous tree",
    "evergreen tree",
    "cherry blossom",
    "hatching chick",
    "speech balloon",
    "heart eyes cat",
    "expressionless",
    "do not litter",
    "no entry sign",
    "potable water",
    "baggage claim",
    "arrow up down",
    "arrow forward",
    "round pushpin",
    "crossed flags",
    "traffic light",
    "oncoming taxi",
    "chocolate bar",
    "space invader",
    "musical score",
    "bookmark tabs",
    "electric plug",
    "confetti ball",
    "tanabata tree",
    "crescent moon",
    "sun with face",
    "water buffalo",
    "tropical fish",
    "hatched chick",
    "speak no evil",
    "japanese ogre",
    "grey question",
    "kissing heart",
    "white circle",
    "black circle",
    "radio button",
    "white flower",
    "left luggage",
    "fast forward",
    "capital abcd",
    "slot machine",
    "construction",
    "oncoming bus",
    "ferris wheel",
    "city sunrise",
    "sweet potato",
    "rice cracker",
    "fried shrimp",
    "meat on bone",
    "horse racing",
    "nut and bolt",
    "movie camera",
    "video camera",
    "crystal ball",
    "mortar board",
    "partly sunny",
    "earth africa",
    "hear no evil",
    "raising hand",
    "raised hands",
    "musical note",
    "broken heart",
    "purple heart",
    "yellow heart",
    "neutral face",
    "disappointed",
    "interrobang",
    "sagittarius",
    "no bicycles",
    "baby symbol",
    "arrow right",
    "circus tent",
    "railway car",
    "fire engine",
    "tokyo tower",
    "city sunset",
    "post office",
    "green apple",
    "poultry leg",
    "baby bottle",
    "black joker",
    "snowboarder",
    "orange book",
    "closed book",
    "file folder",
    "postal horn",
    "outbox tray",
    "credit card",
    "alarm clock",
    "loudspeaker",
    "floppy disk",
    "ear of rice",
    "fallen leaf",
    "dragon face",
    "monkey face",
    "hurtrealbad",
    "love letter",
    "see no evil",
    "pouting cat",
    "kissing cat",
    "older woman",
    "point right",
    "raised hand",
    "sweat drops",
    "exclamation",
    "green heart",
    "smiling imp",
    "sweat smile",
    "red circle",
    "curly loop",
    "registered",
    "wheelchair",
    "no smoking",
    "repeat one",
    "arrow left",
    "arrow down",
    "keycap ten",
    "hotsprings",
    "trolleybus",
    "light rail",
    "police car",
    "helicopter",
    "mount fuji",
    "love hotel",
    "strawberry",
    "watermelon",
    "shaved ice",
    "wine glass",
    "eyeglasses",
    "womans hat",
    "headphones",
    "microphone",
    "video game",
    "basketball",
    "microscope",
    "name badge",
    "green book",
    "card index",
    "inbox tray",
    "flashlight",
    "rice scene",
    "wind chime",
    "gift heart",
    "earth asia",
    "maple leaf",
    "paw prints",
    "baby chick",
    "panda face",
    "scream cat",
    "smiley cat",
    "couplekiss",
    "point up 2",
    "point left",
    "point down",
    "open hands",
    "thumbsdown",
    "two hearts",
    "heartpulse",
    "blue heart",
    "dizzy face",
    "sunglasses",
    "tired face",
    "astonished",
    "cold sweat",
    "confounded",
    "open mouth",
    "heart eyes",
    "wavy dash",
    "copyright",
    "clock1230",
    "clock1130",
    "clock1030",
    "ophiuchus",
    "capricorn",
    "ambulance",
    "speedboat",
    "pineapple",
    "tangerine",
    "honey pot",
    "ice cream",
    "rice ball",
    "fish cake",
    "spaghetti",
    "hamburger",
    "briefcase",
    "mans shoe",
    "high heel",
    "saxophone",
    "bicyclist",
    "newspaper",
    "telescope",
    "blue book",
    "black nib",
    "paperclip",
    "clipboard",
    "bar chart",
    "mag right",
    "satellite",
    "hourglass",
    "telephone",
    "fireworks",
    "milky way",
    "full moon",
    "palm tree",
    "sunflower",
    "crocodile",
    "racehorse",
    "snowflake",
    "trollface",
    "goberserk",
    "feelsgood",
    "guardsman",
    "smirk cat",
    "smile cat",
    "older man",
    "nail care",
    "facepunch",
    "collision",
    "heartbeat",
    "neckbeard",
    "persevere",
    "grimacing",
    "anguished",
    "satisfied",
    "bangbang",
    "clock930",
    "clock830",
    "clock730",
    "clock630",
    "clock530",
    "clock430",
    "clock330",
    "clock230",
    "clock130",
    "aquarius",
    "scorpius",
    "no entry",
    "underage",
    "restroom",
    "arrow up",
    "beginner",
    "fuelpump",
    "monorail",
    "blue car",
    "airplane",
    "sailboat",
    "fountain",
    "hospital",
    "eggplant",
    "cherries",
    "lollipop",
    "birthday",
    "icecream",
    "doughnut",
    "cocktail",
    "lipstick",
    "game die",
    "diamonds",
    "baseball",
    "football",
    "bookmark",
    "notebook",
    "scissors",
    "calendar",
    "envelope",
    "moneybag",
    "minidisc",
    "computer",
    "sparkler",
    "squirrel",
    "new moon",
    "seedling",
    "chestnut",
    "mushroom",
    "hibiscus",
    "blowfish",
    "honeybee",
    "elephant",
    "pig nose",
    "umbrella",
    "finnadie",
    "princess",
    "ok woman",
    "point up",
    "thumbsup",
    "question",
    "sparkles",
    "innocent",
    "no mouth",
    "unamused",
    "confused",
    "frowning",
    "sleeping",
    "grinning",
    "relieved",
    "laughing",
    "trident",
    "clock12",
    "clock11",
    "clock10",
    "recycle",
    "sparkle",
    "customs",
    "parking",
    "symbols",
    "busstop",
    "warning",
    "station",
    "minibus",
    "red car",
    "tractor",
    "rowboat",
    "rainbow",
    "sunrise",
    "factory",
    "wedding",
    "custard",
    "handbag",
    "necktie",
    "trumpet",
    "clapper",
    "mahjong",
    "swimmer",
    "bowling",
    "pencil2",
    "pushpin",
    "syringe",
    "smoking",
    "package",
    "bathtub",
    "postbox",
    "mailbox",
    "calling",
    "battery",
    "speaker",
    "balloon",
    "no bell",
    "octocat",
    "volcano",
    "blossom",
    "bouquet",
    "leopard",
    "rooster",
    "rabbit2",
    "dolphin",
    "octopus",
    "penguin",
    "chicken",
    "hamster",
    "cyclone",
    "snowman",
    "suspect",
    "godmode",
    "droplet",
    "joy cat",
    "haircut",
    "massage",
    "no good",
    "dancers",
    "running",
    "ok hand",
    "triumph",
    "fearful",
    "pensive",
    "worried",
    "kissing",
    "flushed",
    "relaxed",
    "shipit",
    "clock9",
    "clock8",
    "clock7",
    "clock6",
    "clock5",
    "clock4",
    "clock3",
    "clock2",
    "clock1",
    "pisces",
    "cancer",
    "gemini",
    "taurus",
    "secret",
    "accept",
    "womens",
    "cinema",
    "repeat",
    "rewind",
    "barber",
    "ticket",
    "train2",
    "rocket",
    "anchor",
    "church",
    "office",
    "school",
    "tomato",
    "banana",
    "grapes",
    "cookie",
    "coffee",
    "tophat",
    "ribbon",
    "bikini",
    "kimono",
    "tshirt",
    "sandal",
    "guitar",
    "pencil",
    "violin",
    "trophy",
    "hearts",
    "spades",
    "surfer",
    "tennis",
    "soccer",
    "ledger",
    "scroll",
    "e-mail",
    "dollar",
    "hammer",
    "wrench",
    "toilet",
    "shower",
    "unlock",
    "iphone",
    "camera",
    "bamboo",
    "cactus",
    "leaves",
    "poodle",
    "mouse2",
    "dragon",
    "tiger2",
    "whale2",
    "beetle",
    "turtle",
    "monkey",
    "rabbit",
    "tongue",
    "dancer",
    "family",
    "couple",
    "runner",
    "muscle",
    "hankey",
    "sleepy",
    "scream",
    "hushed",
    "smiley",
    "bowtie",
    "libra",
    "virgo",
    "aries",
    "chart",
    "metro",
    "u7981",
    "u7a7a",
    "u7533",
    "u7121",
    "u6e80",
    "u6709",
    "u6708",
    "u6307",
    "u55b6",
    "u5408",
    "u5272",
    "eight",
    "seven",
    "three",
    "moyai",
    "train",
    "truck",
    "stars",
    "japan",
    "hotel",
    "house",
    "melon",
    "peach",
    "lemon",
    "apple",
    "candy",
    "bread",
    "dango",
    "ramen",
    "sushi",
    "bento",
    "curry",
    "fries",
    "pizza",
    "beers",
    "purse",
    "pouch",
    "crown",
    "jeans",
    "dress",
    "shirt",
    "clubs",
    "8ball",
    "8ball",
    "books",
    "hocho",
    "pound",
    "email",
    "radio",
    "watch",
    "sound",
    "pager",
    "phone",
    "santa",
    "ghost",
    "flags",
    "dolls",
    "shell",
    "tulip",
    "whale",
    "snail",
    "snake",
    "sheep",
    "camel",
    "horse",
    "koala",
    "tiger",
    "mouse",
    "ocean",
    "foggy",
    "sunny",
    "rage4",
    "rage3",
    "rage2",
    "rage1",
    "skull",
    "angel",
    "woman",
    "metal",
    "punch",
    "notes",
    "anger",
    "dizzy",
    "star2",
    "cupid",
    "heart",
    "alien",
    "angry",
    "weary",
    "sweat",
    "smirk",
    "blush",
    "smile",
    "link",
    "soon",
    "back",
    "mens",
    "koko",
    "free",
    "cool",
    "abcd",
    "hash",
    "zero",
    "1234",
    "nine",
    "five",
    "four",
    "taxi",
    "bike",
    "tram",
    "boat",
    "ship",
    "tent",
    "bank",
    "corn",
    "pear",
    "cake",
    "oden",
    "stew",
    "rice",
    "beer",
    "sake",
    "boot",
    "shoe",
    "book",
    "memo",
    "dart",
    "ring",
    "golf",
    "date",
    "pill",
    "bomb",
    "door",
    "euro",
    "seat",
    "bath",
    "bulb",
    "lock",
    "loop",
    "mega",
    "mute",
    "tada",
    "bell",
    "gift",
    "herb",
    "rose",
    "cat2",
    "pig2",
    "dog2",
    "goat",
    "cow2",
    "fish",
    "bird",
    "boar",
    "bear",
    "frog",
    "wolf",
    "cloud",
    "nose",
    "eyes",
    "kiss",
    "lips",
    "feet",
    "baby",
    "girl",
    "clap",
    "pray",
    "hand",
    "wave",
    "fist",
    "shit",
    "poop",
    "fire",
    "dash",
    "boom",
    "star",
    "mask",
    "rage",
    "wink",
    "grin",
    "100",
    "end",
    "leo",
    "sos",
    "top",
    "new",
    "abc",
    "six",
    "two",
    "one",
    "atm",
    "bus",
    "car",
    "egg",
    "tea",
    "art",
    "gem",
    "ski",
    "gun",
    "yen",
    "key",
    "mag",
    "vhs",
    "fax",
    "dvd",
    "rat",
    "ram",
    "ant",
    "bug",
    "cow",
    "pig",
    "dog",
    "cat",
    "zap",
    "ear",
    "cop",
    "man",
    "boy",
    "bow",
    "zzz",
    "imp",
    "yum",
    "joy",
    "sob",
    "cry",
    "tm",
    "on",
    "o2",
    "ab",
    "vs",
    "id",
    "cl",
    "wc",
    "sa",
    "ng",
    "up",
    "ok",
    "de",
    "uk",
    "gb",
    "ru",
    "it",
    "es",
    "fr",
    "us",
    "cn",
    "kr",
    "jp",
    "tv",
    "cd",
    "ox",
    "fu",
    "-1",
    "+1",
    "plus1",
    "o",
    "x",
    "b",
    "a",
    "m",
    "v"
];

function recurseTranslate(str, type) {
    for (var j = 0; j < emoji.length; j++) {
        var place = str.indexOf(emoji[j]);
        if (place > -1) {
            return recurseTranslate(str.substring(0, findLastSpace(str, place)), type)
                + createFormattedEmoji(j, type)
                + recurseTranslate(str.substring(findNextSpace(str, place + emoji[j].length)), type);
        }
    }

    if (str.length > 0) {
        var words = str.split(' ');
        str = '';
        for (var i = 0; i < words.length; i++) {
            str += getRandomEmoji(words[i]);
        }
    }
    return str;

}

function createFormattedEmoji(emojiNum, type) {
    if (type == 0)
    {
        if (emojiNum == 870)
            emojiNum ++;
        return emoji[emojiNum].replace(/ /g, '_') + ',';
    }
    else
        return ':' + emoji[emojiNum] + ':';
}

function translate(str, type) {
    var result = recurseTranslate(removeStopwords(str.toLowerCase()).replace(new RegExp("\n", "g"), "  "), type);
    if (result.length == 0)
        result = getRandomEmoji(str, type);
    if (str.length == 0)
        result = "";

    return result;
}

function removeStopwords(str) {
    for (var i = 0; i < stopWords.length; i++) {
        str = str.replace(new RegExp("\\b" + stopWords[i] + "\\b", "g"), ' ');
    }
    return str.trim();
}

function findLastSpace(str, place) {
    if (str.charAt(place) == ' ' || place == 0)
        return place;
    else
        return findLastSpace(str, place - 1);
}

function findNextSpace(str, place) {
    if (place >= str.length - 1 || str.charAt(place) == ' ' || str.charAt(place) == '.')
        return place + 1;
    else
        return findNextSpace(str, place + 1);
}

function getRandomEmoji(word, type) {
    if (word == '')
        return '';
    var sum = 0;
    for (var i = 0; i < word.length; i++)
        sum += word.charCodeAt(i);
    return createFormattedEmoji(sum % emoji.length, type);
}

function getClipboardStr(str) {
    return translate(str, 1)
}

/* Test run code. TODO: Remove when working */
console.log(translate('one\ntwo\nthree\nfour', 0));

function removeSpaces()
{


    var darr = translate(document.getElementById('comment').value, 0)


    var listOfThangs = darr.split(",", darr.length - 1)

    var src = document.getElementById("wow")
    src.innerHTML = '';

    for(var x = 0; x < listOfThangs.length - 1; x++)
    {
        var wee = "http://www.emoji-cheat-sheet.com/graphics/emojis/" + listOfThangs[x] + ".png";
        var img = document.createElement("img");
        img.src = wee;
        img.height ="25";
        img.width = "25";


        src.appendChild(img);

    }

    setTimeout(removeSpaces, 500);

}

removeSpaces();
