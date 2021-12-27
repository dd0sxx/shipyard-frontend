import {useState, useEffect} from 'react'
import Nav from './Nav'
import Boat from './Boat'
import ReturnToTop from './ReturnToTop'
import CallToAction from './CallToAction'
import Banner from './Banner'
import Create from './Create'
import About from './About'
import Footer from './Footer'
import Modal from './Modal'


function App() {

  const [rttColor, setRttColor] = useState('transparent')
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [bodyHeight, setBodyHeight] = useState(document.body.clientHeight)
  const [renderModal, setRenderModal] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', function(event){
      setWindowWidth(window.innerWidth)
      setBodyHeight(document.body.clientHeight)
    });
    console.log(windowWidth)
    window.onscroll = () => {
      window.pageYOffset > 0 ? setRttColor('white') : setRttColor('transparent')
    }
  }, []);

  return (
    <>
      {renderModal ? 
        <Modal setRenderModal={setRenderModal} renderModal={renderModal}></Modal>
      : 
        <></>
      }
      <Boat bodyHeight={bodyHeight}></Boat> 
      <div className="App">
        {windowWidth > 581 ?
        <ReturnToTop rttColor={rttColor} setRttColor={setRttColor}></ReturnToTop>
        : <></>
      }
        {/* everything below is not absolutely positioned */}
        <div className='landing'>
          <Nav windowWidth={windowWidth} setRenderModal={setRenderModal} renderModal={renderModal}></Nav>
          <Banner></Banner>
          {/* <CallToAction></CallToAction> */}
        </div>
        <Create></Create>
        <About></About>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
