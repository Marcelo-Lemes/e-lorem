import { categorieItems } from '../../helpers/items';
import { HiArrowRightCircle } from "react-icons/hi2";
import './categories.css';

export default function Categories() {
  return (
    <div id='categorie-box'>
      {
        categorieItems.map((categorie, i) => {
          return (
            <div id='categorie-card' key={i}>
                <div id='mask'>
                  <div id='categorie-card-text'>
                      <h3 id='categorie-name'>{categorie.categoria}</h3>
                      <p  style={{textAlign:'left', margin: '15px 0px 15px px'}}>Compre agora <HiArrowRightCircle style={{fontSize: '20px', marginBottom: '-5px'}} /></p>
                  </div>
                </div>
                <div id='categorie-image-box'>
                  <img id='categorie-card-img' src={categorie.img} alt={`Imagem de ${categorie.categoria}`}/>
                </div>
            </div> 
          )
        })
      }
    </div>
  )
}
