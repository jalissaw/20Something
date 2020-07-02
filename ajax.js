
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
        if (i < episodes.length) {
            epiNum.innerHTML = `Episode ${episodes[i].episode}`
            epiTitle.innerHTML = `${episodes[i].title}`;
            epiDescription.innerHTML = `${episodes[i].description}`;
            i++

        }
    })
    arrowLeft.addEventListener('click', () => {
        if (i <= episodes.length) {
            i--
            epiNum.innerHTML = `Episode ${episodes[i].episode}`;
            epiTitle.innerHTML = `${episodes[i].title}`;
            epiDescription.innerHTML = `${episodes[i].description}`;
            console.log(i)
        } else i = 0;

    })
}

xhr.open('GET', 'data/episodes.json', true);
xhr.setRequestHeader("content-type", "application/json");
xhr.send();