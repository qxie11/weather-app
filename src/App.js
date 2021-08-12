import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Redirect } from 'react-router'
import { history } from './store/store';

// Components
import Spinner from './components/shared/Spinner';
const SearchPage = React.lazy(() => import('./pages/SearchPage'));

function App() {
  return (
      <ConnectedRouter history={history}>
          <Switch>
              <Route exact path="/search" render={() => <React.Suspense fallback={<Spinner />}>
                  <SearchPage />
              </React.Suspense>} />
              <Route exact path="/city-id" render={() => <div>city id</div>} />
              <Route exact path="/city-id/details" render={() => <div>details</div>} />
              <Route exact path="/favorites" render={() => <div>favorites</div>} />
              <Redirect to="/search" />
          </Switch>
      </ConnectedRouter>
  );
}

export default App;
