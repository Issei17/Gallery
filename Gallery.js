var galleryImages = document.querySelectorAll('.gallery-image img')
var galleryPrev = document.querySelector('.prev')
var galleryNext = document.querySelector('.next')
var galleryClose = document.querySelector('.gallery-close')
var galleryImg = document.querySelector('.gallery-pic img')
var gallery = document.querySelector('.gallery')

var currentIndex = 0;

function showGallery(){
    if(currentIndex == 0){
        galleryPrev.classList.add('hide')
    }else{
        galleryPrev.classList.remove('hide')
    }
    if(currentIndex == galleryImages.length - 1){
        galleryNext.classList.add('hide')
    }else{
        galleryNext.classList.remove('hide')
    }
    //display
    galleryImg.src = galleryImages[currentIndex].src
    gallery.classList.add('show')
}
galleryImages.forEach((item, index)=>{
    item.addEventListener('click', function(){
        currentIndex = index
        showGallery()
    })
})
galleryClose.addEventListener('click', function(){
    gallery.classList.remove('show')
})
document.addEventListener('keydown', function(e){
    if(e.keyCode == 27){
        gallery.classList.remove('show')
    }
})
galleryPrev.addEventListener('click', function(){
    if(currentIndex > 0 ){
        currentIndex--
        showGallery()
    }

})
galleryNext.addEventListener('click', function(){
    if(currentIndex < galleryImages.length -1 ){
        currentIndex++
        showGallery()
    }

})