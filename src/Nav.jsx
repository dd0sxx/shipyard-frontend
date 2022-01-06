/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import * as Scroll from 'react-scroll';
import Logo from './Logo';
import Twitter from './assets/twitter.png';
import Discord from './assets/discord.png';
import Hamburger from './assets/hamburger.png';

function Nav({ windowWidth, renderModal, setRenderModal }) {
  const hamburgerClick = () => {
    const rm = !renderModal;
    setRenderModal(rm);
  };

  const {Link} = Scroll;

  return (
    <div className="Nav" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Logo />
      {windowWidth < 581 ? (
        <div
          className="hamburger background-center"
          onClick={hamburgerClick}
          style={{ backgroundImage: `url("${Hamburger}")` }}
         />
      ) : (
        <div className="right-nav" style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="create" smooth duration={1000} className="pointer nav-hover nav-text">
            Create
          </Link>
          <a
            className="nav-hover nav-text"
            href="https://medium.com/@loganlarkin/shipyard-studio-introduction-198fcf872e21"
            target="_blank" rel="noreferrer"
          >
            About
          </a>
          <a
            href="https://twitter.com/shipyard_"
            target="_blank"
            className="background-center nav-hover"
            style={{ backgroundImage: `url("${Twitter}")`, height: 25, width: 25, margin: 10 }} rel="noreferrer"
          />
          <a
            href="https://discord.gg/NPbwsCxkHw"
            target="_blank"
            className="background-center nav-hover"
            style={{ backgroundImage: `url("${Discord}")`, height: 25, width: 25, margin: 10 }} rel="noreferrer"
          />
          <a
            href="https://hackerdao.typeform.com/shipyardNFT"
            target="_blank"
            className="round-button expand-hover quicksand"
            style={{
              height: 25,
              border: '1px solid navy',
              lineHeight: 1.5,
              fontWeight: '300',
              marginLeft: 10,
              textDecoration: 'none',
              color: 'white'
            }} rel="noreferrer"
          >
            Inquire
          </a>
        </div>
      )}
    </div>
  );
}

export default Nav;
