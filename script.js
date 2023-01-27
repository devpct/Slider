let slide = document.querySelector('.slide')
let images = ['img1.jpg','img2.jpg','img3.jpg']

let i = 1

function autoPlay (){
    if(i == images.length){
        i = 0
    }
    slide.style.backgroundImage = 'url(' + images[i] + ')'
    i++
}

setInterval(autoPlay,2000)