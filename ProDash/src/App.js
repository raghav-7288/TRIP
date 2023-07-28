import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { ProFood } from "./components/Pages/ProFood";
import { ProRooms } from "./components/Pages/ProRooms";
import { ProTravel } from "./components/Pages/ProTravel";
import { ProShop } from "./components/Pages/ProShop";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ProFood" component={ProFood} />
            <Route path="/ProRooms" component={ProRooms} />
            <Route path="/ProShop" component={ProShop} />
            <Route path="/ProTravel" component={ProTravel} />

          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
