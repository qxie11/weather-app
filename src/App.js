import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Redirect } from 'react-router'
import { history } from './store/store';

function App() {
  return (
      <ConnectedRouter history={history}>
          <Switch>
              <Route exact path="/search" render={() => <div>search</div>} />
              <Route exact path="/city-id" render={() => <div>city id</div>} />
              <Route exact path="/city-id/details" render={() => <div>details</div>} />
              <Route exact path="/favorites" render={() => <div>favorites</div>} />
              <Redirect to="/search" />
          </Switch>
      </ConnectedRouter>
  );
}

export default App;
