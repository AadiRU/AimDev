
document.addEventListener("DOMContentLoaded", function () {
  const begin = document.getElementById("start");
  const reseter = document.querySelector(".reseter")
  const point = document.getElementById('point');
  const timerBox = document.querySelector('.timerBox')
  let score = 0, point_check = 0;
  const tTime = 10;
  
  begin.addEventListener("click", function () {
    display();
    point.addEventListener("click", clic);
    setTimeout(() => {
      aadi();
    }, tTime * 1000);
  })
  reseter.addEventListener("click", function () {
    score = 0;
    point.removeEventListener("click", clic);
    display();


  })
  function clic() {
    const sound = new Audio();
    sound.src = "click.wav";
    sound.play();
    score += 1
    display();
    randompos();
  }
  function display() {
    let content = document.getElementById("scoreboard");
    content.innerHTML = score;
  }
  function randompos() {
    let box = document.querySelector('.flex-container');

    let boxWidth = box.clientWidth;
    let boxHeight = box.clientHeight;

    let x_pos = Math.random() * (boxWidth - point.clientWidth);
    let y_pos = Math.random() * (boxHeight - point.clientHeight);

    point.style.left = `${x_pos}px`;
    point.style.top = `${y_pos}px`;
  }
  function aadi(){
    alert ("Game Over! Your score was " + score);
    score = 0;
    point.removeEventListener("click", clic);
    display();
  }

})