test('global Handlebars', function () {
    equal(window.test({
        name: 'joo'
    }), 'hello joo', 'handlebars render should success');
});

test( "equal test", function() {
    equal( 0, 0, "Zero; equal succeeds" );
    equal( "", 0, "Empty, Zero; equal succeeds" );
    equal( "", "", "Empty, Empty; equal succeeds" );
    equal( 0, 0, "Zero, Zero; equal succeeds" );

    equal( "three", 3, "Three, 3; equal fails" );
    equal( null, false, "null, false; equal fails" );
});
