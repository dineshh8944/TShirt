import React, { useContext } from 'react'
import { ShopContext } from '../App'

const AddCartPants = ({PantsProduct}) => {
   const {Cart,setCart,CurrencyRupeeIcon,RemoveShoppingCartIcon,AddShoppingCartIcon} = useContext(ShopContext);
  
      function addToCart(){
          setCart([...Cart,PantsProduct])
      }
      function RemoveCart(){
          setCart(Cart.filter((p)=>p.id !== PantsProduct.id))
      }
  
  return (
    <>

<div key={PantsProduct.Id}>
    <div className="one_pice">
        <img src={PantsProduct.Image} alt="" />
        <ul>
            <li className='CartBtnLi'>{PantsProduct.Type} {Cart.includes(PantsProduct)?<button onClick={RemoveCart} className='RemoveCart'><RemoveShoppingCartIcon /></button>
                :
                <button onClick={addToCart} className='addToCart' ><AddShoppingCartIcon /></button>}</li>
            <li>Rs.{PantsProduct.Price}
               <span style={{ textDecoration:"line-through", color:"#000" }}> M.R.P : Rs.{PantsProduct.Mrp}</span>
                <span className='Off'> {PantsProduct.Offer}% OFF</span>
               </li>
        </ul>
    </div>      
    </div>

      {/* <div id="one_pice">
        <img src={PantsProduct.Image} alt="" />
        <ul>
            <li className="one"><h5>Name : {PantsProduct.Name}</h5></li>
            <li>Type :  {PantsProduct.Type}</li>
            <li>Price : <CurrencyRupeeIcon/>{PantsProduct.Price}</li>
            <li>{Cart.includes(PantsProduct)?<button onClick={RemoveCart} className='RemoveCart'><RemoveShoppingCartIcon/></button>
                :
                <button onClick={addToCart} className='addToCart'><AddShoppingCartIcon/></button>}</li>
        </ul>
      </div>  */}
    </>
  )
}

export default AddCartPants
