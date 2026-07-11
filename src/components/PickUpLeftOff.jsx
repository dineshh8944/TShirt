import React, { useContext } from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import '/css/PickUpLeftOff.css'
import { ShopContext } from '../App';
import { Link } from 'react-router-dom';
const PickUpLeftOff = ({RupeeIcon,PickProduct}) => {
    const {setPickId,Cart,setCart,RemoveShoppingCartIcon,AddShoppingCartIcon} = useContext(ShopContext);


    function addToCart(){
      setCart([...Cart,PickProduct])
    
  }
  function RemoveCart(){
      setCart(Cart.filter((p)=>p.Id !== PickProduct.Id))

  }

  return (
    <>
    <div key={PickProduct.Id}>
    <div className="one_pice">
        <Link to='/PickUpView' onClick={()=>setPickId(PickProduct.Id)}>
        <img src={PickProduct.Image} alt="" />
        </Link>
        <ul>
            <li className='CartBtnLi'>{PickProduct.Type} {Cart.includes(PickProduct)?<button onClick={RemoveCart} className='RemoveCart'><RemoveShoppingCartIcon /></button>
                :
                <button onClick={addToCart} className='addToCart' ><AddShoppingCartIcon /></button>}</li>
            <li>Rs.{PickProduct.Price}
               {/* <span style={{ textDecoration:"line-through", color:"#000" }}> M.R.P : Rs.{PickProduct.Mrp}</span>
                <span className='Off'> {PickProduct.Offer}% OFF</span> */}
                <span className='Off'> {PickProduct.Offer}</span>
               </li>
        </ul>
    </div>      
    </div>
    </>
  )
}

export default PickUpLeftOff
