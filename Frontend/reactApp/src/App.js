import React, {Component} from "react";
import './App.scss';
import './index.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

//Pages
import Header from "./components/Header";
import Navbar from "./components/navbar";
import HomePage from "./components/layouts/HomePage";
import PizzaSearch from "./components/layouts/buyingPage/PizzaSearchBar";
import PizzaSearchResult from "./components/layouts/buyingPage/PizzaSearchResults";
import NotFound from "./components/layouts/404";
import Footer from "./components/footer";
import EmployeesPage from "./components/layouts/managementPage/Employees/EmployeesPage";
import DeliveriesPage from "./components/layouts/managementPage/Deliveries/DeliveriesPage";
import PreparationPage from "./components/layouts/managementPage/Preparations/PreparationsPage"
import OrdersPage from "./components/layouts/managementPage/Orders/OrdersPage";
import PizzasPage from "./components/layouts/managementPage/Pizzas/PizzasPage";

function Menu() {
    return(
            <React.Fragment>
                <PizzaSearch />
                <div style={{paddingTop: "3%"}}>
                <PizzaSearchResult />
                </div>
            </React.Fragment>
    )
}

class App extends Component {
    render() {
        return <Router>
            <Header/>
            <Navbar/>
            <div style={{width: "60%", marginLeft: "20%", marginRight: "20%", marginBottom: "10%", paddingTop: "2%"}}>
            <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/employees" component={EmployeesPage}/>
            <Route exact path="/deliveries" component={DeliveriesPage}/>
            <Route exact path="/preppizzas" component={PreparationPage}/>
            <Route exact path="/orders" component={OrdersPage}/>
            <Route exact path="/pizzas" component={PizzasPage}/>
            <Route exact path="/menu" component={Menu}/>
            <Route exact path="/404" component={NotFound}/>
            <Redirect to="/404"/>
            </Switch>
            </div>
            <Footer/>
        </Router>
    }
}

export default App;


