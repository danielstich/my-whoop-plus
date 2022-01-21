import './App.scss';
import home from './assets/home_screen.jpeg';
import OccupationSearch from './components/OccupationSearch/OccupationSearch';

function App() {
  return (
    <div className="App">
      <img className='App__img' src={home} alt="" />
      <div className="App__container">
        <OccupationSearch />
        <h4 className='test'>Words on the page</h4>
      </div>
    </div>
  );
}

export default App;
