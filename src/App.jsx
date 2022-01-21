import "./App.scss";
import home from "./assets/home_screen.jpeg";
import OccupationSearch from "./components/OccupationSearch/OccupationSearch";
import Water from "./components/DrinkWater/DrinkWater";

function App() {
  return (
    <div className="App">
      <img className="App__img" src={home} alt="" />
      <div className="App__container">
        <Water />
        {/* <OccupationSearch /> */}
      </div>
    </div>
  );
}

export default App;
