import React from 'react';
import ReactDOM from 'react-dom';
import Transition from 'react-addons-css-transition-group';
import Slider from './Slider';
import MetaInfo from './MetaBox';
import {Router, hashHistory, Route, Link} from 'react-router';

const App = React.createClass({
  render: function () {
    return (
      <div>
        <nav>
          <Link to="/slider">Slider</Link>
          <Link to="/metabox">Meta Box</Link>
        </nav>
        {this.props.children}
      </div>
    )
  }
});

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/slider" component={Slider}/>
      <Route path="/metabox" component={MetaInfo}/>
    </Route>
  </Router>
)

ReactDOM.render(router, document.querySelector('.container'))
