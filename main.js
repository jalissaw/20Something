const links = document.querySelectorAll('.link');
const video = document.querySelector('.overlay');
const logo = document.querySelector('.logo');
const podcastSect = document.querySelector('.pullmenu')
const menu = document.querySelector('.shownav')
const toggler = document.querySelector('.toggle')
const hamburger = document.querySelectorAll('.menuline')
const body = document.querySelector('body');
const words = document.querySelectorAll('.bounce p');
const bounceDiv = document.querySelector('.bounce')

//Change Color of background when you hover on links
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover', function () {
        const colors = ['purple', 'pink', 'hotpink', 'lightpurple',
            'plum', 'palevioletred', 'lightcoral', 'fuchsia']
        colors.forEach(color => {
            video.style.background = colors[Math.floor(Math.random() * colors.length)];
            video.style.opacity = 0.4;
            video.style.transition = 'ease-in 0.2s';
        });
    });
}

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseout', function () {
        const colors = ['']
        colors.forEach(color => {
            video.style.background = 'white';
        });

    })
}

// Nav comes in on scroll
window.addEventListener('scroll', function () {
    const nav = document.querySelector('.nav');
    const screenPosition = podcastSect.getBoundingClientRect().top;
    const position = window.innerHeight / 7;


    if (screenPosition < position) {
        nav.style.background = 'white';
        nav.style.borderBottom = '0.5px solid black'
        logo.style.color = 'white';
        logo.style.background = 'rgba(230, 10, 120, 0.6)';
    } else {
        nav.style.borderBottom = 'none'
        nav.style.background = 'transparent';
        logo.style.background = 'transparent';
        logo.style.color = 'black';
    }
});

//Have menu come in
toggler.addEventListener('click', function () {
    menu.classList.toggle('appear');
    for (var i = 0; i < hamburger.length; i++) {
        hamburger[i].classList.toggle('changeColor');
    }
})

//Change color of hamburger 

for (var i = 0; i < hamburger.length; i++) {
    // hamburger[i].style.background = 'white';
}

//Bounce words in podcast tab

for (let i = 0; i < words.length; i++) {
    setTimeout(function timer() {
        // const rect = words[i].getBoundingClientRect();
        // const positionY = rect.top + window.pageYOffset;
        // const positionX = rect.left + window.pageXOffset;
        // console.log(positionX)
        // console.log(positionY)

        let width = Math.floor(Math.random() * window.innerWidth);
        console.log(width + ":" + "width")
        let height = Math.floor(Math.random() * window.innerHeight);
        console.log(height + ":" + "height")
        words[i].style.transform = `translate(${width}px , ${height}px) `;
        words[i].style.transition = '1s ease-in-out';
    }, i * 2000);
}
// setInterval(bounceWords, 1000)
// bounceWords()W
// console.log(bounceDiv.offSetWidth)
console.log(innerHeight)
console.log(innerWidth)


// let myAnimation = anime({
//     targets: 'main',
//     opacity: 0.4,
//     borderRadius: 50,
//     transition: 500
// })