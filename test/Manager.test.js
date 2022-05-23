const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('testing get methods', () => {
        const manager = new Manager('Chadd', 23, 'chadd@chadd.com', 1)
        it('getName method should return the manager name' , () => {
            expect(manager.getName()).toBe('Chadd')
        })

        it('getId method should return the manager ID' , () => {
            expect(manager.getId()).toBe(23)
        })

        it('getEmail method should return the manager email' , () => {
            expect(manager.getEmail()).toBe('chadd@chadd.com')
        })

        it('getOfficeNumber method should return the manager university' , () => {
            expect(manager.getOfficeNumber()).toBe(1)
        })

        it('getRole method should return the manager role' , () => {
            expect(manager.getRole()).toBe('Manager')
        })
    });
})