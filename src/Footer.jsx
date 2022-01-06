/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Twitter from './assets/twitter.png';
import Discord from './assets/discord.png';
import Typeform from './assets/Typeform.png';

function Footer() {
  return (
    <div className="footer">
      <a
        href="https://twitter.com/shipyard_"
        target="_blank"
        className="background-center"
        style={{ backgroundImage: `url("${Twitter}")`, height: 75, width: 75, margin: 40 }} rel="noreferrer"
      />
      <a
        href="https://discord.gg/NPbwsCxkHw"
        target="_blank"
        className="background-center"
        style={{ backgroundImage: `url("${Discord}")`, height: 75, width: 75, margin: 40 }} rel="noreferrer"
      />
      <a
        href="https://hackerdao.typeform.com/shipyardNFT"
        target="_blank"
        className="background-center"
        style={{ backgroundImage: `url("${Typeform}")`, height: 75, width: 75, margin: 40 }} rel="noreferrer"
      />
    </div>
  );
}

export default Footer;
