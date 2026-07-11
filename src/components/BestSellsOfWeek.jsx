import React, { useContext } from 'react'
import '/css/BestSellsOfWeek.css'
import { ShopContext } from '../App'
import { Link } from 'react-router-dom'


const BestSellsOfWeek = ({RupeeIcon,BestProduct}) => {
    const {setBestId,Cart,setCart,RemoveShoppingCartIcon,AddShoppingCartIcon} = useContext(ShopContext);

    function addToCart(){
      setCart([...Cart,BestProduct])
  }
  function RemoveCart(){
 
      setCart(Cart.filter((p)=>p.Id !== BestProduct.Id))

  }
  return (
    <>
<div key={BestProduct.Id}>
 <div className="one_pice">
         <Link to='/BestWeekView' onClick={()=>setBestId(BestProduct.Id)}>
         <img src={BestProduct.Image} alt="" />
         </Link>
         <ul>
            <li className='CartBtnLi'>{BestProduct.Type}</li>
             {/* <li className='CartBtnLi'>{BestProduct.Type} {Cart.includes(BestProduct)?<button onClick={RemoveCart} className='RemoveCart'><RemoveShoppingCartIcon /></button>
                 :
                 <button onClick={addToCart} className='addToCart' ><AddShoppingCartIcon /></button>}</li> */}
             <li>Rs.{BestProduct.Price}
                {/* <span style={{ textDecoration:"line-through", color:"#000" }}> M.R.P : Rs.{BestProduct.Mrp}</span>
                 <span className='Off'> {BestProduct.Offer}% OFF</span> */}
                 <span className='Off'> {BestProduct.Offer}</span>
                </li>
         </ul>
     </div> 
     </div>

    {/* <div id="nami" key={BestProduct.Id}>
        <Link to={'/BestWeekView'} onClick={()=>setBestId(BestProduct.Id)}>
        <img src={BestProduct.Image} alt="" />
        </Link>
        <ul>
            <li className="three"><h5>{BestProduct.Name}</h5></li>
            <li>Type : {BestProduct.Type}</li>
            <li>Price : <RupeeIcon/>{BestProduct.Price}</li>
            <li>{Cart.includes(BestProduct)?<button onClick={RemoveCart} className='RemoveCart'><RemoveShoppingCartIcon/></button>
                :
                <button onClick={addToCart} className='addToCart'><AddShoppingCartIcon/></button>}</li>
        </ul>
    </div> */}
    </>
  )
}

export default BestSellsOfWeek
