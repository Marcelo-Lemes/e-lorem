import Header from './components/header/header'
import Categories from './components/categories/categories'
import Products from './components/products/products'
import Banner from './components/banner/banner'
import Popular from './components/popular/popular'
import Newsletter from './components/newsletter/newsletter'
import Footer from './components/footer/footer'
import './App.css'

function App() {

  return (
    <>
      <div>
        <Header />
        <Categories />
        <Products />
        <Banner />
        <Popular />
        <Newsletter />
        <Footer />
        
      </div>
    </>
  )
}

export default App
