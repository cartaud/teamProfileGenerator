const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('test1', () => {
        it('describe test one here' , () => {
            //test set up
            const employee = new Employee()

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