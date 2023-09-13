import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import MainPage from "../pages/MainPage";
import Shop from "../pages/Shop/Shop";
import Cart from "../cart/Cart";
import SelectedItem from "../pages/SelectedItem";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import UnderConstructionPage from "../pages/UnderConstructionPage";
import Authorization from "../authorization/Authorization";

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
                <Route path="/blog">
                    <UnderConstructionPage/>
                </Route>
                <Route path="/story">
                    <UnderConstructionPage/>
                </Route>
                <Route path="/search">
                    <UnderConstructionPage/>
                </Route>
                <Route path="/profile">
                    <UnderConstructionPage/>
                </Route>
                <Route path="*">
                    <ErrorPage/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;