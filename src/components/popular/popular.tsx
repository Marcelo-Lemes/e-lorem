import { TbArrowLeft } from 'react-icons/tb';
import { TbArrowRight } from 'react-icons/tb';
import { useEffect, useRef, useState } from 'react';
import { acessorios, cameras, celulares, computadores, newProducts, product } from '../../helpers/items';
import '../products/products.css';
import Card from '../card/card';

export default function Popular() {
  const [categorie, setCategorie] = useState('')
  const [list, setList] = useState(Array<product>)
  const carrousel = useRef<HTMLDivElement>(null);

  const test = () => {
    if(carrousel.current) {
      carrousel.current.scrollLeft = 0
    }
    switch (categorie) {
      case 'Computadores':
        setList(computadores)
        break;
      case 'Celulares':
        setList(celulares)
        break;
      case 'Câmeras':
        setList(cameras)
        break;
      case 'Acessórios':
        setList(acessorios)
        break;
      default:
        setList(newProducts)
        break;  
    }
  }

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

  useEffect(() => {
    test()
  }, [categorie])

  return (
    <div id='products-box'>
        <div id='product-text-box'>
          <div>
              <h2>Mais Vendidos</h2>
          </div>
          <ul id='categorie-list'>
            <li onClick={() => categorie != 'Computadores' ? setCategorie('Computadores') : setCategorie('') } className={categorie === 'Computadores' ? 'active' : undefined}>Computadores</li>
            <li  onClick={() =>categorie != 'Celulares' ? setCategorie('Celulares') : setCategorie('')} className={categorie === 'Celulares' ? 'active' : undefined}>Celulares</li>
            <li  onClick={() =>categorie != 'Câmeras' ? setCategorie('Câmeras') : setCategorie('')} className={categorie === 'Câmeras' ? 'active' : undefined}>Câmeras</li>
            <li  onClick={() => categorie != 'Acessórios' ? setCategorie('Acessórios') : setCategorie('')} className={categorie === 'Acessórios' ? 'active' : undefined}>Acessórios</li>
          </ul>
        </div>
        <div className='itens'>
      <div id='itens-container' ref={carrousel}>
        {list
          .map((product, i) => {
            return (
              <Card image={product.img} name={product.name} price={product.price} i={i} />
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
