import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { AuthProvider } from "./AuthProvider"
import PrivateRoute from "./PrivateRoute"
import Home from "../Page/Home";
import Login from "../Page/Login";
import Formadd from "../components/Form/FormAdd";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer/Footer"
const AppRouter = () => {
    return (
        <AuthProvider>
            <Router>
                <NavBar />
                <Switch>
                    <PrivateRoute exact path="/" component={() => { return <Redirect to="/Home" /> }} />
                    <PrivateRoute path="/Home" component={Home} />
                    <Route path="/Login" component={Login} />
                    <Route path="/frmadd" component={Formadd} />
                    {/* <Route exact path="*" component={Error404} /> */}
                </Switch>
                <Footer />
            </Router>
        </AuthProvider>
    );
};

export default AppRouter;