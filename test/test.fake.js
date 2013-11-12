describe('handlebarsify', function () {
    it('should render with custom handlebars module', function () {
        expect(window.template({
            name: 'joo'
        })).to.be('fake string');
    });
});
