import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header'

import routes from "../routes"

class Layout extends Component {

    render() {
        return (
          <React.Fragment>
            <Header/>
            <Switch>
                {routes.map((r, i) => {
                    return r.Component ? (
                    <Route 
                      key={i} 
                      path={r.path} 
                      exact={r.exact} 
                      render={p => <r.Component {...p}/>}/>
                      ) : null
                })}
            </Switch>
          </React.Fragment>
        );
    }
}

export default Layout;