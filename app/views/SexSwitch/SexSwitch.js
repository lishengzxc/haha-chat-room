var React = require('react');
var styles = require('./SexSwitch.scss');

var Switch = require('../Switch/Switch');

var changeSex = require('../../actions/changeSex');
var Store = require('../../stores/stores');
var getSexValue = Store.getSex;

var SexSwitch = React.createClass({

  getInitialState: function () {
    return {
      sex: getSexValue()
    }
  },

  componentDidMount: function () {
    Store.addChangeListener(this.onChangeSex);
  },

  componentWillUnmount: function () {
    Store.removeChangeListener(this.onChangeSex);
  },

  getSex: function () {
    changeSex.emitChangeSex();
  },

  onChangeSex: function () {
    this.setState({
      sex: Store.getSex()
    });
  },

  render: function () {
    return (
      <div className={styles.sex} onClick={this.getSex} >
        <p className={styles.content}>{this.state.sex ? '女生' : '男生'}</p>
        <Switch ref="switch" check={this.state.sex}/>
      </div>
    );
  }
});

module.exports = SexSwitch;