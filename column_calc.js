const FONT_WIDTH = 10.8;
const COLUMN_WIDTH = 500;
const LINE_HEIGHT = 36;

function update_columns() {
  let window_height = window.innerHeight;
  let contents = document.getElementsByClassName('content');

  for (let content of contents) {
    let p = content.querySelector('p');
    let l = p.innerHTML.length;
    let splits = (p.innerHTML.match(/<br>/g) || []).length / 2;
    let lines_count = splits + Math.ceil(FONT_WIDTH * l / COLUMN_WIDTH);
    let height = LINE_HEIGHT * lines_count + 100;
    let num_columns = Math.ceil(height / window_height);
    let width = 100 + 500 * num_columns + 100 * (num_columns - 1);
    p.style.width = width + 'px';
    console.log(lines_count);
  }

}

window.onresize = update_columns;

update_columns();
