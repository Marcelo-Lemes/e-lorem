import './banner.css';

export default function Banner() {
  return (
    <div id='banner-container'>
      <div id='banner-box'>
        <img id='banner-img-left' className='banner-img' src="pc.png" alt="" />
        <div id='banner-center-box'>
          <div id='dot-box'>
            <span className="dot">
              <h3>03</h3>
              <p>Dias</p>
            </span>
            <span className="dot">
              <h3>05</h3>
              <p>Horas</p>
            </span>
            <span className="dot">
              <h3>57</h3>
              <p>Mins</p>
            </span>
            <span className="dot">
              <h3>60</h3>
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
