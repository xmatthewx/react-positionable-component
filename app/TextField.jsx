"use strict";

var React = require("react/dist/react.min");

var TextField = React.createClass({
  getInitialState: function() {
    return { value: "" };
  },
  render: function() {
    return <input type="text" value={this.state.value} onChange={this.update}/>
  },
  update: function(evt) {
    this.setState({
      value: evt.target.value
    });
  }
})

module.exports = TextField;
