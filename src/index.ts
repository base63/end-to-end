import 'mocha'


describe('base63fe', function () {
    describe('home page', function() {
        it('contains text', function() {
            cy.visit('http://localhost:10003/');
            cy.contains('Home page');
        });

        it('links to admin page', function() {
            cy.visit('http://localhost:10003/');
            cy.contains('Admin').click();
            cy.contains('Admin page');
        });
    });

    describe('admin page', function() {
        it('contains text', function() {
            cy.visit('http://localhost:10003/admin');
            cy.contains('Admin page');
        });

        it('links to home page', function() {
            cy.visit('http://localhost:10003/admin');
            cy.contains('Home').click();
            cy.contains('Home page');
        });
    });
});


describe('blogfe', function () {
    describe('home page', function() {
        it('contains text', function() {
            cy.visit('http://localhost:10004/');
            cy.contains('Home page');
        });

        it('links to post page', function() {
            cy.visit('http://localhost:10004/');
            cy.contains('Post').click();
            cy.contains('A post page');
        });
    });

    describe('post page', function() {
        it('contains text', function() {
            cy.visit('http://localhost:10004/post');
            cy.contains('A post page');
        });

        it('links to home page', function() {
            cy.visit('http://localhost:10004/post');
            cy.contains('Home').click();
            cy.contains('Home page');
        });
    });
});
