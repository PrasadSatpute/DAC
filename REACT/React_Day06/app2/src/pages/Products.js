import { useDispatch } from 'react-redux'
import { addToCartAction } from '../actions/cartActions'

const products = [
  { id: 1, title: 'product 1', price: 100 },
  { id: 2, title: 'product 2', price: 200 },
  { id: 3, title: 'product 3', price: 300 },
  { id: 4, title: 'product 4', price: 400 },
  { id: 5, title: 'product 5', price: 500 },
  { id: 6, title: 'product 6', price: 600 },
  { id: 7, title: 'product 7', price: 700 },
  { id: 8, title: 'product 8', price: 800 },
]

const Products = () => {
  // used to send action(s)
  const dispatch = useDispatch()

  const addToCart = (product) => {
    // call the API to add the product to the cart
    dispatch(addToCartAction(product))
  }

  return (
    <div>
      <h1>Products</h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>price</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    onClick={() => {
                      addToCart(product)
                    }}>
                    Add To Cart
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Products
