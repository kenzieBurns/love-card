let count = 0;
const button = document.getElementById('loveButton');
const question= document.getElementById('question')

button.onclick = () => {
  count++;

  if (count === 1) {
    // Remove transform on first click so pixel positioning works correctly
    button.style.transform = 'none';
  }

  if (count < 5) {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
  } else {
  button.style.display = 'none'
  question.style.display= 'block'


  }
}
