import React from 'react'
import BoatGif from './assets/shipyard-gif2.gif'
function Boat () {

  return (
    <div className="Boat" style={{
      backgroundImage: `url("${BoatGif}")`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      transform: 'scaleX(-1)',
      height: '30vh',
      width: '30vw',
      position: 'absolute',
      top: '33vh',
      left: '35vw',
    }}></div>
  );
}

export default Boat;
