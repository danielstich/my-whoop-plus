import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Main from "./pages/Main/Main";
import Start1 from "./pages/Start-1/Start1";
import Start2 from "./pages/Start-2/Start2";
import Final from "./pages/Final/Final";
import Facebook from "./pages/Facebook/Facebook";

import Notifications from "./pages/Notifications/Notifications";

import YogaPage from "./components/YogaPage/YogaPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Redirect exact from="/" to="/Start-1" />
          <Route path="/Start-1" component={Start1} />
          <Route path="/Start-2" component={Start2} />
          <Route path="/Main" exact component={Main} />
          <Route path="/Notifications" component={Notifications} />
          <Route path='/Facebook' component={Facebook}></Route>
          <Route path="/Final" component={Final}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
