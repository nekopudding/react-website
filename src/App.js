import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Works } from './Works';
import { About } from './About';
import { Contact } from './Contact';
import { Projects } from './Projects';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';


//using React.Fragment just explicitly wraps everything as html
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/react-website/" component={About} /> {/*Route defines routes */}
              <Route path="/react-website/projects" component={Projects} />
              <Route path='/react-website/works' component={Works} />
              <Route path="/react-website/contact" component={Contact} />
              <Route component={About} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
