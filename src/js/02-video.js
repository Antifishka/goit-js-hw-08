import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player')
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

onPageRefresh();

function onPlay(evt) {
    console.log("Началось видео")
    const pause = evt.seconds;
    console.log(pause);

    localStorage.setItem("videoplayer-current-time", pause);
};

function onPageRefresh() {
    const savedTime = localStorage.getItem("videoplayer-current-time");

    if (savedTime) {
        player.setCurrentTime(savedTime)
    }
};

