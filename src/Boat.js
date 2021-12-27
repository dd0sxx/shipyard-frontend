import React from 'react'
import BoatGif from './assets/boat.gif'
function Boat ({bodyHeight}) {

  return (
    <div className="Boat background-center" style={{
      backgroundImage: `url("${BoatGif}")`,
      position: 'absolute',
      top: (document.body.clientHeight * 0.26) - 198
    }}></div>
  );
}

export default Boat;
