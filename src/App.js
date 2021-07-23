import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoute from './components/routes/ProtectedRoute';
import AirInformation from './components/airInformation/AirInformation'
import Form from './components/Form/UserForm'


//Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>      
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={AirInformation} />
          <ProtectedRoute exact path="/form" component={Form} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
