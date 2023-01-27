let activeIndex = 0;

const group = document.querySelectorAll(".card-wrapper")
const likeButton = document.querySelector('#LikeButton')
const HateButton = document.querySelector('#HateButton')

likeButton.addEventListener('click', function(){

    const nextIndex = activeIndex + 1 <= group.length - 1 ? activeIndex + 1 : 0
    
    console.log(nextIndex)
    console.log(activeIndex)
    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`)
    const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`)
    
    currentGroup.dataset.status = "after"
    
    nextGroup.dataset.status = "becoming-after-from-before"
    
    setTimeout(() => {
        
        nextGroup.dataset.status = "active"
        activeIndex = nextIndex
    })
})


HateButton.addEventListener('click', function(){

    
    const previousIndex = activeIndex - 1  >= 0 ? activeIndex - 1 : group.length - 1
    
    
    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`)
    const previousGroup = document.querySelector(`[data-index="${previousIndex}"]`)
    
    currentGroup.dataset.status = "before"
    
    previousGroup.dataset.status = "becoming-before-from-after"
    
    setTimeout(() =>{
        
        previousGroup.dataset.status = "active"
        activeIndex = previousIndex
    })
})
