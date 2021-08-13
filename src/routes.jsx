import { Redirect, Route, Switch } from "react-router";
import { lazy, Suspense } from "react";
import Spinner from "./components/shared/Spinner";
import IntegerParamGuard from "./guards/IntegerParamGuard";
const SearchPage = lazy(() => import('./pages/SearchPage'));
const CityIdPage = lazy(() => import('./pages/CityIdPage'));
const CityDetailPage = lazy(() => import('./pages/CityDetailPage'));

const Routes = () => (
   <Switch>
       <Route exact path="/search" render={() => <Suspense fallback={<Spinner />}>
             <SearchPage />
       </Suspense>} />
       <Route exact path="/:cityId" render={() => <Suspense fallback={<Spinner />}>
           <IntegerParamGuard paramName="cityId">
               <CityIdPage />
           </IntegerParamGuard>
       </Suspense>} />
       <Route exact path="/:cityId/detail" render={() => <Suspense fallback={<Spinner />}>
           <IntegerParamGuard paramName="cityId">
               <CityDetailPage />
           </IntegerParamGuard>
       </Suspense>} />
       <Route exact path="/favorites" render={() => <div>favorites</div>} />
       <Redirect to="/search" />
   </Switch>
);

export default Routes;