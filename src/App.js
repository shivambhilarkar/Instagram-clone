import Login from "./components/Login";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home_comp from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route exact path="/home">
            <Home_comp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
