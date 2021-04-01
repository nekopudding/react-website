import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Experiences } from './Experiences';
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
              <Route exact path="/about" component={About} /> {/*Route defines routes */}
              <Route path="/projects" component={Projects} />
              <Route path='/experiences' component={Experiences} />
              <Route path="/contact" component={Contact} />
              <Route component={About} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
