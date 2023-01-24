import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";
import FilterAvailable from "./components/FilterAvailable";
import FilterType from "./components/FilterType";
import SortPrice from "./components/SortPrice";
import ToggleCart from "./components/ToggleCart";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [availabilty, setAvailabilty] = useState("all")
  const [sort, setSort] = useState(false)
  const [tsort, setTSort] = useState("asc")
  const [type, setType] = useState("all")
  const [isAll, setAll] = useState(true)

  //const [cartstring, setString] = usetState("")
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */


  function updateCart(item) {
  // setPrice(price + number);
    setCart([...cart, item]);
    setPrice(price + parseFloat(item.price))
  }

  function removeCart(item){
    const temp = [...cart]
    const index = temp.indexOf(item)
    if (index !== -1){
      temp.splice(index, 1)
      setCart(temp)
      setPrice(price - parseFloat(item.price))
    }
  }

  function availableChange(availablevalue){
    setAvailabilty(availablevalue)
  }
  function typeChange(typevalue){
    //console.log(availabilty)
    setType(typevalue)
  }

  function sortChange(sort){
    if (sort === "asc" || sort === "des"){
      setSort(true)
      setTSort(sort)
    } else {
      setSort(false)
    }
  }

  function toggleChange(toggle){
    if (toggle === "all"){
      setAll(true)
    }
    else{
      setAll(false)
    }
  }





  useEffect(() => {
    console.log(availabilty);
    console.log(type)
    console.log(sort)
  }, [availabilty, type, sort, isAll])

  const filteredlist = bakeryData.filter((product)=> {
    if (type === "drink"){
      return product.type === "drink";
    } else if (type === "pastry"){
      return product.type === "pastry";
    } else {
      return product;
    }
  }).filter((product)=> {
    if (availabilty === "available"){
      return product.isAvailable === true;
    } else if (availabilty === "unavailable"){
      return product.isAvailable === false;
    } else {
      return product;
    }
  })


    if (sort){
      if (tsort === "asc"){
        filteredlist.sort((a,b) => parseFloat(a.price) < parseFloat(b.price) ? 1 : -1)
      } else {
       filteredlist.sort((a,b) => parseFloat(a.price) > parseFloat(b.price) ? 1 : -1)
      }
    }


  return (

    <div className="App">

      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <h3>Availablity</h3>
      <FilterAvailable availableSelected={availableChange}></FilterAvailable>
      <h3>Type</h3>
      <FilterType typeSelected ={typeChange}> </FilterType>
      <h3>Sort</h3>
      <SortPrice sortselected={sortChange} ></SortPrice>
      <h3>See Cart</h3>
      <ToggleCart toggleselected={toggleChange}></ToggleCart>
      <div>


      {filteredlist.map((item, index) => ( // TODO: map bakeryData to BakeryItem components

        <div>
          {isAll ? <h2>All Items</h2>
            : null }
          {isAll ? <BakeryItem item={item}/>
        : null }
          {isAll ? <button onClick={() => updateCart(item)}>
              Add to Cart
            </button>
            : null }
          {isAll ?
            <button onClick={() => removeCart(item)}> Remove From Cart </button>
          : null }
        </div>
      ))}


      <div>
        <h2>Cart</h2>
          <div>
          {cart.map((item, index) => (
            <p>
              <BakeryItem item={item}></BakeryItem>
              <button onClick={() => removeCart(item)}> Remove From Cart </button>
            </p>
          ))}
          </div>
          <p>Final Price {price}</p>

      </div>
      </div>
    </div>
  );
}




export default App;
