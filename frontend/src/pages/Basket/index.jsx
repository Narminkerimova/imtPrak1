import { useContext } from "react"
import "./style.css"
import { MainContext } from "../../context/MainProvider"

function Basket() {
  const { basket, addBasket, decreaseElement, removeBasket, totalBasket } = useContext(MainContext)
  if (basket.length === 0) {
    return <p>Hele hecne yoxdur</p>
  }
  return (
    <div className="container">
      <h1>Total:{() => totalBasket(basket).toFixed(2)}</h1>
      {
        basket.map((item)=>(<>
        <div className="card" key={item._id}>
          <div className="card_image">
            <img src={item.image} alt="image" />
          </div>
          <div className="card_title">
            <div className="card_name">{item.name}</div>
            <div className="card_price">{item.price}</div>
          </div>
          <div className="card_buttons">
            <button onClick={() => addBasket(item)}>+</button>
            <div>Count:{item.count}</div>
            <button onClick={() => decreaseElement(item)}>-</button>
            <button onClick={() => removeBasket(item)}>Remove</button>
          </div>
        </div>
      </>

      ))
      }
    </div>
  )
}

export default Basket