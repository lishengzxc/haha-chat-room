var React = require('react');
var Router = require('react-router');
var styles = require('./app.scss');

var TopBar = require('./views/TopBar/TopBar');
var FootBar = require('./views/FootBar/FootBar');

var RouteHandler = Router.RouteHandler;

var App = React.createClass({

  componentDidMount: function () {
    
  },

  render: function () {
    return (
      <div>
        <TopBar title={window.location.hash.substr(2)}/>
        <div className="page">
          <RouteHandler />
        </div>
        <FootBar status={window.location.hash.substr(2)}/>
      </div>
    )
  }
});

module.exports = App;
