import Nav from './Nav'
import Boat from './Boat'
import Banner from './Banner'
import Create from './Create'

function App() {
  return (
    <div className="App">
      <Boat></Boat> 
      {/* everything below is not absolutely positioned */}
      <div className='landing'>
        <Nav></Nav>
        <Banner></Banner>
      </div>
      <Create></Create>
    </div>
  );
}

export default App;
