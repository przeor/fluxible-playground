'use strict';
var React = require('react');

var Login = React.createClass({
  getInitialState: function () {
      return {};
  },
  handleSubmit: function () {
      return {};
  },
  render: function() {
  return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label><input ref="email" placeholder="email" defaultValue="joe@example.com"/></label>
          <label><input ref="pass" placeholder="password"/></label> (hint: password1)<br/>
          <button type="submit">login</button>
        </form>
      </div>
    );
  }
});

module.exports = Login;
