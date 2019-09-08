import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from "../routes"

const styleHomeComponent = {
    // maxHeight : '500px',
    // minWidth : '200px',
    // minHeight : '200px',
    border : '1px solid rgba(39, 64, 57, .7)',
    margin : '5px',
    borderRadius: '25px',
    backgroundColor: 'rgba(39, 64, 57, .8)',
    WebkitBoxShadow: '0px 3px 5px 0px rgba(0,0,0,0.4)',
    MozBoxShadow: '0px 3px 5px 0px rgba(0,0,0,0.4)',
    boxShadow: '0px 3px 5px 0px rgba(0,0,0,0.4)'
}
const Home = () => {
    return (
        <div className="container-fluid">
            <div className="col-md-6 col-lg-4 m-auto p-md-2 p-lg-5" style = {styleHomeComponent}>
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
            </div>
        </div>
    )
}

export default Home