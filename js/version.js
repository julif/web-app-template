var items = document.getElementById( 'version' ),
divs = document.getElementsByClassName( 'version' );
[].slice.call( divs ).forEach(function ( div ) {
    div.innerHTML = items.innerHTML;
}); 