import Nav from './Nav'
import Boat from './Boat'

function App() {
  return (
    <div className="App">
      <Boat></Boat> 
      {/* everything below is not absolutely positioned */}
      <div className='landing'>
        <Nav></Nav>
      </div>
      <div name="creators"></div>
    </div>
  );
}

export default App;
