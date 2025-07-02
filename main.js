let count = 0;
const clickMe = document.getElementById('loveButton');
const question= document.getElementById('question')

clickMe.onclick = () => {
  count++;

  if (count === 1) {
    // Remove transform on first click so pixel positioning works correctly
    clickMe.style.transform = 'none';
  }

  if (count < 5) {
    const maxX = window.innerWidth - clickMe.offsetWidth;
    const maxY = window.innerHeight - clickMe.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    clickMe.style.left = randomX + 'px';
    clickMe.style.top = randomY + 'px';
  } else {
  clickMe.style.display = 'none'
  question.style.display= 'block'


  }
}

document.getElementById('question').addEventListener('submit', function(event) {
    event.preventDefault();  

    const answer = document.getElementById('answer').value.trim().toLowerCase();

    if (answer === 'fruity') {
      const letscook=document.getElementById('letsCook');
      letscook.src='../letscook.gif';
      letscook.style.display='block';
      setTimeout(() => {
        window.location.href = 'homeCard.html'; 
        
      }, 2000);
        
    } else {
      const gif = document.getElementById('wrongGif');
      gif.src='../wrong.gif';
      gif.style.display='block';
      
      setTimeout(() => {
        gif.style.display='none'
        
      }, 2000);
    
    }
});

