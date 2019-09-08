import React, { Component }from 'react';
import Layout from './containers/layout'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {

  render() {
      return (
        <React.Fragment>
          <BrowserRouter>
            <Layout/>
            {/* <Switch>
              <Route path="/" component={Layout}/>
            </Switch> */}
          </BrowserRouter>
        </React.Fragment>
      );
  }
}

export default App;
