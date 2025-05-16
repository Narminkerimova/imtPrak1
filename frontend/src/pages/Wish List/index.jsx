import { useContext } from "react"
import { MainContext } from "../../context/MainProvider"

function WishList() {
  const {wish,removeWish,totalWish,addWish} = useContext(MainContext)
  if(wish.length===0){
    <p>Sizin favorilerde hecne yoxdur</p>
  }
  return (
       <div className="container">
      <h1>Total:{totalWish()}</h1>
      {
        wish.map((item)=>(<>
        <div className="card" key={item._id}>
          <div className="card_image">
            <img src={item.image} alt="image" />
          </div>
          <div className="card_title">
            <div className="card_name">{item.name}</div>
            <div className="card_price">{item.price}</div>
          </div>
          <div className="card_buttons">
            <button onClick={() => addWish(item)}>+</button>
            <div>Count:{item.count}</div>
            <button onClick={() => decreaseElement(item)}>-</button>
            <button onClick={() => removeWish(item._id)}>Remove</button>
          </div>
        </div>
      </>

      ))
      }
    </div>
          
  )
}

export default WishList