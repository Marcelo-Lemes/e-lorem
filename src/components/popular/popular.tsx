import { TbArrowLeft } from 'react-icons/tb';
import { TbArrowRight } from 'react-icons/tb';
import { useRef, useState } from 'react';
import { newProducts } from '../../helpers/items';
import '../products/products.css';
import { CiHeart } from 'react-icons/ci';
import { LuArrowRightLeft } from 'react-icons/lu';
import { FaRegEye, FaShoppingCart } from 'react-icons/fa';

export default function Popular() {
  const [categorie, setCategorie] = useState('')
  const carrousel = useRef<HTMLDivElement>(null);

  const handleLeftClick = () : void => {
    const card = document.getElementById('item-card')
    if (carrousel.current && card ) {
      carrousel.current.scrollLeft -= (card?.offsetWidth + 34);
    }
  }

  const handleRightClick = () : void => {
    const card = document.getElementById('item-card')
    if (carrousel.current && card) {
      carrousel.current.scrollLeft += (card.offsetWidth + 34);
    }

  }

  return (
    <div id='products-box'>
        <div id='product-text-box'>
          <div>
              <h2>Mais Vendidos</h2>
          </div>
          <ul id='categorie-list'>
            <li onClick={() => setCategorie('Computadores')} className={categorie === 'Computadores' ? 'active' : undefined}>Computadores</li>
              <li  onClick={() => setCategorie('Celulares')} className={categorie === 'Celulares' ? 'active' : undefined}>Celulares</li>
              <li  onClick={() => setCategorie('Câmeras')} className={categorie === 'Câmeras' ? 'active' : undefined}>Câmeras</li>
              <li  onClick={() => setCategorie('Acessórios')} className={categorie === 'Acessórios' ? 'active' : undefined}>Acessórios</li>
          </ul>
        </div>
        <div className='itens'>
      <div id='itens-container' ref={carrousel}>
        {newProducts.map((product, i) => {
            return (
              <div id='item-card-box' key={i + 1}>
                <div id='item-card' >
                  <img id='product-image' src={product.img} alt={product.name} />
                  <div id='card-text-box'>
                    <p>Categoria</p>
                    <h2 className='product-name'>{product.name}</h2>
                    <p className='card-price'>R${product.price.toFixed(2)}</p>
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
                    
                    <button><FaShoppingCart id='button-icon' />+ CARRINHO</button>
                  </div>
              </div>
            )
        })}
      </div>
        <div className='item-buttons'>
          <TbArrowLeft className='arrow-icons' onClick={() => handleLeftClick()}/>
          <TbArrowRight className='arrow-icons' onClick={() => handleRightClick()}/>
        </div>
    </div>
    </div>
  )
}
