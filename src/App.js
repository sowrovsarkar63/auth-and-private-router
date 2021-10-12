import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Home/Login";
import Register from "./Components/Register/Register";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/register">
                        <Register></Register>
                    </Route>
                    {/*  <Route path="*">
                        <NotFound></NotFound>
                    </Route> */}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
