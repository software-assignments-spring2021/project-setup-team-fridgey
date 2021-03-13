import logo from "./logo.svg";
import "./App.css";
import "./StorageTimeSearch.css"
import NavBar from "./NavBar";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Storage-Time-Search" exact component={StorageTimeSearch}/>
          <Route path="/Recommendations" component={Recommendations}/>
          <Route path="/Storage-Time-Search/List" component={StorageTimeSearchList}/>
        </Switch>
      </Router>
    </div>
  );
};

const Home = () => (
  <div>
    <NavBar />
    <header className="App-header">
      <h1> Fridgey </h1>
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
  </div>
);

const StorageTimeSearch = () => (
  <div>
    <NavBar/>
    <header className="App-header">
      <h1>Storage Time Search</h1>
      <Grid container direction="row" justify="center" className="TopRow">
        <Link to="/Storage-Time-Search/List">
          <Grid item>
            <Button variant="contained" className="GridButton" id="Button1">
              Fruits
            </Button>
          </Grid>
        </Link>
        <Link to="/Storage-Time-Search/List">
          <Grid item>
            <Button variant="contained" className="GridButton">
              Meats
            </Button>
          </Grid>
        </Link>
      </Grid>
      <Grid container direction="row" justify="center">
        <Link to="/Storage-Time-Search/List">
          <Grid item>
            <Button variant="contained" className="GridButton" id="Button2">
              Dairy
            </Button>
          </Grid>
        </Link>
        <Link to="/Storage-Time-Search/List">
          <Grid item>
            <Button variant="contained" className="GridButton">
              Grain
            </Button>
          </Grid>
        </Link>
      </Grid>
    </header>
  </div>
);

const StorageTimeSearchList = () => (
  <div>
    <Link to="/Storage-Time-Search">Back</Link>
    <header className="App-header">
      <h1>LIST</h1>
    </header>
  </div>
);

const Recommendations = () => (
  <div>
    <NavBar/>
    <header className="App-header">
      <h1>Yuh</h1>
    </header>
  </div>
);

export default App;
