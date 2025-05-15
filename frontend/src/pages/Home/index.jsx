import { useContext } from "react"
import "./style.css"
import { MainContext } from "../../context/MainProvider"
function Home() {
  const {prod,addBasket} = useContext(MainContext)
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
              <button>Favorile</button>
              <button onClick={()=>addBasket(item)}>Basket</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Home