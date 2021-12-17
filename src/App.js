import Nav from './Nav'
import Boat from './Boat'

function App() {
  return (
    <div className="App">
      <Boat></Boat> 
      {/* everything below is not absolutely positioned */}
      <Nav></Nav>
    </div>
  );
}

export default App;
