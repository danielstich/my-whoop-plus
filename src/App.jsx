import './App.scss';
import home from './assets/home_screen.jpeg';
import OccupationSearch from './components/OccupationSearch/OccupationSearch';

function App() {
  return (
    <div className="App">
      <img className='App__img' src={home} alt="" />
      <div className="App__container">
        <div className='App__occupation-search'>
          <OccupationSearch />
        </div>
      </div>
    </div>
  );
}

export default App;
