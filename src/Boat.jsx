import React from 'react';
import BoatGif from './assets/boat.gif';

function Boat() {
  return (
    <div
      className="Boat background-center"
      style={{
        backgroundImage: `url("${BoatGif}")`,
        position: 'absolute',
        top: document.body.clientHeight * 0.26 - 198
      }}
     />
  );
}

export default Boat;
