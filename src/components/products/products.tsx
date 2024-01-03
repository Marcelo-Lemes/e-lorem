import { TbArrowLeft } from 'react-icons/tb';
import { TbArrowRight } from 'react-icons/tb';
import { useRef } from 'react';
import { newProducts } from '../../helpers/items';
import './products.css';

export default function Products() {
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
              <h2>Produtos Novos</h2>
          </div>
          <ul id='categorie-list'>
            <li>Categoria 1</li>
            <li>Categoria 2</li>
            <li>Categoria 3</li>
            <li>Categoria 4</li>
          </ul>
        </div>
        <div className='itens'>
      <div id='itens-container' ref={carrousel}>
        {newProducts.map((product, i) => {
            return (
              <div id='item-card' key={i + 1}>
                <img id='product-image' src={product.img} alt={product.name} />
                <div id='card-text-box'>
                  <p>Categoria</p>
                  <h2 className='product-name'>{product.name}</h2>
                  <p id='card-price'>{product.price}</p>
                </div>
                <div id='card-icons'>

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
