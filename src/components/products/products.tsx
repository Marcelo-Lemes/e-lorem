import { TbArrowLeft, TbArrowRight} from 'react-icons/tb';
import { CiHeart } from "react-icons/ci";
import { LuArrowRightLeft } from "react-icons/lu";
import { FaRegEye, FaShoppingCart } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';
import { newProducts, computadores, product, celulares, cameras, acessorios } from '../../helpers/items';
import './products.css';

export default function Products() {
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
    const card : HTMLElement | null = document.getElementById('item-card');
    const cardBox : HTMLElement | null = document.getElementById('itens-container');
    const test =  cardBox?.lastChild
    const test2 =  cardBox?.firstChild
    if (carrousel.current && card && test && test2) {
      carrousel.current.scrollLeft -= (card?.offsetWidth + 30);
      // setMargin(margin -= (card?.offsetWidth + 30))
      // cardBox.insertBefore(test, test2)
    }
    
  }

  const handleRightClick = () : void => {
    const card : HTMLElement | null = document.getElementById('item-card');
    const cardBox : HTMLElement | null = document.getElementById('itens-container');
    console.log(categorie);
    
    const test =  cardBox?.firstChild
    
    if (carrousel.current && card && test && cardBox) {
      carrousel.current.scrollLeft += (card.offsetWidth + 32);
      // setMargin(carrousel.current.scrollLeft += (card.offsetWidth + 32))
      // cardBox.appendChild(test)
    }
    
  }

  useEffect(() => {
    test()
  }, [categorie])

  return (
    <div id='products-box'>
        <div id='product-text-box'>
          <div>
              <h2>Produtos Novos</h2>
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
              
              <div id='item-card-box' key={i + 1}>
                <div id='item-card' >
                  <img id='product-image' src={product.img} alt={product.name} />
                  <div id='card-text-box'>
                    <p>Categoria</p>
                    <h2 className='product-name'>{product.name}</h2>
                    <p className='card-price'>R$ {product.price.toFixed(2)}</p>
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
