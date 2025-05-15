import { createContext, useEffect, useState } from "react";

export const MainContext = createContext();
function MainProvider({ children }) {
  const url = "http://localhost:3000/products/";
  const [prod, setProd] = useState([]);
  const [basket, setBasket] = useState([]);
  const [wish, setWish] = useState([]);

  async function getElement(url) {
    const res = await fetch(url);
    const data = await res.json();
    setProd(data);
  }

  async function deleteElement(url, id) {
    const res = await fetch(url + id, {
      method: "DELETE",
    });
    getElement(url);
  }

  async function postElement(url, body) {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
  }

  function addBasket(obj) {
    const addElement = basket.find((x) => x._id === obj._id);
    if (addElement) {
      addElement.count++;
      setBasket([...basket]);
    } else {
      setBasket([...basket, { ...obj, count: 1 }]);
    }
  }

  function removeBasket(obj) {
    basket.filter((x) => x._id !== obj._id);
    setBasket([...basket]);
  }

  function decreaseElement(obj) {
    const addElement = basket.find((x) => x._id === obj._id);
    if (addElement.count === 1) {
      return;
    } else {
      addElement.count--;
      setBasket([...basket]);
    }
  }

  function totalBasket(obj){
    return basket.reduce((total,initial)=>total+(initial.price*initial.count),0)
  }

  useEffect(() => {
    getElement(url);
  }, []);

  return (
    <MainContext.Provider
      value={{
        prod,
        deleteElement,
        url,
        postElement,
        basket,
        addBasket,
        decreaseElement,
        removeBasket,totalBasket
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;
