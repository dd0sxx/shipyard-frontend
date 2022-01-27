/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Boat from './Boat';
import ReturnToTop from './ReturnToTop';
import Banner from './Banner';
import Create from './Create';
import About from './About';
import Footer from './Footer';
import Modal from './Modal';

function App() {
  const [rttColor, setRttColor] = useState('transparent');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // eslint-disable-next-line no-unused-vars
  const [renderModal, setRenderModal] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
    window.onscroll = () => {
      window.pageYOffset > 0 ? setRttColor('white') : setRttColor('transparent');
    };
  }, []);

  return (
    <>
      {renderModal ? (
        <Modal setRenderModal={setRenderModal} renderModal={renderModal} />
      ) : (
        <></>
      )}
      <Boat />
      <div className="App">
        {windowWidth > 581 ? (
          <ReturnToTop rttColor={rttColor} setRttColor={setRttColor} />
        ) : (
          <></>
        )}
        {/* everything below is not absolutely positioned */}
        <div className="landing">
          <Nav
            windowWidth={windowWidth}
            setRenderModal={setRenderModal}
            renderModal={renderModal}
           />
          <Banner />
        </div>
        <Create />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
