import Footer from './components/Footer';
import Home from './components/home/Home';
import Navbar from './components/Navbar'
import {Routes,Route} from "react-router-dom";
import Category from './components/category/Category';
import Location from './components/location/Location';
import Faq from './components/faq/Faq';
import ScrollToTop from './utils/ScrollToTop'
import Cart from './components/productsCart/Cart';
import Register from './components/sign/register/Register';
import Login from './components/sign/login/Login';
function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path='/faq' element={<Faq />}></Route>
          <Route path='/location' element={<Location />}></Route>
          <Route path='/category' element={<Category />}></Route>
          <Route path='/products' element={<Cart />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </ScrollToTop>
      <Footer />
    </>

  );
}

export default App;
