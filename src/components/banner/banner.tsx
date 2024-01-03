import './banner.css';

export default function Banner() {
  return (
    <div id='banner-container'>
      <div id='banner-box'>
        <img id='banner-img-left' className='banner-img' src="pc.png" alt="" />
        <div></div>
        <div id='banner-text-box'>
          <h1>Lorem 1</h1>
          <h2>Lorem 2</h2>
        <button>Compre Agora</button>
        </div>
        <img id='banner-img-right' className='banner-img' src="pc.png" alt="" />
      </div>
    </div>
  )
}
