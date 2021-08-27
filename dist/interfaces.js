"use strict";
var tlou = {
    title: "The last of Us",
    description: "The best game in the world",
    genre: "Action",
    getSimilars: function (title) {
        console.log("Similar games to " + title + ": Uncharted, A Plague Tale, Metro");
    }
};
console.log(tlou.genre);
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}
var leftbehind = {
    title: "The last of Us - Left Behind",
    description: "You play as Ellie before the original game",
    genre: "Action",
    platform: ["PS4"],
    originalGame: tlou,
    newContent: ["3 hour story", "new characters"],
};
var CreatGame = /** @class */ (function () {
    function CreatGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return CreatGame;
}());
