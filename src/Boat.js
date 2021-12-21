import React from 'react'
import BoatGif from './assets/shipyard-gif2.gif'
function Boat () {

  return (
    <div className="Boat background-center" style={{
      backgroundImage: `url("${BoatGif}")`,
      transform: 'scaleX(-1)',
      position: 'absolute',
    }}></div>
  );
}

export default Boat;
