window.onload = init;

function click() {
  let oldStyle = document.getElementById('style');
  let newStyle = document.createElement('link');
  oldStyle.href.charAt(oldStyle.href.length - 5) == 1 ? newStyle.setAttribute('href', 'css/style2.css') : newStyle.setAttribute('href', 'css/style1.css');
  oldStyle.remove();
  newStyle.id = 'style';
  newStyle.rel = 'stylesheet';
  newStyle.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(newStyle);
}

function init() {
  let btn = document.getElementsByClassName('header_button');
  btn[0].onclick = click;
}