import { Redirect, Route, Switch } from "react-router";
import { lazy, Suspense } from "react";
import Spinner from "./components/shared/Spinner";
const SearchPage = lazy(() => import('./pages/SearchPage'));
const CityIdPage = lazy(() => import('./pages/CityIdPage'));

const Routes = () => (
   <Switch>
       <Route exact path="/search" render={() => <Suspense fallback={<Spinner />}>
             <SearchPage />
       </Suspense>} />
       <Route exact path="/:cityId" render={() => <Suspense fallback={<Spinner />}>
           <CityIdPage />
       </Suspense>} />
       <Route exact path="/:cityId/detail" render={() => <div>details</div>} />
       <Route exact path="/favorites" render={() => <div>favorites</div>} />
       <Redirect to="/search" />
   </Switch>
);

export default Routes;