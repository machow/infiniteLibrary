describe("Cartesian", function(){
    var cart = require('../src/cartesian.js');
    it("can get the first product of ['a','b'], ['x','y']", function(){
        expect(cart.cartesianN([['a', 'b'], ['x','y']], 0)).toEqual(['a', 'x']);
    });

    it("can get the final product of ['a','b'], ['x','y']", function(){
        expect(cart.cartesianN([['a', 'b'], ['x','y']], 3)).toEqual(['b', 'y']);
    });
});
