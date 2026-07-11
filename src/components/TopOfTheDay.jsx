import React, { useContext } from 'react';
import '/css/TopOfTheDay.css'
import { Link } from 'react-router-dom';
import { ShopContext } from '../App'
// import '/css/HomeAllCards.css'

const TopOfTheDay = ({RupeeIcon,TopProduct}) => {
    const {TopDay,filteredAnime,selectedAnime,setSelectedAnime,setTopId,Cart,setCart,RemoveShoppingCartIcon,AddShoppingCartIcon} = useContext(ShopContext)

console.log("TopProduct:", TopProduct);
console.log("Is Array:", Array.isArray(TopProduct));








//   function addToCart(){
//         setCart([...Cart,TopProduct])
//     }
//     function RemoveCart(){
   
//         setCart(Cart.filter((p)=>p.Id !== TopProduct.Id))
  
//     }

  return (
    <>
{
TopProduct.length === 0 ? (
    TopDay.map((topdays) => (
        <div key={topdays.Id}>
            <div className="one_pice">
          <Link to='/TopDayView' onClick={()=>setTopId(topdays.Id)}>
          <img src={topdays.Image} alt="" />
      </Link>
          <ul>
              {/* <li className='CartBtnLi'>{topdays.Type} {Cart.includes(topdays)?<button onClick={RemoveCart} className='RemoveCart'><RemoveShoppingCartIcon /></button>
                 :
                 <button onClick={addToCart} className='addToCart' ><AddShoppingCartIcon /></button>}</li> */}
             <li>Rs.{topdays.Price}
                <span style={{ textDecoration:"line-through", color:"#000" }}> M.R.P : Rs.{topdays.Mrp}</span>
                 <span className='Off'> {topdays.Offer}% OFF</span>
                 <span className='Off'> {topdays.Offer}</span>
                </li>
         </ul>
     </div>       
        </div>
    ))
) : (
    TopProduct.map((product) => (
        <div key={product.Id}>
            <div className="one_pice">
                <Link
                    to="/TopDayView"
                    onClick={() => setTopId(product.Id)}
                >
                    <img src={product.Image} alt="" />
                </Link>

                <ul>
                    <li>
                        Rs.{product.Price}
                        <span style={{ textDecoration: "line-through" }}>
                            M.R.P : Rs.{product.Mrp}
                        </span>

                        <span className="Off">
                            {product.Offer}% OFF
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    ))
)
}












{/* {
 TopProduct.length === 0 ? (
   TopDay.map((topdays)=>(

<div  key={topdays.Id}>
 <div className="one_pice">
          <Link to='/TopDayView' onClick={()=>setTopId(topdays.Id)}>
          <img src={topdays.Image} alt="" />
      </Link>
          <ul>
              <li className='CartBtnLi'>{topdays.Type} {Cart.includes(topdays)?<button onClick={RemoveCart} className='RemoveCart'><RemoveShoppingCartIcon /></button>
                 :
                 <button onClick={addToCart} className='addToCart' ><AddShoppingCartIcon /></button>}</li>
             <li>Rs.{topdays.Price}
                <span style={{ textDecoration:"line-through", color:"#000" }}> M.R.P : Rs.{topdays.Mrp}</span>
                 <span className='Off'> {topdays.Offer}% OFF</span>
                 <span className='Off'> {topdays.Offer}</span>
                </li>
         </ul>
     </div>       
</div>
))


  ):(


    <div  key={TopProduct.id}>
<div className="one_pice">
         <Link to='/TopDayView' onClick={()=>setTopId(TopProduct.id)}>
         <img src={TopProduct.Image} alt="" />
         </Link>
         <ul>
             <li className='CartBtnLi'>{TopProduct.Type} {Cart.includes(TopProduct)?<button onClick={RemoveCart} className='RemoveCart'><RemoveShoppingCartIcon /></button>
                 :
                 <button onClick={addToCart} className='addToCart' ><AddShoppingCartIcon /></button>}</li>
             <li>Rs.{TopProduct.Price}
                <span style={{ textDecoration:"line-through", color:"#000" }}> M.R.P : Rs.{TopProduct.Mrp}</span>
                 <span className='Off'> {TopProduct.Offer}% OFF</span>
                 <span className='Off'> {TopProduct.Offer}</span>
                </li>
         </ul>
     </div>       
</div>





  )


    } */}
 





  



    </>
  )
}

export default TopOfTheDay





{/* <div id="zoro" key={TopProduct.Id}>
<Link to='/TopDayView' onClick={()=>setTopId(TopProduct.Id)}>
        <img src={TopProduct.Image} alt="" />
        </Link>
            <ul>
                <li className="two"><h5>{TopProduct.Name}</h5></li>
                <li>Type : {TopProduct.Type}</li>
                <li>Price : <RupeeIcon />{TopProduct.Price}</li>
                <li>{Cart.includes(TopProduct)?<button onClick={RemoveCart} className='RemoveCart'><RemoveShoppingCartIcon/></button>
                :
                <button onClick={addToCart} className='addToCart'><AddShoppingCartIcon/></button>}</li>
            </ul>
</div> */}


//     function addToCart(){ 
//         setCart([...Cart,TopProduct])
//     }
//     function RemoveCart(){
   
//         setCart(Cart.filter((p)=>p.Id !== TopProduct.Id))
  
//     }

//   return (
//     <>
 
// <div  key={TopProduct.Id}>
// <div className="one_pice">
//          <Link to='/TopDayView' onClick={()=>setTopId(TopProduct.Id)}>
//          <img src={TopProduct.Image} alt="" />
//          </Link>
//          <ul>
//              <li className='CartBtnLi'>{TopProduct.Type} {Cart.includes(TopProduct)?<button onClick={RemoveCart} className='RemoveCart'><RemoveShoppingCartIcon /></button>
//                  :
//                  <button onClick={addToCart} className='addToCart' ><AddShoppingCartIcon /></button>}</li>
//              <li>Rs.{TopProduct.Price}
//                 {/* <span style={{ textDecoration:"line-through", color:"#000" }}> M.R.P : Rs.{TopProduct.Mrp}</span>
//                  <span className='Off'> {TopProduct.Offer}% OFF</span> */}
//                  <span className='Off'> {TopProduct.Offer}</span>
//                 </li>
//          </ul>
//      </div>       
// </div>