
var assert = require("assert");
var count = require( basePath + "/src/utils/count.js");

describe('Test modulo', function(){
  describe('test uno', function(){
    it('should be fine (:', function(){
      assert.equal(count(1,1), 2);
    })
  })
})