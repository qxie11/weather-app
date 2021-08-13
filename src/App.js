import { lazy, Suspense } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Redirect } from 'react-router'
import { history } from './store/store';

// Components
import Spinner from './components/shared/Spinner';
const SearchPage = lazy(() => import('./pages/SearchPage'));
const CityId = lazy(() => import('./pages/CityIdPage'));

function App() {
  return (
      <ConnectedRouter history={history}>
          <Switch>
              <Route exact path="/search" render={() => <Suspense fallback={<Spinner />}>
                  <SearchPage />
              </Suspense>} />
              <Route exact path="/:cityId" render={() => <Suspense fallback={<Spinner />}>
                  <CityId />
              </Suspense>} />
              <Route exact path="/city-id/details" render={() => <div>details</div>} />
              <Route exact path="/favorites" render={() => <div>favorites</div>} />
              <Redirect to="/search" />
          </Switch>
      </ConnectedRouter>
  );
}

export default App;
