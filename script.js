const clapButton = document.getElementById('clap-button');

clapButton.addEventListener('click',() => {
  switchBackground();
  changeText();
})

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const color = `rgb(${red}, ${green}, ${blue})`
  return color;
}

function switchBackground() {
  const backgroundColor = randomColor();
  document.getElementById('clap-button').style.backgroundColor = backgroundColor;
  
}

function changeText() {
  const index = Math.floor(Math.random() * 3);
  const text = ['egg','boy','maple','buttonboy',]
  document.getElementById('clap-button').innerHTML = text[index]

}