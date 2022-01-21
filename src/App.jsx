<<<<<<< HEAD
import "./App.scss";
import home from "./assets/home_screen.jpeg";
import OccupationSearch from "./components/OccupationSearch/OccupationSearch";
import Water from "./components/DrinkWater/DrinkWater";
=======
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Main from './pages/Main/Main';
import Start1 from './pages/Start-1/Start1';
import Start2 from './pages/Start-2/Start2';
>>>>>>> ffeebf110ae6f1950044e9cda2cd56863a1a2135

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <img className="App__img" src={home} alt="" />
      <div className="App__container">
        <Water />
        {/* <OccupationSearch /> */}
      </div>
=======
      <Router>
        <Switch>
          <Redirect exact from='/' to='/Start-1'/>
          <Route path='/Start-1' component={Start1} />
          <Route path='/Start-2' component={Start2} />
          <Route path='/Main' exact component={Main} />
        </Switch>
      </Router>
>>>>>>> ffeebf110ae6f1950044e9cda2cd56863a1a2135
    </div>
  );
}

export default App;
