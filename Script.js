Fancybox.bind( "[data-fancybox]" );
$( 'button' ).click( filterItems )
function filterItems() {
    let button = this;
    let selector = $( button ).data( 'filter' )
    console.log( selector )
    $( '.cs-item' ).not( selector ).hide(500);
    $( selector ).show(500);
}
