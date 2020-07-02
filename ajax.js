
const arrowLeft = document.querySelector('.left');
const arrowRight = document.querySelector('.right');
const chevronLeft = document.querySelector('.fa-chevron-left')
const chevronRight = document.querySelector('.fa-chevron-right')
const epiNum = document.querySelector('.episodenum');
const epiTitle = document.querySelector('.episodetitle');
const epiDescription = document.querySelector('.episodedescription')


const xhr = new XMLHttpRequest();

xhr.onload = function () {
    const episodes = JSON.parse(this.responseText);
    let i = 1
    arrowRight.addEventListener('click', () => {
        function episodeNumber() {
            if (i < episodes.length) {
                epiNum.innerHTML = `Episode ${episodes[i].episode}`
                epiTitle.innerHTML = `${episodes[i].title}`;
                epiDescription.innerHTML = `${episodes[i].description}`;
                i++
                console.log(i)
                console.log(episodes[i].episode)
                console.log(episodes[i].title)
            } else episodeNumberLeft()


        }
        episodeNumber()
    })
    arrowLeft.addEventListener('click', () => {
        function episodeNumberLeft() {
            console.log('clicked')


        }
        episodeNumberLeft()
    })
}

xhr.open('GET', 'data/episodes.json', true);
xhr.setRequestHeader("content-type", "application/json");
xhr.send();