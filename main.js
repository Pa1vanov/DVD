const dvd = document.querySelector('.container');

let topPx = 0;
let leftPx = 0;

let leftNumber = 3;
let topNumber = 2;
let counter = 0;

const randomColor = Math.floor(Math.random() * 16777215).toString(16);
const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
const randomColor3 = Math.floor(Math.random() * 16777215).toString(16);



setInterval(() => {
  leftPx += leftNumber;
  topPx += topNumber;
  dvd.style.left = `${leftPx}px`
  dvd.style.top = `${topPx}px`
  if (topPx >= window.innerHeight - 150) {
    topNumber = -2;
    counter++
    dvd.textContent = `${counter}`
    dvd.style.backgroundColor = dvd.style.backgroundColor = '#' + randomColor;
  } else if (leftPx >= window.innerWidth - 150) {
    leftNumber = -3;
    counter++
    dvd.textContent = `${counter}`
    dvd.style.backgroundColor = dvd.style.backgroundColor = '#' + randomColor1;

  } else if (topPx <= 0) {
    topNumber = 2
    counter++
    dvd.textContent = `${counter}`
    dvd.style.backgroundColor = dvd.style.backgroundColor = '#' + randomColor2;

  } else if (leftPx <= 0) {
    leftNumber = 3;
    counter++
    dvd.textContent = `${counter}`
    dvd.style.backgroundColor = dvd.style.backgroundColor = '#' + randomColor3;
  }
}, 0)