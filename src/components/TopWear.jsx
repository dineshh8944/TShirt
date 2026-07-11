import React, { useEffect, useState, useRef, useContext } from 'react';
import { ShopContext } from '../App'
import { Container, Row, Col } from 'react-bootstrap'
import SearchIcon from '@mui/icons-material/Search';
import '/css/FilterHead.css'
import '/css/TopWear.css'
import proimg from '../assets/pro_img_2.png'

const TopWear = () => {
    const {StarRateIcon,topWears,CurrencyRupeeIcon,Cart,setCart,RemoveShoppingCartIcon,AddShoppingCartIcon} = useContext(ShopContext);
    
    const [searchQuery, setSearchQuery] = useState('');

      const [selectedCategories, setSelectedCategories] = useState([]);
      const [selectedThemes, setSelectedThemes] = useState([]);
      const [selectedRating, setSelectedRating] = useState(false);
      const [isOfferChecked, setIsOfferChecked] = useState(false);
      const [selectedPrice, setSelectedPrice] = useState("all");
      // const [priceSortOrderTopWear, setPriceSortOrderTopWear] = useState(null); // null for no sort, "asc" for low to high, "desc" for high to low
      // const [searchQuery, setSearchQuery] = useState('');
      const [filteredProducts, setFilteredProducts] = useState(topWears);


              const handleCategoryChange = (event) => {
                const { value, checked } = event.target;
                setSelectedCategories((prevCategories) => 
                  checked ? [...prevCategories, value] : prevCategories.filter((Category) => Category !== value)
                );
              };
            

               const handleThemeChange = (event) => {
                const { value, checked } = event.target;
                setSelectedThemes((prevThemes) => 
                  checked ? [...prevThemes, value] : prevThemes.filter((theme) => theme !== value)
                );
              };



              // const handleRatingChange = (event) => {
              //   setSelectedRating(event.target.checked)
              //  };

               const handleFilterChange = (event) => {
                setSelectedPrice(event.target.value);
              };



              //  const handlePriceSortChangeTop = (event) => {
              //   setPriceSortOrderTopWear(event.target.value);
              //  }
            
              const handleOfferChange = (event) => {
                setIsOfferChecked(event.target.checked);
              };

              const filterAndSortProducts = () => {
                let filtered = topWears;
            

                // Filter by search query
                if (searchQuery) {
                  filtered = filtered.filter((product) =>
                    product.Name.toLowerCase().includes(searchQuery.toLowerCase())
                  );
                }

                // Filter by selected categories
                if (selectedCategories.length > 0) {
                  filtered = filtered.filter((product) => selectedCategories.includes(product.Category));
                }


                // Filter by selected themes
                if (selectedThemes.length > 0) {
                  filtered = filtered.filter((product) => selectedThemes.includes(product.theme));
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


                // if (priceSortOrderTopWear === 'LowToHigh') {
                //   filtered = filtered.sort((a, b) => a.Price - b.Price);
                // } else if (priceSortOrderTopWear === 'HighToLow') {
                //   filtered = filtered.sort((a, b) => b.Price - a.Price);
                // }
// filtered.map((Topwear)=>(

//   function addToCart(){
              
//     setCart([...Cart,Topwear])
// },
// function RemoveCart(){
//     setCart(Cart.filter((p)=>p.Id !== Topwear.Id))

// }
// ));
            
                setFilteredProducts(filtered);
              };
            
              useEffect(() => {
                filterAndSortProducts();
              }, [selectedCategories, selectedThemes, selectedRating, isOfferChecked, selectedPrice,searchQuery]);
          
              function search(e){
                if(e.key ==='Enter'){
                 setSearchQuery(e.target.value)
                 filterAndSortProducts();
                }
             }

            
       
  return (
    <>

<div className="pick_up_TopWear">
  
     
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
              onChange={handleFilterChange}
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
              

                {/* <label><input type="radio" name="priceSort" value="LowToHigh" onChange={handlePriceSortChangeTop} />Low to High</label><br />
                <label><input type="radio" name="priceSort" value="HighToLow" onChange={handlePriceSortChangeTop} />High to Low</label> */}
                </div> 
            </div>

            <div className="center_2_filter">
        
                <ul>
                    <li><h5>Categories</h5></li>
                    <li><input type="checkbox"  value="t shirt" onChange={handleCategoryChange}  />T Shirt</li>
                    <li><input type="checkbox"  value="hoodie" onChange={handleCategoryChange}  />Hoodies</li>
                    {/* <li><input type="checkbox"  value="shirt" onChange={handleCategoryChange}  />Shirt</li> */}
                </ul>
                <hr />



                {/* <ul>
                    <li><h5>Filter</h5></li>
                    <li><input type="checkbox"  value="4.5" onChange={handleRatingChange}  />Top Rating</li>
                    <li><input type="checkbox"  onChange={handleOfferChange}  />25% above</li>
                </ul> */}
                <ul>
                    <li><h5>Themes</h5></li>
                   <li><input type="checkbox"  value="one piece" onChange={handleThemeChange}  />One pice</li>
                    <li><input type="checkbox"  value="demon slayer" onChange={handleThemeChange}  />Demon Slayer</li>
                    <li><input type="checkbox"  value="attack on titan" onChange={handleThemeChange}  />Attack on titan</li>
                </ul>




            </div>
          </div>
    </div>
</Col>

<Col lg={9} md={9} sm={9} xs={8}>
<div className='ProSearchAll'>
  <form action="">
      <input type="text" id="men_dress" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} onKeyDown={search} placeholder="Search for products..." />
      <SearchIcon id="searchIcon" />
   </form>
  </div>
        <div className="center_1_TopWear">
            {filteredProducts.length === 0 ? (
              <div className='NoProducts'>
                   <img src={proimg} alt="" />
              </div>
            ) : (
            // filteredProducts.map((topwears)=>(
            //   <div id="one_pice_TopWear" key={topwears.Id}>
            //       <img src={topwears.Image} alt="" />
            //         <ul>
            //             <li className="one_TopWear"><h5>{topwears.Type}</h5></li>
            //             <li>Offer :  {topwears.Offer}%</li>
            //             <li>Rating :  {topwears.Rating}</li>
            //             <li>Price : <CurrencyRupeeIcon/>{topwears.Price}</li>
            //             <li>{Cart.includes(topwears)?<button onClick={RemoveCart}>Remove</button>
            //     :
            //     <button onClick={addToCart}>Add Cart</button>}</li>
            //         </ul>
            //   </div> 
            //   )) 



            filteredProducts.map((topwears) => {
              const addToCart = () => {
                setCart([...Cart, topwears]);
              };
            
              const removeFromCart = () => {
                setCart(Cart.filter((p) => p.Id !== topwears.Id));
              };
            
              return (


  <div key={topwears.Id}>
    <div className="one_pice_TopWear">
        <img src={topwears.Image} alt="" />
        <ul>
            <li className='CartBtnLiTopWear'>{topwears.Type} 
              {/* <span className='SpanRating' ><StarRateIcon className='Rating' /> {topwears.Rating}</span> */}
              {Cart.includes(topwears)?<button onClick={removeFromCart} className='RemoveCart'><RemoveShoppingCartIcon />
              </button>
                :
                <button onClick={addToCart} className='addToCart' ><AddShoppingCartIcon /></button>}</li>
            <li>Rs.{topwears.Price}
                {/* <span style={{ textDecoration:"line-through", color:"#000" }}> M.R.P : Rs.{topwears.Mrp}</span> */}
                 {/* <span style={{ textDecoration:"line-through", color:"#000" }}>one pice</span> */}
                {/* <span className='OffTopWear'> {topwears.Offer}% OFF</span>  */}
                <span className='OffTopWear'> {topwears.theme}</span> 
            </li>
        </ul>
    </div>      
  </div>


                // <div id="one_pice_TopWear" key={topwears.Id}>
                //       <img src={topwears.Image} alt="" />
                //         <ul>
                //             <li className="one_TopWear"><h5>{topwears.Type}</h5></li>
                //             <li>Offer :  {topwears.Offer}%</li>
                //             <li>Rating :  {topwears.Rating}</li>
                //             <li>Price : <CurrencyRupeeIcon/>{topwears.Price}</li>
                //             <li>{Cart.includes(topwears)?<button onClick={RemoveCart} className='RemoveCart'><RemoveShoppingCartIcon/></button>
                // :
                // <button onClick={addToCart} className='addToCart'><AddShoppingCartIcon/></button>}</li>
                //         </ul>
                //  </div> 
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

export default TopWear