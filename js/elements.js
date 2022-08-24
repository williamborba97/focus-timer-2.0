const buttonMode_dark = document.querySelector('.mode_dark')
const buttonMode_light = document.querySelector('.mode_light')

const buttonPlay_dark = document.querySelector('.play_dark')
const buttonPlay_light = document.querySelector('.play_light')

const buttonPause_dark = document.querySelector('.pause_dark')
const buttonPause_light = document.querySelector('.pause_light')

const buttonStop_dark = document.querySelector('.stop_dark')
const buttonStop_light = document.querySelector('.stop_light')

const buttonSubtract_dark = document.querySelector('.subtract_dark')
const buttonSubtract_light = document.querySelector('.subtract_light')

const buttonAdd_dark = document.querySelector('.add_dark')
const buttonAdd_light = document.querySelector('.add_light')

const cardsArray= document.querySelectorAll('.cards')

const nature_dark = document.getElementById('nature_dark')
const nature_light = document.getElementById('nature_light')
const fire_Dark = document.getElementById('fire_dark')
const fire_ligh = document.getElementById('fire_light')
const rain_dark = document.getElementById('rain_dark')
const rain_ligh = document.getElementById('rain_light')
const urban_dark = document.getElementById('urban_dark')
const urban_ligh = document.getElementById('urban_light') 
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
const inputrange = document.querySelector('.inputrange')

export {
    buttonMode_dark,
    buttonMode_light,
    buttonPlay_dark,
    buttonPlay_light,
    buttonPause_dark,
    buttonPause_light,
    buttonStop_dark,
    buttonStop_light,
    buttonSubtract_dark,
    buttonSubtract_light,
    buttonAdd_dark,
    buttonAdd_light,
    cardsArray,
    nature_dark,
    nature_light,
    fire_Dark,
    fire_ligh,
    rain_dark,
    rain_ligh,
    urban_dark,
    urban_ligh,
    minutesDisplay,
    secondsDisplay,
    minutes,
    inputrange
}