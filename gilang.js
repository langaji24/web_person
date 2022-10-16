document.addEventListener('mousemove', function(e) {
    /* $('#circle').show() */;
  let body = document.querySelector('body');
  let circle = document.getElementById('circle');
  let left = e.offsetX;
  let top = e.offsetY;
    circle.style.display = 'block';
  circle.style.left = left + 'px';
  circle.style.top = top + 'px';
});