const links = document.querySelectorAll('.link');
const video = document.querySelector('.overlay');
const logo = document.querySelector('.logo');
const podcastSect = document.querySelector('.podcast')


for(var i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover', function (){
        const colors = ['purple', 'pink', 'hotpink', 'lightpurple', 'plum', 'palevioletred' ]
            colors.forEach(color => {
                video.style.background = colors[Math.floor(Math.random() * colors.length)]; 
                video.style.opacity = 0.4;
                video.style.transition = 'ease-in 0.2s';
                logo.style.fill = 'blue';
            });
        });
    }

for(var i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseout', function (){
        const colors = ['purple', 'pink', 'hotpink']
            colors.forEach(color => {
                video.style.background = 'white'; 
            });
        
    })
}

window.addEventListener('scroll', function() {
    console.log('scrolled')
    const nav = document.querySelector('.nav');
    const screenPosition = podcastSect.getBoundingClientRect().top;
    const position = window.innerHeight / 7 ;
    
    
    if (screenPosition < position) {
        nav.style.background = 'black';
        logo.style.background = 'rgba(230, 10, 120, 0.6)';
    } else {
        nav.style.background = 'transparent';
        logo.style.background = 'transparent';
    }

    // if(window.innerWidth > '650px') {
    //     nav.style.display = 'none'
    // }
})