import { CiHeart } from "react-icons/ci";
import { LuArrowRightLeft } from "react-icons/lu";
import { FaRegEye, FaShoppingCart } from "react-icons/fa";
import PropTypes from 'prop-types';
import './card.css';

export default function Card({image = '', name= 'Nome do produto', price = 999, i = 0}) {
  return (
            <div id='item-card-box' key={i + 1}>
                <div id='item-card' >
                  <img id='product-image' src={image} alt={name} />
                  <div id='card-text-box'>
                    <p>Categoria</p>
                    <h2 className='product-name'>{name}</h2>
                    <p className='card-price'>R$ {price.toFixed(2)}</p>
                  </div>
                  <div id='card-icons-box'>
                    <div className='icon-box'>
                      <CiHeart className='card-icons' style={{ padding: '10px', margin: '5px'}} />
                    </div>
                    <div className='icon-box'>
                      <LuArrowRightLeft className='card-icons' style={{ padding: '10px', margin: '5px'}} />
                    </div>
                    <div className='icon-box'>
                      <FaRegEye className='card-icons' style={{ padding: '10px', margin: '5px'}} />
                    </div>
                  </div>
                </div>
                  <div id='hidden-cart-box'>
                    
                    <button><FaShoppingCart id='button-icon'/><p>+ CARRINHO</p></button>
                  </div>
              </div>
  )
}
Card.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    i: PropTypes.number.isRequired,
}