import './App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Main from './pages/Main/Main';
import Start1 from './pages/Start-1/Start1';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Redirect exact from='/' to='/Main'/>
          <Route path='/Start-1' component={Start1} />
          {/* <Route path='/Start-2' component={Start-2} /> */}
          <Route path='/Main' exact component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
