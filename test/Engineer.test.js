const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('test1', () => {
        it('describe test one here' , () => {
            //test set up
            const engineer = new Engineer()

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