
var assert = require("assert");
var count = require("src/utils/count");


describe('Utils testing', function(){
  describe('test uno', function(){
    it('should be fine (:', function(){
      assert.equal(count(1,1), 2);
    })
  })
})