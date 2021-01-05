import './css/App.css';
import { Switch, Route } from 'react-router-dom'

import Main from './pages'

function App() {
  return (
    <Switch>
      <Route path="/" component={Main}/>
    </Switch>
  );
}

export default App;
