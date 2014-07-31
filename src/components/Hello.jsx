/**
 * @jsx React.DOM
 */

var React = require('react');
var css = require("./hello.css");


var Hello = React.createClass({

	getInitialState: function() {
		return {
			content: this.props.content
		};
	},

	handleClick: function() {
	    this.setState({content: "zmena" });
	},

    render: function() {
        return (
            <div onClick={this.handleClick} className="hello">
                <h1>{this.state.content}</h1>
            </div>
        );
    }

});

module.exports = Hello;