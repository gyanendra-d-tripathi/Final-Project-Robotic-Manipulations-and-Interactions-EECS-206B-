let body = document.body;
let html = document.documentElement;

window.addEventListener('wheel', function(e) {
  if (e.deltaY > 0) {
    body.scrollLeft += 100;
    html.scrollLeft += 100;
  } else {
    body.scrollLeft -= 100;
    html.scrollLeft -= 100;
  }
});
