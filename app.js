let slider = document.getElementById('slider')
let innerSlider = document.getElementById('inner-slider')

let press = false
let startX;
let x;

slider.addEventListener('mousedown',(e)=>{
    press = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = 'grabbing'
});

slider.addEventListener('mouseenter', ()=>{
    slider.style.cursor = 'grabbing'
});

slider.addEventListener('mouseup', ()=>{
    slider.style.cursor = 'grabbing'

});

window.addEventListener('mouseup', ()=>{
    press = false
})

slider.addEventListener('mousemove', (e)=>{
    if(!press) return;
    e.preventDefault()

    x = e.offsetX;
    // console.log(x,startX)

    innerSlider.style.left = `${x - startX}px`

    checkBoundary()
})

let checkBoundary = ()=>{
    let inner = innerSlider.getBoundingClientRect();
    let outer = slider.getBoundingClientRect();

    if(parseInt(innerSlider.style.left) > 0){
        innerSlider.style.left = '0px'
    }else if(inner.right < outer.right){
        innerSlider.style.left = `-${inner.width - outer.width}px`

    }
    console.log(inner.right, inner.width)
        console.log('hello')
        console.log(outer.right, outer.width)
}

checkBoundary();