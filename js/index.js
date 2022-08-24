
import {
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
        
} from './elements.js'

import {Sound} from './sounds.js'

const sound = Sound()

//FUNCTIONS

 let timerTimeOut


  function countdown() {
    timerTimeOut = setTimeout(function () {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        let isFinished =minutes <= 0 && seconds <= 0

        updateTimerDisplay(minutes, 0)

        if (isFinished) {
        
          updateTimerDisplay()
          Sound().timeEnd()
          return
        }

        if (seconds <= 0) {
          seconds = 60
          --minutes
        }

        updateTimerDisplay(minutes, --seconds )

        countdown()
      }, 1000)
    }

  function updateTimerDisplay(newMinutes, seconds) {
      newMinutes = newMinutes === undefined ? minutes : newMinutes
      seconds = seconds === undefined  ?  0 : seconds
      minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
      secondsDisplay.textContent = String(seconds).padStart(2, '0')
    
    }

  function pause (){
      clearTimeout(timerTimeOut)
  }

  function stop (){
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function add(){ 
    minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5
    
    }

  function subtract (){
    minutesDisplay.textContent = minutesDisplay.textContent - 5
    
    
  }


  
    


      //EVENTS

  //modes

  buttonMode_dark.addEventListener('click' ,function(){
      buttonMode_dark.classList.add('hide')
      buttonMode_light.classList.remove('hide')

      buttonPlay_dark.classList.add('hide')
      buttonPlay_light.classList.remove('hide')

      buttonPause_dark.classList.add('hide')
      buttonPause_light.classList.remove('hide') 

      buttonStop_dark.classList.add('hide')
      buttonStop_light.classList.remove('hide')

      buttonAdd_dark.classList.add('hide')
      buttonAdd_light.classList.remove('hide')

      buttonSubtract_dark.classList.add('hide')
      buttonSubtract_light.classList.remove('hide')

      nature_dark.classList.add('hide')
      nature_light.classList.remove('hide')
      rain_dark.classList.add('hide') 
      rain_ligh.classList.remove('hide')
      urban_dark.classList.add('hide')
      urban_ligh.classList.remove('hide')  
      fire_Dark.classList.add('hide')
      fire_ligh.classList.remove('hide')

      document.querySelector('#mode').style.backgroundColor = 'white'; 
      document.body.style.color = '#323238'

      sound.pressButton()
  })

  buttonMode_light.addEventListener('click' ,function(){
      buttonMode_dark.classList.remove('hide')
      buttonMode_light.classList.add('hide')

      buttonPlay_dark.classList.remove('hide')
      buttonPlay_light.classList.add('hide')

      buttonPause_dark.classList.remove('hide')
      buttonPause_light.classList.add('hide')

      buttonStop_dark.classList.remove('hide')
      buttonStop_light.classList.add('hide')

      buttonAdd_dark.classList.remove('hide')
      buttonAdd_light.classList.add('hide')

      buttonSubtract_dark.classList.remove('hide')
      buttonSubtract_light.classList.add('hide')

      nature_dark.classList.remove('hide')
      nature_light.classList.add('hide')
      rain_dark.classList.remove('hide') 
      rain_ligh.classList.add('hide')
      urban_dark.classList.remove('hide')
      urban_ligh.classList.add('hide') 
      fire_Dark.classList.remove('hide')
      fire_ligh.classList.add('hide')
      
      document.querySelector('#mode').style.backgroundColor = '#121214'; 
      document.body.style.color = 'white'  

      sound.pressButton()
  })



  //controls
  buttonPlay_dark.addEventListener('click',function(){
      countdown()
      sound.pressButton()

  })

  buttonPlay_light.addEventListener('click',function(){
      countdown()
      sound.pressButton()
  })


  buttonPause_dark.addEventListener('click',function(){
      pause()
      sound.pressButton()
  })

  buttonPause_light.addEventListener('click',function(){
      pause()
      sound.pressButton()
  })

  buttonStop_dark.addEventListener('click',function(){
    stop()
    sound.pressButton()
  })
  buttonStop_light.addEventListener('click',function(){
    stop()
    sound.pressButton()
  })

  buttonAdd_dark.addEventListener('click',function(){
    add()
    sound.pressButton()
  })
  buttonAdd_light.addEventListener('click',function(){
    add()
    sound.pressButton()
  })

  buttonSubtract_dark.addEventListener('click',function(){
    subtract()
    sound.pressButton()
  })
  buttonSubtract_light.addEventListener('click',function(){
    subtract()
    sound.pressButton()
  })

//BUTTON SOUNDS
nature_dark.addEventListener('click', function(){
  sound.Nature()
  document.querySelector('#nature_dark').style.backgroundColor = '#0A3442';
  document.querySelector('#nature_light').style.backgroundColor = '#66dbff';


  //REPLACE
  document.querySelector('#rain_dark').style.backgroundColor = '#29292E';
  document.querySelector('#rain_light').style.backgroundColor = '#E1E1E6';

  document.querySelector('#urban_dark').style.backgroundColor = '#29292E';
  document.querySelector('#urban_light').style.backgroundColor = '#E1E1E6';

  document.querySelector('#fire_light').style.backgroundColor = '#E1E1E6';
  document.querySelector('#fire_dark').style.backgroundColor = '#29292E';

})
nature_light.addEventListener('click', function(){
  sound.Nature()
  document.querySelector('#nature_light').style.backgroundColor = '#66dbff';
  document.querySelector('#nature_dark').style.backgroundColor = '#0A3442';

   //REPLACE
  document.querySelector('#rain_dark').style.backgroundColor = '#29292E';
  document.querySelector('#rain_light').style.backgroundColor = '#E1E1E6';

  document.querySelector('#urban_dark').style.backgroundColor = '#29292E';
  document.querySelector('#urban_light').style.backgroundColor = '#E1E1E6';

  document.querySelector('#fire_light').style.backgroundColor = '#E1E1E6';
  document.querySelector('#fire_dark').style.backgroundColor = '#29292E';
  
})

rain_dark.addEventListener('click', function(){
  sound.Rain()
  document.querySelector('#rain_dark').style.backgroundColor = '#0A3442';
  document.querySelector('#rain_light').style.backgroundColor = '#66dbff';


  //REPLACE
 document.querySelector('#nature_light').style.backgroundColor = '#E1E1E6';
  document.querySelector('#nature_dark').style.backgroundColor = '#29292E';

  document.querySelector('#urban_dark').style.backgroundColor = '#29292E';
  document.querySelector('#urban_light').style.backgroundColor = '#E1E1E6';

  document.querySelector('#fire_light').style.backgroundColor = '#E1E1E6';
  document.querySelector('#fire_dark').style.backgroundColor = '#29292E';


})
rain_ligh.addEventListener('click', function(){
  sound.Rain()
  document.querySelector('#rain_light').style.backgroundColor = '#66dbff';
  document.querySelector('#rain_dark').style.backgroundColor = '#0A3442';

   //REPLACE
  document.querySelector('#nature_light').style.backgroundColor = '#E1E1E6';
  document.querySelector('#nature_dark').style.backgroundColor = '#29292E';

  document.querySelector('#urban_dark').style.backgroundColor = '#29292E';
  document.querySelector('#urban_light').style.backgroundColor = '#E1E1E6';

  document.querySelector('#fire_light').style.backgroundColor = '#E1E1E6';
  document.querySelector('#fire_dark').style.backgroundColor = '#29292E';
})

urban_dark.addEventListener('click', function(){
  sound.Urban()
  document.querySelector('#urban_dark').style.backgroundColor = '#0A3442';
  document.querySelector('#urban_light').style.backgroundColor = '#66dbff';


 //REPLACE
  document.querySelector('#nature_light').style.backgroundColor = '#E1E1E6';
  document.querySelector('#nature_dark').style.backgroundColor = '#29292E';

  document.querySelector('#rain_light').style.backgroundColor = '#E1E1E6';
  document.querySelector('#rain_dark').style.backgroundColor = '#29292E';


  document.querySelector('#fire_light').style.backgroundColor = '#E1E1E6';
  document.querySelector('#fire_dark').style.backgroundColor = '#29292E';
})
urban_ligh.addEventListener('click', function(){
  sound.Urban()
  document.querySelector('#urban_light').style.backgroundColor = '#66dbff';
  document.querySelector('#urban_dark').style.backgroundColor = '#0A3442';

   //REPLACE
  document.querySelector('#nature_light').style.backgroundColor = '#E1E1E6';
  document.querySelector('#nature_dark').style.backgroundColor = '#29292E';

  document.querySelector('#rain_light').style.backgroundColor = '#E1E1E6';
  document.querySelector('#rain_dark').style.backgroundColor = '#29292E';


  document.querySelector('#fire_light').style.backgroundColor = '#E1E1E6';
  document.querySelector('#fire_dark').style.backgroundColor = '#29292E';
})

fire_Dark.addEventListener('click', function(){
  sound.Fire()
  document.querySelector('#fire_dark').style.backgroundColor = '#0A3442';
  document.querySelector('#fire_light').style.backgroundColor = '#66dbff';

  document.querySelector('#nature_light').style.backgroundColor = '#E1E1E6';
  document.querySelector('#nature_dark').style.backgroundColor = '#29292E';

   //REPLACE
  document.querySelector('#rain_dark').style.backgroundColor = '#29292E';
  document.querySelector('#rain_light').style.backgroundColor = '#E1E1E6';

  document.querySelector('#urban_dark').style.backgroundColor = '#29292E';
  document.querySelector('#urban_light').style.backgroundColor = '#E1E1E6';
})
fire_ligh.addEventListener('click', function(){
  sound.Fire()
  document.querySelector('#fire_light').style.backgroundColor = '#66dbff';
  document.querySelector('#fire_dark').style.backgroundColor = '#0A3442';

  //REPLACE
  document.querySelector('#nature_light').style.backgroundColor = '#E1E1E6';
  document.querySelector('#nature_dark').style.backgroundColor = '#29292E';

  document.querySelector('#rain_dark').style.backgroundColor = '#29292E';
  document.querySelector('#rain_light').style.backgroundColor = '#E1E1E6';

  document.querySelector('#urban_dark').style.backgroundColor = '#29292E';
  document.querySelector('#urban_light').style.backgroundColor = '#E1E1E6';
})

//VOLUME
inputrange.addEventListener('input', () => {
  sound.setVolume(inputrange.value)}
  )



