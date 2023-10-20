let listSliders = document.getElementById('Slider').querySelectorAll('.slider_item');
let bulletArray = [];
let slIndex = 0;

let sliders = document.getElementById('Slider');
// console.log(listSliders);

// console.log(listSliders[0].offsetWidth);

function addBulletClickListener(index, button) {
  button.addEventListener('click', function () {
    bulletArray[slIndex].classList.remove('active');
    slIndex = index;
    bulletArray[index].classList.add('active');
    showSlide();
  });
}

function createBullet(index) {
  let button = document.createElement('a');
  button.className = 'slide_btn';
  let i = document.createElement('i');
  i.classList.add('fa-solid');
  i.classList.add('fa-minus');
  button.appendChild(i);

  if (index === slIndex) {
    button.classList.add('active');
  }

  addBulletClickListener(index, button);
  return button;
}
listSliders.forEach(function (slide, index) {
  let slideButtons = document.getElementById('slide_buttons');
  let bullet = createBullet(index);
  bulletArray.push(bullet);
  slideButtons.appendChild(bullet);
});
function showSlide() {
  let sliderWidth = listSliders[0].offsetWidth;
  // listSliders.forEach(element => {
  //     element.style.transform = `translateX(-${sliderWidth * slIndex}px)`;
  //     element.style.transition = 'all 0.5s linear';
  // });
  sliders.style.transform = `translateX(-${sliderWidth * slIndex}px)`;

  // alert(`${-sliderWidth*slIndex}`);
}
function nextSlide() {
  bulletArray[slIndex].classList.remove('active');
  slIndex = (slIndex + 1) % listSliders.length;
  bulletArray[slIndex].classList.add('active');
  // alert(slIndex)
  showSlide();
}
function prevSlide() {
  bulletArray[slIndex].classList.remove('active');
  slIndex = (slIndex - 1 + listSliders.length) % listSliders.length;
  bulletArray[slIndex].classList.add('active');
  showSlide();
}

