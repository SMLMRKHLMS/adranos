import { browserHistory, IndexRoute, Redirect, Route, Router } from 'react-router';
import Content from './components/Content/Content';
import Home from './components/Home/Home';

class App {
  constructor() {
    this.state = { mountPoint: '#app' };
  }
  init() {
    const { mountPoint } = this.state;
    ReactDOM.render((
      <Router history={ browserHistory }>
        <Route path="/" component={ Content }>
          <IndexRoute component={ Home } />
          <Redirect from="*" to="/" />
        </Route>
      </Router>
    ), document.querySelector(mountPoint));
  }
}

new App().init();
