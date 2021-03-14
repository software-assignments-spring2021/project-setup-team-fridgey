import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import MyFridge from "./MyFridge";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <NavBar />
            <header className="App-header">
              <h1 className="fridgey"> MyFridge </h1>
              <MyFridge />
              <img src={logo} className="App-logo" alt="logo" />
              <p>Fridgey</p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </Route>

          <Route path="/Storage-Time-Search">
            <NavBar />
            <header className="App-header">
              <h1> Hello </h1>
            </header>
          </Route>

          <Route path="/Recommendations">
            <NavBar />
            <header className="App-header">
              <h1> yuh </h1>
            </header>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
