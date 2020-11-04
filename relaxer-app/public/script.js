const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = '질문 준비!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = '질문해주세요!';

    setTimeout(() => {
      text.innerText = '결과 분석 중!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);
