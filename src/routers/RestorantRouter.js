import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { RestPrincipal } from "../components/restorant/RestPrincipal";
import { AuthRouter } from "./AuthRouter";


export const RestorantRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    
                        <Route 
                        path="/auth"
                        component={ AuthRouter }
                        />

                        <Route
                        exact 
                        path="/principal"
                        component={ RestPrincipal }
                        />

                        <Redirect to="/auth/login"/>

                </Switch>
            </div>
        </Router>
    )
}
