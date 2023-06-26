"use strict";
//normal enum, values are 0, 1, 2, ...
var SoundMode;
(function (SoundMode) {
    SoundMode[SoundMode["stereo"] = 0] = "stereo";
    SoundMode[SoundMode["mono"] = 1] = "mono";
    SoundMode[SoundMode["dolby"] = 2] = "dolby";
    SoundMode[SoundMode["dts"] = 3] = "dts";
})(SoundMode || (SoundMode = {}));
const sound = SoundMode.dolby;
console.log(sound);
//const x:number = SoundMode.dolby;
//console.log(x);
//enum with values
var GameDifficulty;
(function (GameDifficulty) {
    GameDifficulty[GameDifficulty["Easy"] = 10] = "Easy";
    GameDifficulty[GameDifficulty["Medium"] = 20] = "Medium";
    GameDifficulty[GameDifficulty["Hard"] = 30] = "Hard";
})(GameDifficulty || (GameDifficulty = {}));
const select = GameDifficulty.Easy;
console.log(select);
//enum with values
var Language;
(function (Language) {
    Language["EN"] = "English";
    Language["TH"] = "Thai";
    Language["JP"] = "Japanese";
})(Language || (Language = {}));
const lang = Language.JP;
console.log(lang);
