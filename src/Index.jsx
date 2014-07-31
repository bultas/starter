/**
 * @jsx React.DOM
 */


var React = require("react");
var Hello = require("components/hello");
var Fonts = require("../assets/fonts/opensans.css");
var CSS = require("../assets/css/app.css");


var App = React.createClass({

    render: function() {
        return (
            <div id="app" className="app">
                <Hello content="ahoj" />
            </div>   
        );
    }

});


// Render component to HTML
React.renderComponent(
  App(),
  document.body
);






