//normal enum, values are 0, 1, 2, ...
enum SoundMode {
    stereo,
    mono,
    dolby,
    dts
}
const sound:SoundMode = SoundMode.dolby;
console.log(sound);
//const x:number = SoundMode.dolby;
//console.log(x);

//enum with values
enum GameDifficulty  {
    Easy=10,
    Medium=20,
    Hard=30
}
const select:GameDifficulty = GameDifficulty.Easy;
console.log(select);

//enum with values
enum Language {
    EN="English",
    TH="Thai",
    JP="Japanese"
}
const lang:Language = Language.JP;
console.log(lang);