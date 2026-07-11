import React, { createContext, useEffect, useRef, useState } from 'react'
import {BrowserRouter,Route,Routes,useNavigate} from 'react-router-dom'
import  { useLocation } from "react-router-dom";

import TopDay from '/src/data/TopOfTheDay.json'
import BestSells from '/src/data/BestSellOfWeek.json'
import Hoodies from '/src/data/ProductsHoodies.json'
import Pants from '/src/data/ProductsPants.json'
import PickUp from '/src/data/PickUpLeftOff.json'
import TShirt from '/src/data/ProductsTshirt.json'
import topWears from '/src/data/TopWear.json'
import bottomWears from '/src/data/BottomWear.json'
import HeroOneJson from '/src/data/HeroBannerOne.json'
import HeroTwoJson from '/src/data/HeroBannerTwo.json'
import bannerJson from '/src/data/HeroBannerThree.json'
import changeAnimeCharecter from '/src/data/AllAnimeImages.json'

import Home from './Home'
import Header from './components/Header'
import Filter from './components/Filter'
import Footer from './components/Footer'
import PickView from './components/PickView'
import TopView from './components/TopView'
import BestView from './components/BestView'
import AddHoodies from './components/AddHoodies'
import AddPants from './components/AddPants'
import AddTShirt from './components/AddTShirt'
import AddCart from './components/AddCart'
import TopWear from './components/TopWear'
import BottomWear from './components/BottomWear'
import OptionExample from './components/OptionExample'
import AllAnimeViews from './components/AllAnimeView'

import '/css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '/css/CartBtnAll.css'
import '/css/HomeAllCards.css'
import '/css/TopAndBottomCard.css'

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import StarRateIcon from '@mui/icons-material/StarRate';

export const ShopContext = createContext()

const App = () => {
  // const [PickId,setPickId] = useState(null)
  const [TopId,setTopId] = useState(null);
  const [BestId,setBestId] = useState(null);
  const [FilProductPick,setFilProductPick] = useState([]);
  const [FilProductTop,setFilProductTop] = useState([]);
  const [FilProductBest,setFilProductBest] = useState([]);
  const [Cart,setCart] = useState([]);
  const [TshirtId,setTshirtId] = useState(null);
  const [totalCount,setTotalCount] = useState(0);

  const [HeroOne,setHeroOne] = useState(false);
  const [HeroTwo,setHeroTwo] = useState(false);
  const [HeroThree,setHeroThree] = useState(false);

  const [selectedAnime,setSelectedAnime] = useState("");
    const TheemsRef = useRef(null);

    
 
  const filteredAnime = changeAnimeCharecter.filter(
    (item) => item.anime === selectedAnime
  );


  function RemoveViewDetails(productRemove) {
    setFilProductPick(FilProductPick.filter((e) => e.Id !== productRemove));
    setFilProductTop(FilProductTop.filter((e) => e.Id !== productRemove));
    setFilProductBest(FilProductBest.filter((e) => e.Id !== productRemove));
}

  const ScrollToTop = () => {
    const { pathname } = useLocation(); // Get the current route (pathname)
  
    useEffect(() => {
      // Scroll to the top of the page whenever the route changes
      window.scrollTo(0, 0);
    }, [pathname]); // Run this effect whenever `pathname` changes
  
    return null; // This component doesn't render anything
  };


  return (
    <>
      <ShopContext.Provider value={{TheemsRef,filteredAnime,OptionExample,selectedAnime,setSelectedAnime,changeAnimeCharecter,totalCount,setTotalCount,HeroOneJson,HeroTwoJson,bannerJson,HeroOne,setHeroOne,HeroTwo,setHeroTwo,HeroThree,setHeroThree,StarRateIcon,RemoveShoppingCartIcon,AddShoppingCartIcon,TopId,BestId,setTopId,setBestId,FilProductPick,setFilProductPick,FilProductTop,FilProductBest,setFilProductTop,setFilProductBest,TshirtId,setTshirtId,TopDay,BestSells,PickUp,TShirt,Cart,setCart,CurrencyRupeeIcon,Hoodies,Pants,topWears,bottomWears}}>
        <BrowserRouter>
        <ScrollToTop />
        <Header/>
        <Filter/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/PickUpView' element={<PickView />} />
                <Route path='/AllAnimeView' element={<AllAnimeViews />} />
                <Route path='/TopDayView' element={<TopView />} />
                <Route path='/BestWeekView' element={<BestView />} />
                <Route path='/AddTShirt' element={<AddTShirt />} />
                <Route path='/AddHoodies' element={<AddHoodies />} />
                <Route path='/AddPants' element={<AddPants />} />
                <Route path='/AddCart' element={<AddCart />}/>
                <Route path='/TopWear' element={<TopWear />} />
                <Route path='/BottomWear' element={<BottomWear />} />
            </Routes>
          <Footer/>
        </BrowserRouter>
      </ShopContext.Provider>
    </>
  )
}

export default App

