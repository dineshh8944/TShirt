import React, { useContext, useRef } from 'react'
import { ShopContext } from '../App'


const AddCartTshirt = ({TshirtProduct,tableAll}) => {
    const {Cart,setCart,CurrencyRupeeIcon,RemoveShoppingCartIcon,AddShoppingCartIcon} = useContext(ShopContext);
    

    function addToCart(){
        setCart([...Cart,TshirtProduct])
    }
    function RemoveCart(){
   
        setCart(Cart.filter((p)=>p.id !== TshirtProduct.id))

    }

  return (
    <>



<div key={TshirtProduct.Id}>
    <div className="one_pice">
        <img src={TshirtProduct.Image} alt="" />
        <ul>
            <li className='CartBtnLi'>{TshirtProduct.Type} {Cart.includes(TshirtProduct)?<button onClick={RemoveCart} className='RemoveCart'><RemoveShoppingCartIcon /></button>
                :
                <button onClick={addToCart} className='addToCart' ><AddShoppingCartIcon /></button>}</li>
            <li>Rs.{TshirtProduct.Price}
               {/* <span style={{ textDecoration:"line-through", color:"#000" }}> M.R.P : Rs.{TshirtProduct.Mrp}</span> */}
                {/* <span className='Off'> {TshirtProduct.Offer}% OFF</span> */}
                 <span className='Off'> {TshirtProduct.Offer}</span>
               </li>
        </ul>
    </div>      
    </div>


      {/* <div id="one_pice">
        <img src={TshirtProduct.Image} alt="" />
        <ul>
            <li className="one"><h5>Name : {TshirtProduct.Name}</h5></li>
            <li>Type :  {TshirtProduct.Type}</li>
            <li>Price : <CurrencyRupeeIcon/>{TshirtProduct.Price}</li>
            <li>{Cart.includes(TshirtProduct)?<button onClick={RemoveCart} className='RemoveCart'><RemoveShoppingCartIcon/></button>
                :
                <button onClick={addToCart} className='addToCart'><AddShoppingCartIcon/></button>}</li>
        </ul>
      </div>  */}
    </>
  )
}

export default AddCartTshirt
