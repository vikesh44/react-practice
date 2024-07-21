import Navbar from "./Navbar";
import Home from './Home';

function App() {
  const title = "I am Niya Mewada!";
  const likes = 3000;
  // const person = {name: 'Niya', age: 4};
  const link = "http://google.co.in";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
