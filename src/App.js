import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/pages/Home/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';
import Header from './components/pages/Shared/Header/Header';
import Footer from './components/pages/Shared/Footer/Footer';
import AllProducts from './components/pages/Home/AllProducts/AllProducts';
import ProductsDetails from './components/pages/Home/ProductsDetails/ProductsDetails';
import AuthProvider from './components/context/AuthProvider';
import Login from './components/pages/Login/Login/Login';
import PrivateRoute from './components/pages/Login/PrivateRoute/PrivateRoute';
import Cart from './components/pages/Cart/Cart';
import About from './components/pages/About/About';
import Checkout from './components/pages/Home/Checkout/Checkout';

function App() {
  
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/products">
              <AllProducts></AllProducts>
            </Route>
            <Route path="/cart">
              <Cart></Cart>
            </Route>
            <Route path="/checkout">
              <Checkout></Checkout>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/product/:productId">
              <ProductsDetails></ProductsDetails>
            </PrivateRoute>
            <Route path="/login">        
                <Login></Login>
              </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
