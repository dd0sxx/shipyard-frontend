import React from 'react'
import BoatGif from './assets/boat.gif'
function Boat () {

  return (
    <div className="Boat background-center" style={{
      backgroundImage: `url("${BoatGif}")`,
      position: 'absolute',
    }}></div>
  );
}

export default Boat;
