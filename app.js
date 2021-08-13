let slider = document.querySelector('.slider');
let innerSlider = document.querySelector('.slider-inner');

let pressed = false;
let startX;
let X;

// Habilitando que el slider se mueva con el ratón en un navegador de computadora
slider.addEventListener('mousedown', function(e) {
  pressed = true;
  startX = e.offsetX - innerSlider.offsetLeft;
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

// Habilitadno que funcione el slider en el navegador de móviles
slider.addEventListener('touchstart', function(e) {
  pressed = true;
  startX = e.touches[0].pageX - innerSlider.offsetLeft;
});

slider.addEventListener('touchmove', function(e) {
  if (!pressed) return;
  e.preventDefault();
  X = e.touches[0].pageX
  innerSlider.style.left = `${X-startX}px`;
  checkBoundary();
});

slider.addEventListener('touchend', function(e) {
  pressed = false;
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