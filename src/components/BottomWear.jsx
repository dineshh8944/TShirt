import React, { useEffect, useState, useRef, useContext } from 'react';
import { ShopContext } from '../App'
import { Container, Row, Col } from 'react-bootstrap'
import SearchIcon from '@mui/icons-material/Search';
import '/css/FilterHead.css'
import '/css/BottomWear.css'
import proimg from '../assets/pro_img_2.png'


const BottomWear = () => {
    const {StarRateIcon,bottomWears,CurrencyRupeeIcon,Cart,setCart,RemoveShoppingCartIcon,AddShoppingCartIcon} = useContext(ShopContext);

        const [selectedCategories, setSelectedCategories] = useState([]);
        const [selectedRating, setSelectedRating] = useState(false);
        const [isOfferChecked, setIsOfferChecked] = useState(false);
        const [selectedPrice, setSelectedPrice] = useState("all");// null for no sort, "asc" for low to high, "desc" for high to low
        const [searchQueryBottom, setSearchQueryBottom] = useState('');
        const [filteredProducts, setFilteredProducts] = useState(bottomWears);
  
  
                const handleCategoryChangeBottomWear = (event) => {
                  const { value, checked } = event.target;
                  setSelectedCategories((prevCategories) => 
                    checked ? [...prevCategories, value] : prevCategories.filter((Category) => Category !== value)
                  );
                };
              
                const handleRatingChangeBottomWear = (event) => {
                  setSelectedRating(event.target.checked)
                 };
              
                const handleOfferChangeBottomWear = (event) => {
                  setIsOfferChecked(event.target.checked);
                };
              
                const handleFilterChangeBottom = (event) => {
                  setSelectedPrice(event.target.value);
                };
  
  
                const filterAndSortProductsBottomWear = () => {
                  let filtered = bottomWears;
              
  
                            // Filter by search query
                if (searchQueryBottom) {
                  filtered = filtered.filter((product) =>
                    product.Name.toLowerCase().includes(searchQueryBottom.toLowerCase())
                  );
                }
  
                  // Filter by selected categories
                  if (selectedCategories.length > 0) {
                    filtered = filtered.filter((product) => selectedCategories.includes(product.Category));
                  }
              
                  // Filter by rating
                  if (selectedRating) {
                    filtered = filtered.filter((product) => product.Rating >= 4);
                  }
              
                  // Filter by offer percentage (offer above 25%)
                  if (isOfferChecked) {
                    filtered = filtered.filter((product) => product.Offer >= 25);
                  }
              
                  // Sort by price
                  filtered = filtered.filter((product) => {
                    if (selectedPrice === "all") return true;
                    if (selectedPrice === "low" && product.Price <= 300) return true;
                    if (selectedPrice === "medium" && product.Price > 300 && product.Price <= 700) return true;
                    if (selectedPrice === "high" && product.Price > 700) return true;
                    return false;
                  });

                  setFilteredProducts(filtered);
                };

               useEffect(() => {
                filterAndSortProductsBottomWear();
               }, [selectedCategories, selectedRating, isOfferChecked, selectedPrice,searchQueryBottom]);
                          
  
               function searchBottomWear(e){
                if(e.key ==='Enter'){
                  setSearchQueryBottom(e.target.value)
                  filterAndSortProductsBottomWear();
                }
             }
  return (
    <>

<div className="pick_up_BottomWear">
 
    
    <Row>
    <Col lg={3} md={3} sm={3} xs={4}>

    <div className="filter_head">

        <div className="fil_alls">


            <div className="top_filter">
                <h4>Filters</h4>
            </div>
            <div className="center_1_filter">
                <h5>Price</h5>   
                <div className="price_btns">
                {["all", "low", "medium", "high"].map((range) => (
          <label key={range}>
            <input
              type="radio"
              name="price"
              value={range}
              checked={selectedPrice === range}
              onChange={handleFilterChangeBottom}
              className="cursor-pointer"
            />
            {range === "all"
              ? "All"
              : range === "low"
              ? "Low"
              : range === "medium"
              ? "Medium"
              : "High"}
          </label>
        ))}
                </div> 
            </div>

            <div className="center_2_filter">
        
                <ul>
                    <li><h5>Categories</h5></li>
                    <li><input type="checkbox"  value="cargo" onChange={handleCategoryChangeBottomWear}  />Cargo</li>
                    <li><input type="checkbox"  value="baggy" onChange={handleCategoryChangeBottomWear}  />Baggy</li>
                    <li><input type="checkbox"  value="highlander" onChange={handleCategoryChangeBottomWear}  />Highlander</li>
                    
                </ul>
                <hr />
                <ul>
                    <li><h5>Filter</h5></li>
                    <li><input type="checkbox"  value="4.5" onChange={handleRatingChangeBottomWear}  />Top Rating</li>
                    <li><input type="checkbox"  onChange={handleOfferChangeBottomWear}  />25% above</li>
                </ul>
            </div>
          </div>
    </div>
</Col>

<Col lg={9} md={9} sm={9} xs={8}>

<div className='ProSearchAll'>
  <form action="">
      <input type="text" id="men_dressInput" value={searchQueryBottom} onChange={(e)=>setSearchQueryBottom(e.target.value)} onKeyDown={searchBottomWear} placeholder="Search for products..." />
      <SearchIcon id="searchIconBottom" />
   </form>
  </div>
        <div className="center_1_BottomWear">
            {filteredProducts.length === 0 ? (
              <div className='NoProducts'>
                 <img src={proimg} alt="" />
              </div>
           
            ) : (
            // filteredProducts.map((topwears)=>(
            //   <div id="one_pice_BottomWear" key={topwears.Id}>
            //       <img src={topwears.Image} alt="" />
            //         <ul>
            //             <li className="one_BottomWear"><h5>{topwears.Type}</h5></li>
            //             <li>Offer :  {topwears.Offer}%</li>
            //             <li>Rating :  {topwears.Rating}</li>
            //             <li>Price : <CurrencyRupeeIcon/>{topwears.Price}</li>
            //         </ul>
            //   </div> 
            //   )) 



            filteredProducts.map((bottomwears) => {
              const addToCart = () => {
                setCart([...Cart, bottomwears]);
              };
            
              const removeFromCart = () => {
                setCart(Cart.filter((p) => p.Id !== bottomwears.Id));
              };
            
              return (

                <div key={bottomwears.Id}>
                <div className="one_pice_TopWear">
                    <img src={bottomwears.Image} alt="" />
                    <ul>
                        <li className='CartBtnLiTopWear'>{bottomwears.Type} 
                          <span className='SpanRating' ><StarRateIcon className='Rating' /> {bottomwears.Rating}</span>
                          {Cart.includes(bottomwears)?<button onClick={removeFromCart} className='RemoveCart'><RemoveShoppingCartIcon />
                          </button>
                            :
                            <button onClick={addToCart} className='addToCart' ><AddShoppingCartIcon /></button>}</li>
                        <li>Rs.{bottomwears.Price}
                           <span style={{ textDecoration:"line-through", color:"#000" }}> M.R.P : Rs.{bottomwears.Mrp}</span>
                            <span className='OffTopWear'>{bottomwears.Offer}% OFF</span>
                        </li>
                    </ul>
                </div>      
              </div>


            //     <div id="one_pice_BottomWear" key={bottomwears.Id}>
            //     <img src={bottomwears.Image} alt="" />
            //       <ul>
            //           <li className="one_BottomWear"><h5>{bottomwears.Type}</h5></li>
            //           <li>Offer :  {bottomwears.Offer}%</li>
            //           <li>Rating :  {bottomwears.Rating}</li>
            //           <li>Price : <CurrencyRupeeIcon/>{bottomwears.Price}</li>
            //           <li>{Cart.includes(bottomwears)?<button onClick={RemoveCart} className='RemoveCart'><RemoveShoppingCartIcon/></button>
            //     :
            //     <button onClick={addToCart} className='addToCart'><AddShoppingCartIcon/></button>}</li>
            //       </ul>
            // </div> 
      
              )
            })
            


              )}
          </div>
        </Col>
      </Row>
</div> 
    </>
  )
}

export default BottomWear
