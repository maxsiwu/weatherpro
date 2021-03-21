import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/shared/header';
import Home from './components/home';
import Settings from "./components/settings";
import MyCityList from "./components/my-city-list";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/home" >
          <Home />
        </Route>
        <Route exact path="/settings" >
          <Settings />
        </Route>
        <Route exact path="/my-cities" >
          <MyCityList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
