const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('testing get methods', () => {
        const intern = new Intern('Chadd', 23, 'chadd@chadd.com', 'University of Nevada, Reno')
        it('getName method should return the interns name' , () => {
            expect(intern.getName()).toBe('Chadd')
        })

        it('getId method should return the interns ID' , () => {
            expect(intern.getId()).toBe(23)
        })

        it('getEmail method should return the interns email' , () => {
            expect(intern.getEmail()).toBe('chadd@chadd.com')
        })

        it('getGitHub method should return the interns university' , () => {
            expect(intern.getSchool()).toBe('University of Nevada, Reno')
        })

        it('getRole method should return the interns role' , () => {
            expect(intern.getRole()).toBe('Intern')
        })
    });
})