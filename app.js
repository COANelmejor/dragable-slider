let slider = document.querySelector('.slider');
let innerSlider = document.querySelector('.slider-inner');

let pressed = false;
let startX;
let X;

slider.addEventListener('mousedown', function(e) {
  pressed = true;
  startX = e.offsetX - innerSlider.offsetLeft;
  console.log({startX, offsetLeft:innerSlider.offsetLeft});
  slider.style.cursor = 'grabbing';
});

slider.addEventListener('mouseenter', function(e) {
  slider.style.cursor = 'grab';
}),

slider.addEventListener('mouseup', function(e) {
  pressed = false;
  slider.style.cursor = 'grab';
});

slider.addEventListener('mousemove', function(e) {
  if(!pressed) return;
  e.preventDefault();
  X = e.offsetX
  innerSlider.style.left = `${X-startX}px`;
  checkBoundary();
});

function checkBoundary() {
  let outer = slider.getBoundingClientRect();
  let inner = innerSlider.getBoundingClientRect();
  if(parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = '0px';
  } else if(inner.right < outer.right) {
    innerSlider.style.left = `-${inner.width-outer.width}px`;
  }
}