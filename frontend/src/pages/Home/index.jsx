import { useContext } from "react"
import "./style.css"
import { MainContext } from "../../context/MainProvider"
function Home() {
  const {prod,addBasket,removeBasket,checkIsBasket,addWish,checkIsWish} = useContext(MainContext)
  return (
    <div className="container">
      {
        prod.map((item)=>(
          <div className="card" key={item._id}>
            <div className="card_image">
              <img src={item.image} alt="image" />
            </div>
            <div className="card_title">
              <div className="card_name">{item.name}</div>
              <div className="card_price">{item.price}</div>
            </div>
            <div className="card_buttons">
              {
                checkIsWish(item) ? <button  onClick={()=>addWish(item)}>Favorilerden kaldir</button> : <button  onClick={()=>addWish(item)}>Favorile</button>
              }
              <button  onClick={()=>addWish(item)}>Favorile</button>
               {
              checkIsBasket(item) ? <button onClick={() => removeBasket(item._id)}>Remove Basket</button> : <button onClick={() => addBasket(item)}>Add Basket</button>
            }
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Home