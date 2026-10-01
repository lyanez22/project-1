const songs = [
    {
        season: "winter",
        audio: "music/winter-song.mp3",
        background: ".winter-background",
        litzy: ".winter-litzy",
        songImage: ".los-prisoneros",
        text: ".winter-song"
    },
    {
        season: "spring",
        audio: "music/spring-song.mp3",
        background: ".spring-background",
        litzy: ".spring-litzy",
        songImage: ".munca",
        text: ".spring-song"
    },
    {
        season: "summer",
        audio: "music/summer-song.mp3",
        background: ".summer-background",
        litzy: ".summer-litzy",
        songImage: ".seals-crofts",
        text: ".summer-song"
    },
    {
        season: "fall",
        audio: "music/fall-song.mp3",
        background: ".fall-background",
        litzy: ".fall-litzy",
        songImage: ".lana-del-rey",
        text: ".fall-song"
    }
];

let currentSong = 0;

const audio = new Audio();
audio.addEventListener("error", () => {
    console.log("Audio error code:", audio.error.code, audio.error.message);
    console.log("Tried to load:", audio.src);
});

const playButton = document.querySelector(".play-button");
const pauseButton = document.querySelector(".pause-button");
const stopButton = document.querySelector(".stop-button");

function loadSong(index) {
    const song = songs[index];

    audio.src = song.audio;
    audio.load();

    // Hide everything
    document.querySelectorAll(".background-assets img").forEach((image) => {
        image.style.opacity = "0";
    });

    document.querySelectorAll(".litzy-assets img").forEach((image) => {
        image.style.opacity = "0";
    });

    document.querySelectorAll(".mp3-player-assets img").forEach((image) => {
        image.style.opacity = "0";
    });

    document.querySelectorAll(".storyline p").forEach((text) => {
        text.style.opacity = "0";
    });

    // Show winter season first
    document.querySelector(song.background).style.opacity = "1";
    document.querySelector(song.litzy).style.opacity = "1";
    document.querySelector(song.songImage).style.opacity = "1";
    document.querySelector(song.text).style.opacity = "1";

    playButton.style.display = "block";
    pauseButton.style.display = "none";
}

loadSong(currentSong);

audio.addEventListener("play", () => {
    playButton.style.display = "none";
    pauseButton.style.display = "block";
});

audio.addEventListener("pause", () => {
    pauseButton.style.display = "none";
    playButton.style.display = "block";
});

audio.addEventListener("ended", () => {
    playButton.style.display = "block";
    pauseButton.style.display = "none";
});

playButton.addEventListener("click", () => {
    console.log("CLICKED PLAY");
    console.log("CURRENT SONG:", currentSong);
    console.log("AUDIO SRC:", audio.src);

    audio.play().catch((error) => {
        console.log("PLAY ERROR:", error);
    });
});

stopButton.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
});

document.querySelector(".forward-button").addEventListener("click", () => {
    if (currentSong < songs.length - 1) {
        audio.pause();
        currentSong++;
        loadSong(currentSong);
    }
});

document.querySelector(".back-button").addEventListener("click", () => {
    if (currentSong > 0) {
        audio.pause();
        currentSong--;
        loadSong(currentSong);
    }
});