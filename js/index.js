const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors){
    anchor.addEventListener('click', function(event){
        event.preventDefault();
        const blockId = anchor.getAttribute('href');
        document.querySelector("" + blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const listElem = document.querySelector('.slider__list');

const prev = function() {
    let x = listElem.style.transform;

    if(!x) {x=0;}
    else{
        x= x.replace('translateX(','');
        x= x.replace('%)','');
        x = Math.abs(x);    
    }

    x-=52;
   
    listElem.style.transform = `translateX(-${x}%)`;
}


function next() {
    let x = listElem.style.transform;

        if(!x) {x=0;}
        else{
            x= x.replace('translateX(','');
            x= x.replace('%)','');
            x = Math.abs(x);    
        }
 
        x+=52;
        const stopPoint = (listElem.children.length -2)*52;
        if(x<= stopPoint) listElem.style.transform = `translateX(-${x}%)`;
        if(x>stopPoint)  listElem.style.transform = `translateX(-${0}%)`;

}

btnNext.addEventListener('click', next);
btnPrev.addEventListener('click', prev);