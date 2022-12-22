
let view = document.getElementById('view');
let close = document.getElementById('close');
let icon = document.getElementById('icon');


let open = () => {
  icon.style.display = 'block';
  close.style.display = 'block';
}


let closeView = () => {
  close.style.display = 'none';
  icon.style.display = 'none';

}


view.addEventListener('click', open);
close.addEventListener('click', closeView);