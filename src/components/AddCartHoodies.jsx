import React, { useContext } from 'react'
import { ShopContext } from '../App'


const AddCartHoodies = ({HoodieProduct}) => {

    const {Cart,setCart,CurrencyRupeeIcon,RemoveShoppingCartIcon,AddShoppingCartIcon} = useContext(ShopContext);

    function addToCart(){
        setCart([...Cart,HoodieProduct])
    }
    function RemoveCart(){
        setCart(Cart.filter((p)=>p.id !== HoodieProduct.id))
    }

  return (
    <>

<div key={HoodieProduct.Id}>
    <div className="one_pice">
        <img src={HoodieProduct.Image} alt="" />
        <ul>
            <li className='CartBtnLi'>{HoodieProduct.Type} {Cart.includes(HoodieProduct)?<button onClick={RemoveCart} className='RemoveCart'><RemoveShoppingCartIcon /></button>
                :
                <button onClick={addToCart} className='addToCart' ><AddShoppingCartIcon /></button>}</li>
            <li>Rs.{HoodieProduct.Price}
               {/* <span style={{ textDecoration:"line-through", color:"#000" }}> M.R.P : Rs.{HoodieProduct.Mrp}</span> */}
                {/* <span className='Off'> {HoodieProduct.Offer}% OFF</span> */}
                <span className='Off'> {HoodieProduct.Offer}</span>
               </li>
        </ul>
    </div>      
    </div>

     {/* <div id="one_pice">
        <img src={HoodieProduct.Image} alt="" />
        <ul>
            <li className="one"><h5>Name : {HoodieProduct.Name}</h5></li>
            <li>Type :  {HoodieProduct.Type}</li>
            <li>Price : <CurrencyRupeeIcon/>{HoodieProduct.Price}</li>
            <li>{Cart.includes(HoodieProduct)?<button onClick={RemoveCart} className='RemoveCart'><RemoveShoppingCartIcon/></button>
                :
                <button onClick={addToCart} className='addToCart'><AddShoppingCartIcon/></button>}</li>
        </ul>
      </div>  */}
    </>
  )
}

export default AddCartHoodies
