import Carousel from 'react-bootstrap/Carousel';
import SliderImgOne from '../assets/home_image_2_2.jpg';
import SliderImgTwo from '../assets/home_image_2_2.jpg';
import SliderImgThree from '../assets/home_image_2_2.jpg';
import '/css/HeroPage.css'
import { useContext } from 'react';
import { ShopContext } from '../App';


function HeroPage() {
 
  // const {HeroOneJson,HeroTwoJson,HeroThreeJson,HeroOne,setHeroOne,HeroTwo,setHeroTwo,HeroThree,setHeroThree} = useContext(ShopContext);
   const {bannerJson} = useContext(ShopContext);
  return (
    <>
    <Carousel>
      { bannerJson.map((entryBanner)=>(
        <Carousel.Item>
          <img src={entryBanner.img} alt="Image 1"/>
        </Carousel.Item>
      ))
      }
    </Carousel>
    </>
    
  );
}

export default HeroPage;
