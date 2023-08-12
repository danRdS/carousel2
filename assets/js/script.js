const slides = document.querySelectorAll('img');
let counter = 0;

const order = document.querySelector('.order');
order.innerHTML = `${counter+1}/${slides.length}`;

const inputs = document.querySelectorAll('.inputsArea input');

function inputChecked(number){
    counter = number;
    slideImage();
    order.innerHTML = `${counter+1}/${slides.length}`;
}

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    if(counter == 0){
        counter = slides.length - 1;
        slideImage();
    } else {
        counter--;
        slideImage();
    }
    order.innerHTML = `${counter+1}/${slides.length}`;

    inputs.forEach((input, index) => {
        if(index == counter){
            input.checked = true;
        }
    })
}

const goNext = () => {
    if(counter == slides.length - 1){
        counter = 0;
        slideImage();
    } else {
        counter++;
        slideImage();
    }
    order.innerHTML = `${counter+1}/${slides.length}`;

    inputs.forEach((input, index) => {
        if(index == counter){
            input.checked = true;
        };
    });
}

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};