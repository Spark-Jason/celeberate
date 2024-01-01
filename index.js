const video = document.getElementById("myVideo");
const btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  } else {
    video.pause();
    btn.innerHTML = `<i class="fa-solid fa-play"></i>`;
  }
}

btn.addEventListener("click", myFunction)