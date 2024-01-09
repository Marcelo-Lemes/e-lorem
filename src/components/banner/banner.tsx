import { useMemo, useState } from 'react';
import './banner.css';

export default function Banner() {
  const [state, setState] = useState({
    day: 6,
    hour: 23,
    min: 59,
    sec: 59,
  })
  let secs : number = 59;
  let mins : number = 59;
  let hours : number = 23;
  let days : number = 6;

  useMemo(() => {
    setInterval(timer,1000)
  },[])

  function timer() : void {
    if(hours === 0 && mins === 0 && secs === 0) {
      hours = 23;
      days--;
    }
    if(mins === 0 && secs === 0 ) {
      mins = 60;
      hours--;
    }
    if(secs != 0) {
      secs--;
    } else {
      mins--;
      secs = 60;
    }

    setState({
      ...state,
      sec: secs,
      min: mins,
      hour: hours,
      day: days,
    })
  }


  return (
    <div id='banner-container'>
      <div id='banner-box'>
        <img id='banner-img-left' className='banner-img' src="pc.png" alt="" />
        <div id='banner-center-box'>
          <div id='dot-box'>
            <span className="dot">
              <h3>{state.day}</h3>
              <p>Dias</p>
            </span>
            <span className="dot">
              <h3>{state.hour}</h3>
              <p>Horas</p>
            </span>
            <span className="dot">
              <h3>{state.min}</h3>
              <p>Mins</p>
            </span>
            <span className="dot">
              <h3>{state.sec}</h3>
              <p>Secs</p>
            </span>
          </div>
          <div id='banner-text-box'>
            <h1>Promoção da Semana</h1>
            <h2>Nova Coleção com 50% de desconto.</h2>
          <button>Compre Agora</button>
          </div>
        </div>
        <img id='banner-img-right' className='banner-img' src="pc.png" alt="" />
      </div>
    </div>
  )
}
