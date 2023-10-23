

// nav
let opNav = document.getElementById('openNav');
let ul_nav = document.getElementById('ul_nav');

opNav.addEventListener('click', () => {
    ul_nav.classList.toggle('nav_containerTcOpen');
})


// button home

const btnHome = document.querySelector('.btn__home');

btnHome.addEventListener('mouseover', function () {
    this.style.backgroundColor = 'white';
    this.style.color = '#feb248';
    this.style.border = '1px solid #feb248';
    this.style.boxShadow = '4px 4px 6px 0px #8a8a8a';
});

btnHome.addEventListener('mousedown', function () {
    this.style.backgroundColor = 'white';
    this.style.color = '#feb248';
    this.style.border = '1px solid #feb248';
    this.style.boxShadow = 'inset 4px 4px 6px 0px #8a8a8a';
});
btnHome.addEventListener('mouseleave', function () {
    this.style.color = 'white'
})



let btn_introduceBT = document.querySelector('.btn_introduceBT');

btn_introduceBT.addEventListener('mouseenter', () => {
    btn_introduceBT.style.backgroundColor = 'white';
    btn_introduceBT.style.color = 'black';
})
btn_introduceBT.addEventListener('mouseleave', () => {
    btn_introduceBT.style.background = 'none';
    btn_introduceBT.style.color = 'white';
})


let btn_introduceBT2 = document.querySelector('.btn_introduceBT2');

btn_introduceBT2.addEventListener('mouseenter', () => {
    btn_introduceBT2.style.backgroundColor = '#00d4ff';
})
btn_introduceBT2.addEventListener('mouseleave', () => {
    btn_introduceBT2.style.background = '#0dcaf0';
})

let listBtn_OurFeatures = document.querySelectorAll('.btn_OurFeatures');
listBtn_OurFeatures.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
        btn.style.color = 'white';
        btn.style.backgroundColor = '#f48c06';
    })
    btn.addEventListener('mouseleave', () => {
        btn.style.color = '#f48c06';
        btn.style.background = 'none';
    })
})


// Lấy thẻ div có id là "counter"
const counter = document.getElementById('counter');

// Số lượng tối đa bạn muốn đếm đến (ở đây là 5,000+)
const targetCount = 5000;

// Hàm bắt đầu bộ đếm
function startCounter() {
    let currentCount = 0;

    // Định thời gian cho mỗi lần tăng giá trị
    const interval = 10; // Mili giây
    const step = 20; // Số lượng tăng mỗi lần

    const timer = setInterval(() => {
        if (currentCount >= targetCount) {
            clearInterval(timer);
        } else {
            currentCount += step;
            if (currentCount > targetCount) {
                currentCount = targetCount; // Đảm bảo không vượt quá giá trị mục tiêu
            }
            counter.textContent = currentCount + "+";
        }
    }, interval);
}

// Gọi hàm bắt đầu bộ đếm khi trang web tải lại
window.addEventListener('load', startCounter);



// link nav

let listA = document.getElementById('ul_nav').querySelectorAll('a');
let listA2 = document.getElementById('ul_navv').querySelectorAll('a');
listA = [...listA, ...listA2];
console.log(listA);

listA.forEach((a, i) => {
    a.addEventListener('mouseenter', () => {

        a.classList.add('afterLink');
        a.style.color = 'rgb(255, 133, 77)';

    });

    // Sự kiện khi di chuột ra
    a.addEventListener('mouseleave', () => {
        // a.style.color = 'black';
        // alert('ra')
        a.classList.remove("afterLink");
        a.style.color = 'black';
        // alert('ra');
    });
})



// img CloudSoftware_img

let listIconClouds = document.getElementById('CloudSoftware_img').querySelectorAll('img');

listIconClouds.forEach((a, i) => {
    a.addEventListener('mouseenter', () => {
        a.style.animation = 'rotatee 2s linear infinite';
    });

    // Sự kiện khi di chuột ra
    a.addEventListener('mouseleave', () => {
        a.style.animation = 'none';
        // alert('ra');
    });
})


// logo
let d_logo = document.getElementById('logo');
let logo = d_logo.querySelector('img');
d_logo.addEventListener('mouseenter', () => {
    logo.style.animation = 'scalee 4s linear infinite';
});

// Sự kiện khi di chuột ra
d_logo.addEventListener('mouseleave', () => {
    logo.style.animation = '';
});





// slider
// 
// 
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
    sliders.style.transform = `translateX(-${sliderWidth * slIndex}px)`;

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

let repeatSlider = setInterval(() => {
    nextSlide();
}, 3000)

sliders.addEventListener('mouseenter', () => {
    clearInterval(repeatSlider);
})
sliders.addEventListener('mouseleave', () => {
    repeatSlider = setInterval(() => {
        nextSlide();
    }, 3000)
})









// form
function validateForm() {

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const age = document.getElementById('age');
    const female = document.getElementById('female');
    const male = document.getElementById('male');
    let errName = document.getElementById('errName');
    let errMail = document.getElementById('errMail');
    let errPhoneNumber = document.getElementById('errPhoneNumber');
    let errAge = document.getElementById('errAge');

    const regName = /\d/;
    if (name.value.trim() == '') {
        name.style.border = '1px solid red';
        errName.innerText = 'Please enter your name!'
        return;
    } else if (regName.test(name.value)) {
        name.style.border = '1px solid red';
        errName.innerText = 'Name cannot contain numbers!'
    }
    else {
        name.style.border = '1px solid black';
        errName.innerText = '';
    }

    if (email.value.trim() === '') {
        email.style.border = '1px solid red';
        errMail.innerText = 'Please enter your email!'
        return;
    } else if (!isValidEmail(email)) {
        email.style.border = '1px solid red';
        errMail.innerText = 'Please enter a valid email format!'
        return;
    } else {
        email.style.border = '1px solid black';
        errMail.innerText = '';
    }

    if (isNaN(age.value) || age.value < 1 || age.value > 120) {
        age.style.border = '1px solid red';
        errAge.innerText = 'Please enter your age!'
        return;
    } else {
        age.style.border = '1px solid black';
        errAge.innerText = '';
    }

    if (!(male.checked || female.checked)) {
        err.innerText = 'Please enter a gender!'
        return;
    } else {
        err.innerText = '';
    }

    alert("ôkee");

    male.checked = false;
    female.checked = false;
    name.value = '';
    email.value = '';
    age.value = '';

}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.value);
}




// time count down
const targetDate = new Date('2023-10-25 00:00:00').getTime();

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }
}

setInterval(updateCountdown, 1000);

updateCountdown();


// 
// 
// 
// video player

const container = document.querySelector(".container"),
    video = document.querySelector("#video"),
    volumeBtn = document.querySelector(".volume i"),
    volumeSlider = document.querySelector(".left input"),
    skipBackward = document.querySelector(".skip-backward i"),
    skipForward = document.querySelector(".skip-forward i"),
    playPauseBtn = document.querySelector(".play-pause i"),
    pipBtn = document.querySelector(".pic-in-pic span"),
    fullScreenBtn = document.querySelector(".fullscreen i"),
    toggleClick = document.querySelector(".toggleClick i");
function toggleLoop() {

    if (video.loop) {
        console.log(video.loop);

        toggleClick.classList.replace('fa-toggle-on', 'fa-toggle-off')
        video.loop = false
    } else {
        console.log(video.loop);

        toggleClick.classList.replace('fa-toggle-off', 'fa-toggle-on')
        video.loop = true
    }
}

toggleClick.addEventListener('click', function () {
    toggleLoop();
}
)





volumeBtn.addEventListener("click", () => {
    if (!volumeBtn.classList.contains("fa-volume-high")) {
        video.volume = 0.5;
        volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
    } else {
        video.volume = 0.0;
        volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
    }
    volumeSlider.value = video.volume;
});

volumeSlider.addEventListener("input", e => {
    video.volume = e.target.value;
    if (e.target.value == 0) {
        return volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
    }
    volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
});

fullScreenBtn.addEventListener("click", () => {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    }
});


pipBtn.addEventListener("click", () => video.requestPictureInPicture());
skipBackward.addEventListener("click", () => video.currentTime -= 5);
skipForward.addEventListener("click", () => video.currentTime += 20);
video.addEventListener("play", () => playPauseBtn.classList.replace("fa-play", "fa-pause"));
video.addEventListener("pause", () => playPauseBtn.classList.replace("fa-pause", "fa-play"));
playPauseBtn.addEventListener("click", () => video.paused ? video.play() : video.pause());
video.addEventListener("click", () => video.paused ? video.play() : video.pause())

let ipTimeline = document.getElementById('ipTimeline');

ipTimeline.addEventListener('input', function () {
    // Tính thời gian mới dựa vào giá trị thanh trượt

    const currentTime = video.duration * (ipTimeline.value / 100);
    // alert(ipTimeline.value)

    // Đặt thời gian của video
    video.currentTime = currentTime;
});

// Xử lý sự kiện khi thời gian của video thay đổi
video.addEventListener('timeupdate', function () {
    // Cập nhật giá trị thanh trượt để hiển thị thời gian hiện tại của video
    // lấy time đã chạy đc chia cho 1% của tống số thời gian để lấy ra % thời gian đã chạy rồi gán cho value của input rage
    ipTimeline.value = (video.currentTime / (video.duration / 100));
});




// map

let map;

function initMap() {
    // Tạo một bản đồ Google Maps
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 }, // Điểm tâm ban đầu
        zoom: 4 // Mức độ zoom ban đầu
    });

    // Khi người dùng nhấn vào nút
    let showMapButton = document.getElementById("showMapButton");

    showMapButton.addEventListener("click", function () {
        // alert('ok');
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                // Lấy thông tin vị trí
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;

                // Đặt bản đồ tới vị trí của bạn
                var myLatLng = { lat: latitude, lng: longitude };
                map.setCenter(myLatLng);
                map.setZoom(15); // Đặt mức độ zoom

                // Đánh dấu vị trí của bạn trên bản đồ
                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    title: 'Vị trí của bạn'
                });
            });
        } else {
            alert("Trình duyệt không hỗ trợ Geolocation.");
        }
    });
}
initMap();