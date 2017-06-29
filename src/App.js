import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import './style.css';
import AppMenu from './components/menu';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Home from './components/home';
import Patient from './containers/Patient';
import Patients from './containers/PatientList';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Charts from './components/charts';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Router>
          <div>
            <AppMenu></AppMenu>
            <Container>
              <Route path="/" exact={true} component={Home}/>
              <Route path="/signin" component={Signin}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/patients" component={Patients}/>
              <Route path="/patient" component={Patient}/>
<<<<<<< HEAD
=======
              <Route path="/charts" component={Charts}/>
>>>>>>> 547a9ddea41e5801ee9df5768c50bb9e460128c4
            </Container>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
