import './header.css';

export default function Header() {
  return (
    <div id='header'>
        <div id='search-box'>

          <h2 style={{color: 'white', paddingTop: '50px', fontSize: '50px'}}>E-Lorem</h2>
          <div id='search-bar'>
            <select name="categorie" id="">
              <option value="Categoria1">Categoria 1</option>
              <option value="Categoria2">Categoria 2</option>
              <option value="Categoria3">Categoria 3</option>
              <option value="Categoria4">Categoria 4</option>
            </select>
            <input type="text" />
            <button>Search</button>
          </div>
          <div id='nav-icons'></div>
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
