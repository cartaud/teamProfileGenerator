const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('testing get methods', () => {
        const employee = new Employee('Chadd', 23, 'chadd@chadd.com')
        it('getName method should return the employees name' , () => {
            expect(employee.getName()).toBe('Chadd')
        })

        it('getId method should return the employees ID' , () => {
            expect(employee.getId()).toBe(23)
        })

        it('getEmail method should return the employees email' , () => {
            expect(employee.getEmail()).toBe('chadd@chadd.com')
        })

        it('getRole method should return the employees role' , () => {
            expect(employee.getRole()).toBe('Employee')
        })
    });
})