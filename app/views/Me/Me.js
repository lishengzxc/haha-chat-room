var React = require('react');
var styles = require('./Me.scss');

var SexSwitch = require('../SexSwitch/SexSwitch');

var Store = require('../../stores/stores');
var getSexValue = Store.getSex;
var getNameValue = Store.getName;

var Me = React.createClass({

  getInitialState: function () {
    return {
      sex: getSexValue(),
      inputDisplay: false
    }
  },

  componentDidMount: function () {
    Store.addChangeListener(this.onChangeSex);
  },

  componentWillUnmount: function () {
    Store.removeChangeListener(this.onChangeSex);
  },

  onChangeSex: function () {
    this.setState({
      sex: Store.getSex()
    });
  },

  showEdit: function () {
    this.setState({
      inputDisplay: !this.state.inputDisplay
    });
  },

  changeName: function (event) {
    event.preventDefault();
    this.setState({
      inputDisplay: !this.state.inputDisplay
    });
  },

  render: function () {
    var sex = this.state.sex ? '2' : '1';
    var isEdit = this.state.inputDisplay ? 'flex' : 'none';
    return (
      <div className={styles.me}>
        <img src={"img/avatar" + sex + ".svg"} />
        <p onClick={this.showEdit} className={styles.name} style={{
          display: this.state.inputDisplay ? 'none' : 'block'
        }}>{getNameValue()} <i className={"fa fa-pencil-square-o " + styles.edit}></i></p>
        <form className={styles.inputgroup} style={{
          display: isEdit
        }} onSubmit={this.changeName}>
          <input className={styles.nameinput} type="text" defaultValue={getNameValue()} />
          <button className={styles.submit} type="submit"><i className="fa fa-check"></i></button>
        </form>
        <SexSwitch />
      </div>
    )
  }
});

module.exports = Me;