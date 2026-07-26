import { useState, useContext } from "react";
import { ShopContext } from '../App';
import { useLocation } from 'react-router-dom';
import '/css/OptionExample.css';

export default function OptionExample() {

    const{filteredAnime,changeAnimeCharecter,selectedAnime, setSelectedAnime} = useContext(ShopContext);
 const locationHome = useLocation();
//  const [selectedAnime, setSelectedAnime] = useState("");

//  console.log(changeAnimeCharecter);

  const changeAnime = (e) => {
    setSelectedAnime(e.target.value);
  };

  // const filteredAnime = changeAnimeCharecter.filter(
  //   (item) => item.anime === selectedAnime
  // );


  return (
   <>
      <select value={selectedAnime} className="formTheem" onChange={changeAnime} style={{
        display: locationHome.pathname === "/" ? "block" : "none",
      }} >
        <option value="" className="formTheemOption">
          Select Anime
        </option>

          <option value="attackOnTitan" className="formTheemOption">
            Attack On Titan
          </option>
          <option value="demonSlayer" className="formTheemOption">
            Demon Slayer
          </option>
          <option value="jujutsuKaisen" className="formTheemOption">
            Jujutsu Kaisen
          </option>
          <option value="onepiece" className="formTheemOption">
            One Piece
          </option>
          <option value="naruto" className="formTheemOption">
            Naruto
          </option>
          <option value="car" className="formTheemOption">
            Cars
          </option>

       
      </select>

      {/* <h3>Selected: {selectedAnime}</h3>

      {filteredAnime.map((item) => (
        <div>
          {item.id} - {item.anime} 
          <img src={item.Image} alt={item.anime} />
        </div>
      ))} */}
    </>
  )
}







//  {/* {changeAnimeCharecter.map((item) => (
//           <option key={item.id} value={item.anime}>
//             {item.anime}
//           </option>
//         ))} */}