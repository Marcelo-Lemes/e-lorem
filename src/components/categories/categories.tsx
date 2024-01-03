import { categorieItems } from '../../helpers/items';
import './categories.css';

export default function Categories() {
  return (
    <div id='categorie-box'>
      {
        categorieItems.map((categorie) => {
          return (
            <div id='categorie-card'>
                <div id='mask'>
                  <div id='categorie-card-text'>
                      <h3>{`Coleção de ${categorie.categoria}`}</h3>
                      <p>Compre agora</p>
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
