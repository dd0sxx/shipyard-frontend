/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import * as Scroll from 'react-scroll';
import Twitter from './assets/twitter.png';
import Discord from './assets/discord.png';

function Modal({ renderModal, setRenderModal }) {
  const {Link} = Scroll;

  const hamburgerClick = () => {
    const rm = !renderModal;
    setRenderModal(rm);
  };

  return (
    <div
      className="modal"
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }} onClick={hamburgerClick}>
        <div
          className="modal-text"
          onClick={hamburgerClick}
          style={{
            position: 'absolute',
            padding: 15,
            margin: 0
          }}
        >
          Back
        </div>
        <div
          onClick={hamburgerClick}
          style={{
            margin: 'auto',
            fontFamily: 'quicksand',
            textAlign: 'left',
            color: 'black',
            fontSize: 24
          }}
        >
          Shipyard Studios
        </div>
      </div>
      <Link
        to="create"
        smooth
        duration={1000}
        className="modal-text"
        onClick={hamburgerClick}
      >
        Create
      </Link>
      <a
        className="modal-text"
        href="https://medium.com/@loganlarkin/shipyard-studio-introduction-198fcf872e21"
        target="_blank"
        style={{ textDecoration: 'none' }} rel="noreferrer"
      >
        About
      </a>
      <a
        href="https://twitter.com/shipyard_"
        target="_blank"
        className="background-center"
        style={{
          backgroundImage: `url("${Twitter}")`,
          height: 40,
          width: 40,
          margin: 'auto',
          textDecoration: 'none'
        }} rel="noreferrer"
      />
      <a
        href="https://discord.gg/NPbwsCxkHw"
        target="_blank"
        className="background-center"
        style={{
          backgroundImage: `url("${Discord}")`,
          height: 40,
          width: 40,
          margin: 'auto',
          textDecoration: 'none'
        }} rel="noreferrer"
      />
      <a
        href="https://hackerdao.typeform.com/shipyardNFT"
        target="_blank"
        className="round-button expand-hover quicksand"
        style={{
          height: 25,
          border: '1px solid Modaly',
          lineHeight: 1.5,
          fontWeight: '300',
          margin: 'auto',
          textDecoration: 'none',
          color: 'white'
        }} rel="noreferrer"
      >
        Inquire
      </a>
    </div>
  );
}

export default Modal;
