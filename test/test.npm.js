describe('handlebarsify', function () {
    it('should render with npm handlebars module', function () {
        expect(window.template({
            name: 'joo'
        })).to.be('hello joo\n');
    });
});
