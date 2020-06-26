const links = document.querySelectorAll('.link')
const video = document.querySelector('.overlay')





for(var i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover', function (){
        const colors = ['purple', 'pink', 'hotpink', 'lightpurple', 'plum', 'palevioletred' ]
            colors.forEach(color => {
                video.style.background = colors[Math.floor(Math.random() * colors.length)]; 
                video.style.opacity = 0.3;
                video.style.transition = 'ease-in 0.2s'
                console.log(Math.random(color));
                
            });
        
    })
}

for(var i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseout', function (){
        const colors = ['purple', 'pink', 'hotpink']
            colors.forEach(color => {
                video.style.background = 'white'; 
            });
        
    })
}