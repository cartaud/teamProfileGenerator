const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('testing get methods', () => {
        const engineer = new Engineer('Chadd', 23, 'chadd@chadd.com', 'cartaud')
        it('getName method should return the engineers name' , () => {
            expect(engineer.getName()).toBe('Chadd')
        })

        it('getId method should return the engineers ID' , () => {
            expect(engineer.getId()).toBe(23)
        })

        it('getEmail method should return the engineers email' , () => {
            expect(engineer.getEmail()).toBe('chadd@chadd.com')
        })

        it('getGitHub method should return the engineers github' , () => {
            expect(engineer.getGitHub()).toBe('cartaud')
        })

        it('getRole method should return the engineers role' , () => {
            expect(engineer.getRole()).toBe('Engineer')
        })
    });
})