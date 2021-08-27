"use strict";
var tlou = {
    title: "The last of Us",
    descriptiom: "The best game in the world",
    genre: "Action",
    platform: ['PS3', 'PS4'],
    getSimilars: function (title) {
        console.log("Similar games to " + title + ": Uncharted, A Plague Tale, Metro");
    }
};
console.log(tlou.title);
tlou.getSimilars(tlou.title);
