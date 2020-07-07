
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

    let i = 0
    // on load left arrow is not appearing
    chevronLeft.classList.add('disappear');

    arrowRight.addEventListener('click', () => {
        // on click numerate through podcast episode by clicking right
        if (i < episodes.length - 1) {
            i++
            epiNum.innerHTML = `Episode ${episodes[i].episode}`
            epiTitle.innerHTML = `${episodes[i].title}`;
            epiDescription.innerHTML = `${episodes[i].description}`;
            console.log(i)
            console.log(episodes.length)
        }
        // make right arrow disappear when you get to the end of the list
        if (i === episodes.length - 1) {
            chevronRight.classList.add('disappear')
        }

        if (i >= 1) {
            chevronLeft.classList.remove('disappear')
        }
    })

    // on click numerate through podcast episode by clicking left
    arrowLeft.addEventListener('click', () => {
        if (i) {
            i--
            epiNum.innerHTML = `Episode ${episodes[i].episode}`;
            epiTitle.innerHTML = `${episodes[i].title}`;
            epiDescription.innerHTML = `${episodes[i].description}`;
            console.log(i)
        }
        // make right arrow reappear on click
        if (i !== episodes.length - 1) {
            chevronRight.classList.remove('disappear')
        } // make left arrow disappear at the end of the list
        if (i === 0) {
            chevronLeft.classList.add('disappear')
        }

    })
}

xhr.open('GET', 'data/episodes.json', true);
xhr.setRequestHeader("content-type", "application/json");
xhr.send();
