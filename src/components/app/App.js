import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import MainPage from "../pages/MainPage";
import Shop from "../pages/Shop";
import Cart from "../cart/Cart";
import SelectedItem from "../pages/SelectedItem";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <MainPage/>
                </Route>
                <Route exact path="/shop">
                    <Shop/>
                </Route>
                <Route exact path="/shop/:Id">
                    <SelectedItem/>
                </Route>
                <Route exact path="/cart">
                    <Cart/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;