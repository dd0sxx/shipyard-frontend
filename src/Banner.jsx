import React from 'react';

function Banner() {
  return (
    <div className="banner">
      <div className="big-text assistant" style={{ color: '#2a2b2d' }}>
        Create.
        <br />
        Ship. NFTs.
      </div>
      <div
        className="small-text assistant banner-text"
        style={{ color: 'rgba(36, 36, 36, 0.749)' }}
      >
        Shipyard Studios provides creators access to world class software engineers and creatives to
        ship premium web3 projects.
      </div>
    </div>
  );
}

export default Banner;
