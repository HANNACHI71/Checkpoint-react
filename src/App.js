import "./App.css"
import NavBar from './NavBar';
import Badghead from './Badge';
import Cardstr from './Carousel';
import GroupCard from './Cards';


function App() {
  return (
    <div className="App">
    
      <div>
        <NavBar/>
        </div>
        <div>
        <Badghead/>
        </div>
        <div>
        <Cardstr/>
        </div>
        <div>
          
        <GroupCard/>
      </div>

    </div>
  );
}
export default App;
