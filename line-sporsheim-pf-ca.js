//Question 1
var outOfStock = true;
if (outOfStock === true) {
    console.log("Out of stock");
} else {
    console.log("In stock");
}

//Question 2
var i = 15;
for (i; i <= 25; i++) {
    console.log(i);
}


//Question 3
var games = [
    {
        title: "Grand Theft Auto",
        rating: 4.48,
    },
    {
        title: "Portal 2",
        rating: 3.5,
    },
    {
        title: "Team Fortress",
        rating: null,
    },
    {
        title: "The Witcher",
        rating: 3.0,
    },
    {
        title: "The Elder Scrolls",
        rating: 2.9,
    },
];

var gameContainer = document.querySelector("ul");

for (var i = 0; i < games.length; i++) {
    gameContainer.innerHTML += "<li>" + games[i].title + " - " + games[i].rating + "</li>";

}

// I tried using an if statement here to only show the ratings above 3.5 but then nothing showed anymore. How do I only show the ones above 3.5?


//Question 4
function whatIDontLike(stringValue) {
    var typeOfValue = typeof stringValue;

    if (typeOfValue !== "string") {
        return "Please send a string"
    } else {
        console.log("I don't like ");
    }
    return stringValue;
}
var result = whatIDontLike("spiders");
console.log(result);


//Question 5
function twoNumbers(number1, number2) {
    var convertNumber1 = parseFloat(number1);
    var convertNumber2 = parseFloat(number2);

    if (isNaN(convertNumber1) || isNaN(convertNumber2)) {
        return "Invalid argument(s)";
    }

    return convertNumber1 - convertNumber2;

}

var idSubtraction = document.querySelector("div id");
var sum = twoNumbers(15, 10);
//idSubtraction.innerHTML = sum;


//Question 6
var buttonPage = document.querySelector(".page");
var title = document.querySelector(".title");
var body = document.querySelector("body");
var heading = document.querySelector("h1");


function changes() {
    body.style.backgroundColor = "yellow";
    document.title = "Updated title";
    heading.style.color = "green";

}

buttonPage.onclick = changes;

//I don't know how to do the last two changes


//Question 7
var buttonPrice = document.querySelector(".price");
var toys = [
    {
        name: "Lego",
        price: 15.6,
    },
    {
        name: "Master of the Universe",
        price: "28.3",
    },
    {
        name: "Barbie",
        price: null,
    },
    {
        name: "Mr Potato Head",
        price: 89.99,
    },
];


function whenButtonClicked() {

}


// I'm lost on this one