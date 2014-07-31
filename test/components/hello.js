
var assert = require("assert");
var React = require('react');
var ReactTestUtils = require('react/lib/ReactTestUtils');

var Hello = require("src/components/hello");


describe('Hello component unit test', function() {

	var component = ReactTestUtils.renderIntoDocument(Hello({content: "ahoj", neco: "neco"}));
	var stringComponent = React.renderComponentToString(Hello({content: "ahoj", neco: "neco"}));
  
	describe('Test component props', function() {

		it('Component pass right props to content', function() {
			assert.equal(component.getDOMNode().outerText, "ahoj");
		})

		it('Component change their content after click', function() {
			ReactTestUtils.Simulate.click(component.getDOMNode());
			assert.equal(component.getDOMNode().outerText, "zmena");
		})

	})

})