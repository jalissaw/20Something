
const xhr = new XMLHttpRequest();

xhr.onload = function () {
    console.log(xhr.responseText)
}

xhr.open("GET", 'https://api.soundcloud.com/tracks?client_id=Spgf2MUV4o55Tj3QFY6XWyhwZ5Cf277X', true);
xhr.send();