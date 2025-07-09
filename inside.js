const photos = document.querySelectorAll(".photo");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");

    photos.forEach(photo => {
      photo.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = photo.src;
      });
    });
    const button = document.getElementById("reveal-btn");
  const flower = document.getElementById("flower");

  button.addEventListener("click", () => {
    flower.style.height = "180px";
    button.style.display= 'none'
  })

     const button2 = document.getElementById("reveal-btn2");
  const flower2 = document.getElementById("photo2");
  

  button2.addEventListener("click", () => {
    flower2.style.height = "180px";
    button2.style.display= 'none'


  });