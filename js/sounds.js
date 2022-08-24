export  function Sound() {
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    
    const natureAudio = new Audio("./sounds/natureza.mp3")
    const rainAudio = new Audio("./sounds/rain.mp3")
    const urbanAudio = new Audio("./sounds/City.mp3")
    const fireAudio = new Audio("./sounds/Fogo.mp3")
    

natureAudio.loop = true
rainAudio.loop =true
urbanAudio.loop =true
fireAudio.loop =true


function setVolume(value,valor){
natureAudio.volume = value

}

function Nature(){

    if (natureAudio.paused ){
        natureAudio.play()   
    } else {
        natureAudio.pause()
    }
    rainAudio.pause()
    urbanAudio.pause()
    fireAudio.pause()

}

function Rain(){
    if (rainAudio.paused ){
        rainAudio.play()
    } else {
        rainAudio.pause()
    }
    urbanAudio.pause()
    fireAudio.pause()
    natureAudio.pause()
}

function Urban (){
    if (urbanAudio.paused ){
        urbanAudio.play()
    } else {
        urbanAudio.pause()
    }
    rainAudio.pause()
    fireAudio.pause()
    natureAudio.pause()
}

function Fire(){
    if (fireAudio.paused ){
        fireAudio.play()
    } else {
        fireAudio.pause()
    }
    rainAudio.pause()
    urbanAudio.pause()
    natureAudio.pause()
}

function pressButton(){
    buttonPressAudio.play()
}

function timeEnd(){
    kitchenTimer.play()
}

    return {
        pressButton,
        timeEnd,
        Nature,
        Rain,
        Urban,
        Fire,
        setVolume
    }
}



