
function playSounds(soundArray)
{			
    var sounds =[];
    if(soundArray.length>0){
        soundArray.forEach((soundArray) => {
            sounds.push(new Audio(soundArray))
        });
    }
    playNextSounds(sounds);			
}

const playNextSounds = (sounds) => {
    if(sounds.length > 0){
        const audio = new Audio();
        audio.src = sounds[0].src;
        audio.currentTime = 0;
        audio.play();
        sounds.shift();
        audio.addEventListener('ended', function(){
            return playNextSounds(sounds);
        })
    } 
}