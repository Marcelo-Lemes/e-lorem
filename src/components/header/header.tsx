import { IoMdHeartEmpty } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart, FaUser, FaSearch   } from "react-icons/fa";
import { useState } from "react";
import './header.css';

export default function Header() {
  const [menu, setMenu] = useState(false)
  return (
    <header id='header'>
      <div id="search-mask">
        <div id='search-box'>
          <div id='search-content'>
            {/* <h2 style={{color: 'white', fontSize: '50px'}}>E-Lorem</h2> */}
            <img id="logo" src="e-lorem-2a.png" alt="logotipo do site" />
            <div id='search-bar'>
              <select name="categorie" aria-label="categorie types">
                <option value="Categoria1">Todas Categorias</option>
                <option value="Categoria2">Computadores</option>
                <option value="Categoria3">Celulares</option>
                <option value="Categoria4">Câmeras</option>
                <option value="Categoria4">Acessórios</option>
              </select>
              <input type="text" placeholder="Pesquise aqui" />
              <button aria-label="search button"><FaSearch id='search-icon' /><p>Pesquisar</p></button>
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
              <div id="menu-icon" className="nav-icons"  onClick={() => setMenu(true)}>
                <GiHamburgerMenu/>
                <p style={{fontSize: '14px', marginTop: '-1px'}}>Menu</p>
              </div>
            </div>
          </div>
      </div>

        </div>
        <nav id='nav-bar'>
            <ul>
                <li id="home">Home</li>
                <li>Computadores</li>
                <li>Celulares</li>
                <li>Câmeras</li>
                <li>Acessórios</li>
            </ul>
        </nav>
        <div id="responsive-menu-box" style={menu ? {marginLeft: '0'} : undefined}>
          <div id="responsive-menu">
          <nav id='resp-nav-bar' style={{display: 'block'}}>
            <ul style={{display: 'flex', flexDirection: 'column'}}>
                <li id="resp-home">Home</li>
                <li>Minha Conta</li>
                <li>Computadores</li>
                <li>Celulares</li>
                <li>Câmeras</li>
                <li>Acessórios</li>
            </ul>
        </nav>
          </div>
          <div id="menu-mask" onClick={() => setMenu(false)}/>
        </div>
    </header>
  )
}
