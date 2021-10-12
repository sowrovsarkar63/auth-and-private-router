import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Notfound from "./Components/Notfound/Notfound";
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
                    <Route path="*">
                        <Notfound></Notfound>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
