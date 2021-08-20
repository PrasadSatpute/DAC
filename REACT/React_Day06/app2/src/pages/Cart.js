import { useDispatch, useSelector } from 'react-redux'
import { removeFromCartAction } from '../actions/cartActions'

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems)
  const dispatch = useDispatch()

  const removeFromCart = (product) => {
    dispatch(removeFromCartAction(product))
  }

  return (
    <div>
      <h1>My Cart</h1>

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
          {cartItems.map((product) => {
            return (
              <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    onClick={() => {
                      removeFromCart(product)
                    }}>
                    Remove from Cart
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

export default Cart
