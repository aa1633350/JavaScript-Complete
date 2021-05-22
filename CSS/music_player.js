const play_button = document.getElementById('play');
const music = document.querySelector('audio');
const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
let curr_duration = document.getElementById('duration');
const max_duration = document.getElementById('max_duration');
let progress = document.getElementById('progress');
const progress_contaianer = document.getElementById('progress-bar-container');

let songIndex = 0;
let isPlaying = false;
const songsDB =[
    {
        name: "audio/music1.mp3",
        title : "Dareyaa",
        artist : "Manmarziyaan",
        image : "images_CSS/back1.jpg"
    },
    {
        name: "audio/music2.mp3",
        title : "Hareyya",
        artist : "Pyari Bindu",
        image : "images_CSS/back2.jpg"
    },
    {
        name: "audio/music3.mp3",
        title : "Iktara",
        artist : "Wake up Sid ",
        image : "images_CSS/back3.jpg"
    },
    {
        name: "audio/music4.mp3",
        title : "kabira",
        artist : "Yeh jawani hai dewaani",
        image : "images_CSS/back4.jpg"
    }
];


function playMusic(){
    isPlaying = true;
    music.play();
    play_button.classList.replace('fa-play-circle','fa-pause-circle');
    image.classList.add('anime');
}

function pauseMusic(){
    isPlaying = false;
    music.pause();
    play_button.classList.replace('fa-pause-circle','fa-play-circle');
    image.classList.remove('anime');
}

play_button.addEventListener('click',() =>{
    if(isPlaying){
        pauseMusic();
    }
    else{
        playMusic();
    }
});

const loadSongs = (songs) =>{

    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = songs.name;
    image.src = songs.image;
    
}
const nextSong = () =>{
    songIndex = (songIndex + 1) % songsDB.length;
    loadSongs(songsDB[songIndex]);
    playMusic();

};

const previousSong = () =>{
    songIndex = (songIndex - 1 + songsDB.length) % songsDB.length;
    loadSongs(songsDB[songIndex]);
    playMusic();
}

music.addEventListener('timeupdate',(event) =>{
    // console.log(event);
    const {currentTime , duration} = event.srcElement;
    

    let progress_time = ((currentTime/duration) * 100);
    progress.style.width = `${progress_time}%`;
    
    // current duration update
    let min_current = Math.floor(currentTime/60);
    let sec_current = Math.floor(currentTime - min_current * 60);
    if(sec_current<10){
        sec_current = `0${sec_current}`;
    }
    curr_duration.innerText = min_current + ":" + sec_current;
    //max duration update

    let min = Math.floor(duration/60);
    let sec = Math.floor(duration - min * 60);
    if(sec<10){
        sec = `0${sec}`;
    }
    if(duration){
        max_duration.innerText = min + ":" + sec;
    }

    

    
});
//moving the progress bar
progress_contaianer.addEventListener('click',(event)=>{
    // console.log(event);
    const {duration} = music; //offsetX tells kaha pr click kiya , clientWidth tells puri width kitni hai
    let move_progress = (event.offsetX / event.srcElement.clientWidth)*duration; // song ke total duration se mutiply kr ke kitne sec pr click kiya wo pata laga liya   
    // console.log(duration);
    // console.log(move_progress);
    music.currentTime = move_progress; // aur phir current time pr set kr diya
});
music.addEventListener('ended',nextSong);

next.addEventListener('click',nextSong);
previous.addEventListener('click',previousSong);
