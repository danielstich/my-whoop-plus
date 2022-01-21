import './App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Main from './pages/Main/Main';
import Start1 from './pages/Start-1/Start1';
import Start2 from './pages/Start-2/Start2';
import Notifications from './pages/Notifications/Notifications';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Redirect exact from='/' to='/Start-1'/>
          <Route path='/Start-1' component={Start1} />
          <Route path='/Start-2' component={Start2} />
          <Route path='/Main' exact component={Main} />
          <Route path='/Notifications' component={Notifications} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
