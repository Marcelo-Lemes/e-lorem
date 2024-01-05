import { IoMdHeartEmpty } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { FaShoppingCart, FaUser  } from "react-icons/fa";
import './header.css';

export default function Header() {
  return (
    <div id='header'>
      <div id="search-mask">
        <div id='search-box'>
          <div id='search-content'>
            <h2 style={{color: 'white', fontSize: '50px'}}>E-Lorem</h2>
            <div id='search-bar'>
              <select name="categorie" id="">
                <option value="Categoria1">Todas</option>
                <option value="Categoria2">Computadores</option>
                <option value="Categoria3">Celulares</option>
                <option value="Categoria4">Câmeras</option>
                <option value="Categoria4">Acessórios</option>
              </select>
              <input type="text" />
              <button>Search</button>
            </div>
            <div id='nav-icons-box'>
              <div className="nav-icons">
                <IoMdHeartEmpty />
                <p style={{fontSize: '15px', marginTop: '-5px'}}>Favoritos</p>
              </div>
              <div className="nav-icons">
                <FaShoppingCart />
                <p style={{fontSize: '15px', marginTop: '-5px'}}>Carrinho</p>
              </div>
              <div id="account-icon" className="nav-icons">
                <FaUser />
                <p style={{fontSize: '15px', marginTop: '-5px'}}>Minha Conta</p>
              </div>
              <div id="menu-icon" className="nav-icons">
                <IoMenu />
                <p style={{fontSize: '15px', marginTop: '-5px'}}>Menu</p>
              </div>
            </div>
          </div>
      </div>

        </div>
        <div id='nav-bar'>
            <ul>
                <li>Home</li>
                <li>Categoria 1</li>
                <li>Categoria 2</li>
                <li>Categoria 3</li>
                <li>Categoria 4</li>
            </ul>
        </div>
    </div>
  )
}
