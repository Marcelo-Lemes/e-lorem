import { IoMdHeartEmpty } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
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
                <option value="Categoria1">Todas Categorias</option>
                <option value="Categoria2">Computadores</option>
                <option value="Categoria3">Celulares</option>
                <option value="Categoria4">Câmeras</option>
                <option value="Categoria4">Acessórios</option>
              </select>
              <input type="text" placeholder="Pesquise aqui" />
              <button>Pesquisar</button>
            </div>
            <div id='nav-icons-box'>
              <div className="nav-icons">
                <IoMdHeartEmpty />
                <p style={{fontSize: '14px', marginTop: '-1px'}}>Favoritos</p>
              </div>
              <div className="nav-icons">
                <FaShoppingCart />
                <p style={{fontSize: '14px', marginTop: '-1px'}}>Carrinho</p>
              </div>
              <div id="account-icon" className="nav-icons">
                <FaUser />
                <p style={{fontSize: '14px', marginTop: '-1px'}}>Minha Conta</p>
              </div>
              <div id="menu-icon" className="nav-icons">
                <GiHamburgerMenu />
                <p style={{fontSize: '14px', marginTop: '-1px'}}>Menu</p>
              </div>
            </div>
          </div>
      </div>

        </div>
        <div id='nav-bar'>
            <ul>
                <li id="home">Home</li>
                <li>Computadores</li>
                <li>Celulares</li>
                <li>Câmeras</li>
                <li>Acessórios</li>
            </ul>
        </div>
    </div>
  )
}
