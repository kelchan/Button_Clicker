function login( input ) {
    console.log( input.innerText );
    if( input.innerText === 'Login' ) {
        input.innerText = 'Logout';
    }
    else if( input.innerText === 'Logout' ) {
        input.innerText = 'Login';
    }
}

function hide( input ) {
    input.remove();
}

function increaseLike( input ) {
    var num = input.innerText;
    num = parseInt(num);
    num++;
    input.innerText = num + ' Likes';
    alert( 'Ninja was liked' );
}