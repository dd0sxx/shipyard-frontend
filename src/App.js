import {useState, useEffect} from 'react'
import Nav from './Nav'
import Boat from './Boat'
import ReturnToTop from './ReturnToTop'
import Banner from './Banner'
import Create from './Create'
import About from './About'
import Footer from './Footer'


function App() {


  const [rttColor, setRttColor] = useState('transparent')

  useEffect(() => {
    window.onscroll = () => {
      window.pageYOffset > 0 ? setRttColor('white') : setRttColor('transparent')

    }
  }, []);

  return (
    <div className="App">
      <Boat></Boat> 
      <ReturnToTop rttColor={rttColor} setRttColor={setRttColor}></ReturnToTop>
      {/* everything below is not absolutely positioned */}
      <div className='landing'>
        <Nav></Nav>
        <Banner></Banner>
      </div>
      <Create></Create>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
