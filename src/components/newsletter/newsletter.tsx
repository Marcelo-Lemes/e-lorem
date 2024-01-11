import { IoMdMail } from "react-icons/io";
import { GoMail } from "react-icons/go";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import './newsletter.css';

export default function Newsletter() {
  return (
    <div id='newsletter-container'>
        <div id='newsletter-text-box'>
          <p>Se inscreva no nosso</p><h2>Newsletter</h2>
        </div>
        <div id='email-input-box'>
          <div id="email-icon">
            <GoMail />
          </div>
          <input type="text" placeholder="Digite seu email"/>
          <button><IoMdMail style={{marginBottom: '-3px', marginRight: '5px'}} />Inscreva-se</button>
        </div>
        <div id='social-icons-box'>
          <button className="icon-button" aria-label='facebook button'>
            <FaFacebookF />
          </button>
          <button className="icon-button" aria-label='twitter button'>
            <FaTwitter />
          </button>
          <button className="icon-button" aria-label='instagram button'>
            <FaInstagram />
          </button>
        </div>
    </div>
  )
}
