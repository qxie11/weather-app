import { ConnectedRouter } from 'connected-react-router';
import { history } from './store/store';

// Components
import Routes from "./routes";

function App() {
  return (
      <ConnectedRouter history={history}>
          <Routes />
      </ConnectedRouter>
  );
}

export default App;
