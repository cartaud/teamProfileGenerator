const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('test1', () => {
        it('describe test one here' , () => {
            //test set up
            const manager = new Manager()

            expect('test here').toEqual('what should test equal')
        })
    });

    describe('test2', () => {
        it('describe test two here' , () => {
            //test set up

            expect('test here').toEqual('what should test equal')
        })
    });
})