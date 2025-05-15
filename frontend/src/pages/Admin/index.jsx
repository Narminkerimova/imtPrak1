import { useContext, useState } from "react"
import { MainContext } from "../../context/MainProvider"
import "./style.css"

function Admin() {
  <title>Admin Page</title>
  const {prod,deleteElement,url} = useContext(MainContext)
  const [search, setSearch] = useState("")
  const [sortProp, setSortProp] = useState({
    property:"",
    order:true
  })
  return (
    <>
    <input type="text" onChange={(e)=>setSearch(e.target.value)}/>
    <div className="buttons">
      <button onClick={()=>setSortProp({property:"price",order:true})}>Increase</button>
      <button onClick={()=>setSortProp({property:"price",order:false})}>Decrease</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Image</th>
          <th>Button</th>
        </tr>
      </thead>
      <tbody>
        {prod
        .toSorted((a,b)=>{
          if (sortProp.order) {
           return (a[sortProp.property] > b[sortProp.property]) ? 1 : ((b[sortProp.property] > a[sortProp.property]) ? -1 : 0)
          }
          else{
           return (a[sortProp.property] < b[sortProp.property]) ? 1 : ((b[sortProp.property] < a[sortProp.property]) ? -1 : 0)
          }
        })
        .filter((item)=>(item.name.toLowerCase().includes(search.toLowerCase())))
        .map((prod,i)=>(
          <tr key={prod._id}>
            <td>{prod.name}</td>
            <td>{prod.price}</td>
            <td>
              <img src={prod.image} alt="image"/></td>
            <td>
              <button onClick={()=>{deleteElement(url,prod._id); console.log(prod._id)}}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}

export default Admin