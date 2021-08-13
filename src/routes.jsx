import { Redirect, Route, Switch } from "react-router";
import { lazy, Suspense } from "react";
import Spinner from "./components/shared/Spinner";
const SearchPage = lazy(() => import('./pages/SearchPage'));

const Routes = () => (
   <Switch>
       <Route exact path="/search" render={() => <Suspense fallback={<Spinner />}>
             <SearchPage />
       </Suspense>} />
       <Route exact path="/:cityId" render={() => <div>city id</div>} />
       <Route exact path="/city-id/details" render={() => <div>details</div>} />
       <Route exact path="/favorites" render={() => <div>favorites</div>} />
       <Redirect to="/search" />
   </Switch>
);

export default Routes;