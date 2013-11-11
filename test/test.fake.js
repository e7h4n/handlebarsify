test('global Handlebars', function () {
    equal(window.test({
        name: 'joo'
    }), 'fake string', 'fake handlebars render should success');
});
