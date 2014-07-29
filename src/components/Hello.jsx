/**
 * @jsx React.DOM
 */

var React = require('react');
var css = require("./Hello.css");


var Hello = React.createClass({

    render: function() {
        return (
            <div className="hello">
                <div>Hello</div>
            </div>
        );
    }

});

module.exports = Hello;