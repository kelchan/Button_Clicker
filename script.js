function login( input ) {
    input.innerText = 'Logout';
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