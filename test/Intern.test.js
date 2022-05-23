const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('test1', () => {
        it('describe test one here' , () => {
            //test set up
            const intern = new Intern()

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