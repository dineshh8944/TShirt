import React, { createContext, useContext,useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HeroPage from './components/HeroPage'
import PickUpLeftOff from './components/PickUpLeftOff'
import TopOfTheDay from './components/TopOfTheDay'
import BestSellsOfWeek from './components/BestSellsOfWeek'
// import BestSells from '../JsonFiles/BestSellOfWeek.json'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Categories from './components/Categories'
import { ShopContext } from './App'
import { Link } from 'react-router-dom';


const Home = () => {
const {filteredAnime,TopDay,BestSells,PickUp,OptionExample,setTopId,TopId,setFilProductTop} = useContext(ShopContext);
//  useEffect(() => {
//                    const dataAnime = filteredAnime.filter(item => item.id === TopId);
//                    setFilProductTop(dataAnime);
//                  }, [ TopId ]);


  return (
    <>
  <HeroPage/>
  {/* <Categories /> */}

{/* <div className="pick_up">
      <Container fluid>
        <h2>Pick up Where You Left Off</h2>
          <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                <div className="centerOne">
                  {PickUp.map((pickUp)=>(
                    <PickUpLeftOff RupeeIcon={CurrencyRupeeIcon} key={pickUp.Id} PickProduct={pickUp} />
                  ))}
                </div>
              </Col>
          </Row>
      </Container>
</div> */}

{/* <div className="top_of_day">
      <Container fluid>
      <h2>Top Of The Day</h2>
          <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                  <div className="centerTwo">
      {
        TopDay.map((Tops)=>(
          <TopOfTheDay RupeeIcon={CurrencyRupeeIcon} key={Tops.Id} TopProduct={Tops}/>
        ))
      }
                  </div>
              </Col>
        </Row>
    </Container>
</div> */}



<div className="top_of_day">
      <Container fluid>
      <h2>Top Of The Day</h2>
          <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                  <div className="centerTwo">
   

{
filteredAnime.length === 0 ? (
    TopDay.map((topdays) => (
        <div key={topdays.id}>
            <div className="one_pice">
          <Link to='/TopDayView' onClick={()=>setTopId(topdays.id)}>
          <img src={topdays.Image} alt="" />
      </Link>
          <ul>
            <li className='CartBtnLi'>{topdays.Type}</li>
              {/* <li className='CartBtnLi'>{topdays.Type} {Cart.includes(topdays)?<button onClick={RemoveCart} className='RemoveCart'><RemoveShoppingCartIcon /></button>
                 :
                 <button onClick={addToCart} className='addToCart' ><AddShoppingCartIcon /></button>}</li> */}
             <li>Rs.{topdays.Price}
              <span className='Off'> {topdays.Offer}</span>
                {/* <span style={{ textDecoration:"line-through", color:"#000" }}> M.R.P : Rs.{topdays.Mrp}</span>
                 <span className='Off'> {topdays.Offer}% OFF</span>
                 <span className='Off'> {topdays.Offer}</span> */}
                </li>
         </ul>
     </div>       
        </div>
    ))
) : (
    filteredAnime.map((product) => (
        <div key={product.id}>
            <div className="one_pice">
                <Link
                    to="/AllAnimeView"
                    onClick={() => setTopId(product.id)}
                >
                    <img src={product.Image} alt="" />
                </Link>

                <ul>
                  <li className='CartBtnLi'>{product.Type}</li>
                    <li>
                        Rs.{product.Price}
                        <span className="Off">
                              {product.Offer}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    ))
)
}

                  </div>
              </Col>
        </Row>
    </Container>
</div>





<div className="best_sells_of_week">
  <h2>Best Sells Of Week</h2>
    <Container fluid>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <div className="center_3">
            {BestSells.map((Best)=> (
            <BestSellsOfWeek RupeeIcon={CurrencyRupeeIcon} key={Best.Id} BestProduct={Best}/>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
</div>
      
    </>
  )
}

export default Home








//  [
//     {
//         "id":1,
//         "Name":"Over Sized",
//         "Price":349,
//         "Mrp":499,
//         "Offer":"Attack On Titan",
//         "Type":"Over Sized",
//         "Image":"/images/aot-1.1.jpg",
//         "img2":"/images/aot-1.2.jpg",
//         "img3":"/images/aot-1.jpg"
//     },
//     {
//         "id":2,
//         "Name":"Over Sized",
//         "Price":349,
//         "Mrp":499,
//         "Offer":"Attack On Titan",
//         "Type":"Over Sized",
//         "Image":"/images/Ju-2.1.jpg",
//         "img2":"/images/Ju-2.jpg",
//         "img3":"/images/Ju-2.2.jpg"
//     },
//     {
//         "id":3,
//         "Name":"Over Sized",
//        "Price":649,
//         "Mrp":999,
//         "Offer":"Attack On Titan",
//          "Type":"Over Sized",
//         "Image":"/images/d-1.jpg",
//         "img2":"/images/d-1.1.jpg",
//         "img3":"/images/d-1.2.jpg"
//     }
//     ,
//     {
//         "id":4,
//         "Name":"Over Sized",
//         "Price":349,
//         "Mrp":499,
//         "Offer":"Attack On Titan",
//         "Type":"Over Sized",
//         "Image":"/images/car-1.1.jpg",
//         "img2":"/images/car-1.2.jpg",
//         "img3":"/images/car-1.jpg"
//     },
//     {
//         "id":5,
//         "Name":"Over Sized",
//         "Price":349,
//         "Mrp":499,
//         "Offer":"Demon Slayer",
//         "Type":"Over Sized",
//         "Image":"/images/one-2.1.jpg",
//         "img2":"/images/one-2.jpg",
//         "img3":"/images/one-2.2.jpg"
//     },
//     {
//         "id":6,
//         "Name":"Over Sized",
//         "Price":349,
//         "Mrp":999,
//         "Offer":"Demon Slayer",
//         "Type":"Over Sized",
//         "Image":"/images/car-2.1.jpg",
//         "img2":"/images/car-2.2.jpg",
//         "img3":"/images/car-2.jpg"
//     },
//     {
//         "id":7,
//         "Name":"Over Sized",
//        "Price":349,
//         "Mrp":499,
//         "Offer":"Demon Slayer",
//         "Type":"Over Sized",
//         "Image":"/images/n-2.1.jpg",
//         "img2":"/images/n-2.2.jpg",
//         "img3":"/images/n-2.jpg"
//     }
//     ,
//     {
//         "id":8,
//         "Name":"Over Sized",
//         "Price":349,
//         "Mrp":499,
//         "Offer":"Demon Slayer",
//       "Type":"Over Sized",
//         "Image":"/images/solo-1.1.jpg",
//         "img2":"/images/solo-1.2.jpg",
//         "img3":"/images/solo-1.jpg"
//     }
// ]