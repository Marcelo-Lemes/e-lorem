import { FaLocationDot, FaRegCreditCard  } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { FaPhoneAlt, FaCcVisa, FaCcPaypal, FaCcMastercard  } from "react-icons/fa";
import './footer.css';

export default function Footer() {
  return (
    <div id='footer'>
      <div id='footer-container'>
        <div className='footer-text-box' id='about-footer'>
          <h2>Sobre</h2>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores adipisci nesciunt, delectus ipsa corporis.</span>
          <p style={{marginTop: '15px'}}><FaLocationDot style={{color: 'red', fontSize: '12px', marginRight: '10px'}} /> 1234 Rua Lorem</p>
          <p><FaPhoneAlt style={{color: 'red', fontSize: '12px', marginRight: '10px'}} /> (012) 1234-5678</p>
          <p><GoMail style={{color: 'red', fontSize: '15px', marginRight: '10px', marginBottom: '-3px'}} /> email@email.com</p>
        </div>
        <div className='footer-text-box' id='categories-footer'>
          <h2>Categorias</h2>
          <p>Promoções</p>
          <p>Computadores</p>
          <p>Celures</p>
          <p>Câmeras</p>
          <p>Acessórios</p>
        </div>
        <div className='footer-text-box' id='information-footer'>
          <h2>Informações</h2>
          <p>Sobre nós</p>
          <p>Contate-nos</p>
          <p>Politica de Privacidade</p>
          <p>Encomenda e Devoluções</p>
          <p>Termos e Condições</p>
        </div>
        <div className='footer-text-box' id='service-footer'>
          <h2>Serviços</h2>
          <p>Minha Conta</p>
          <p>Ver Carrinho</p>
          <p>Lista de Desejos</p>
          <p>Acompanhar Pedido</p>
          <p>Ajuda</p>
        </div>
      </div>
      <div id='footer-end'>
        <div id="pay-icons-box">
          <FaCcVisa style={{padding: '0 5px'}}/>
          <FaRegCreditCard style={{padding: '0 5px'}}/>
          <FaCcPaypal style={{padding: '0 5px'}}/>
          <FaCcMastercard style={{padding: '0 5px'}}/>
        </div>
          <p>Copyright ©2024 All rights reserved.</p>
        </div>
    </div>
  )
}
