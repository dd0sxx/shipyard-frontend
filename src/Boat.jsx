import React, {useState, useEffect} from 'react';
import BoatGif from './assets/boat.gif';

function Boat() {

 const [boatYPosition, setBoatYPosition] = useState(document.body.clientHeight * 0.26 - 198)

 useEffect(() => {
  window.addEventListener('resize', () => setBoatYPosition(document.body.clientHeight * 0.26 - 198))
 }, [])

  return (
    <div
      className="Boat background-center"
      style={{
        backgroundImage: `url("${BoatGif}")`,
        position: 'absolute',
        top: boatYPosition
      }}
     />
  );
}

export default Boat;
