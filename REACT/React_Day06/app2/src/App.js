import './App.css'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Products from './pages/Products'
import Cart from './pages/Cart'
import { useSelector } from 'react-redux'
import SideBar from './pages/Sidebar'
import Component1 from './pages/Component1'

function App() {
  // listen on the global store's cartItems
  const cartItems = useSelector((state) => state.cartItems)

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h1>E-commerce app</h1>
        </div>
        <h5 className="col cart-items">Cart Items: {cartItems.length}</h5>
      </div>

      <div className="row">
        <div className="col-3">
          <SideBar />
          <Component1 />
        </div>

        <div className="col">
          <BrowserRouter>
            <ul>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>

            <Switch>
              <Route path="/products" component={Products} />
              <Route path="/cart" component={Cart} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  )
}

export default App
