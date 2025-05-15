import {Link } from "react-router";
import { MainContext } from "../../context/MainProvider";
import { useContext } from "react";
function Header() {
  const {basket} = useContext(MainContext)
  return (
    <nav>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/adminadd">Admin Add</Link>
          </li>
          <li>
            <Link to="/basket">Basket</Link> {basket.length}
          </li>
          <li>
            <Link to="/wishlist">Wish List</Link>
          </li>
        </ul>
    </nav>
  )
}

export default Header