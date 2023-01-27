const slide = document.querySelector('.slide')
const chevronLeft = document.querySelector('.chevron-left')
const chevronRight = document.querySelector('.chevron-right')

let images = ['img1.jpg','img2.jpg','img3.jpg']

let i = 1

let chevronSlide = false

//autoplay 

function autoPlay (){
    if (!chevronSlide) {   
        if(i == images.length){
            i = 0
        }
        slide.style.backgroundImage = 'url(' + images[i] + ')'
        i++
    }
    chevronSlide = false
}

setInterval(autoPlay,3000)

//chevron

chevronLeft.addEventListener('click',()=>{
    chevronLeft.style.cssText = 'animation: chevron 0.5s;'
    chevronSlide = true
    i--
    if(i < 0){
        i = 2
    }
    slide.style.backgroundImage = 'url(' + images[i] + ')'
})

chevronRight.addEventListener('click',()=>{
    chevronRight.style.cssText = 'animation: chevron 0.5s;'
    chevronSlide = true
    i++
    if(i > 2){
        i = 0
    }
    slide.style.backgroundImage = 'url(' + images[i] + ')'
})

setInterval(()=>{
    chevronLeft.style.cssText = 'animation: 0;'
    chevronRight.style.cssText = 'animation: 0;'
},200)
