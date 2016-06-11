var pow = require('../js/pow.js');

describe("test", function() {
  it("pow function", function() {
      //prepare
         var result;
      //act
        result = pow(2, 5);
      //assert
        
        expect(result).toEqual(32);
  });
});