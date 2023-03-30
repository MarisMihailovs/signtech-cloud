const sectionHeadings = document.querySelectorAll('.title');
const sectionTexts = document.querySelectorAll('.text');
const navLinks = document.getElementsByClassName('navLinks');
// on scroll animation for headings
const mybutton = document.getElementById('backtotop');
const navContainer = document.getElementById('mainNavbar');
const menuBars = document.getElementById('menu-bars');
// form to leave a message
const form = document.getElementById('form');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message-text');
const expIcons = document.querySelectorAll('.circle');
const iconText = document.querySelectorAll('.circleText');
const faqItems = document.querySelectorAll('.faq-item');

let isValid = false;


function validateForm() {
    // using contraint API 
    isValid = form.checkValidity();

    if (!isValid) {
        // style main message for an error
        message.textContent = 'Please fill out all fields';
        message.style.color = 'red';
        messageContainer.style.borderColor = "red";
        return;
    }

}

function storeFormData() {

    message.textContent = 'Thank you! we will contact you soon!';

}

function processFormData(e) {
    //    validat form 
    validateForm();
    // submit data if valid
    if (isValid) {

    }
}

// event listener 

form.addEventListener('submit', processFormData);


let callback = (entries, observer) => {
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
    entries.forEach((entry) => {
        if (entry.target.classList.contains('title') && entry.intersectionRatio > 0) {
            entry.target.classList.add('show-heading');
        };
        if (entry.target.classList.contains('text') && entry.intersectionRatio > 0) {
            entry.target.classList.add('fly-in-bottom');
        };
        if (entry.target.classList.contains('circle') && entry.intersectionRatio > 0 && expIcons[2].innerText !== 'installed screens >5500') {

            let currentNumber = 0;
            const interval = setInterval(() => {
                currentNumber = currentNumber + 25;
                iconText[2].innerText = `installed screens >${currentNumber.toString()}`;
                if (currentNumber === 5500) {
                    clearInterval(interval);
                }
            }, 15);
        };
        if (entry.target.classList.contains('circle') && entry.intersectionRatio > 0 && expIcons[1].innerText !== 'Operation in 27 countries') {

            let currentNumber = 0;
            const interval = setInterval(() => {
                currentNumber = currentNumber + 3;
                iconText[1].innerText = `Operation in ${currentNumber.toString()} countries`;
                if (currentNumber === 27) {
                    clearInterval(interval);
                }
            }, 200);
        };
        if (entry.target.classList.contains('circle') && entry.intersectionRatio > 0 && expIcons[3].innerText !== 'Satisfied customers >800') {

            let currentNumber = 0;
            const interval = setInterval(() => {
                currentNumber = currentNumber + 8;
                iconText[3].innerText = `Satisfied customers >${currentNumber.toString()}`;
                if (currentNumber === 800) {
                    clearInterval(interval);
                }
            }, 20);
        };
        if (entry.target.classList.contains('circle') && entry.intersectionRatio > 0 && expIcons[0].innerText !== 'Established in 2014') {

            let currentNumber = 0;
            const interval = setInterval(() => {
                currentNumber = currentNumber + 19;
                iconText[0].innerText = `Established in ${currentNumber.toString()}`;
                if (currentNumber === 2014) {
                    clearInterval(interval);
                }
            }, 5);
        };

    });

}


const options = {
    // root: null,
    // rootMargin: '0px',
    // threshold: 1.0
};

let observer = new IntersectionObserver(callback, options);
sectionHeadings.forEach(el => observer.observe(el));
sectionTexts.forEach(el => observer.observe(el));
expIcons.forEach(el => observer.observe(el));


// document.scroll(function () {
//     var $nav = $("#mainNavbar");
//     $nav.toggleClass("scrolled", $(this).scrollTop() > 1);
// });





// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener('scroll', () => {
    // if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    //     navContainer.toggleClass("scrolled");
    // }
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "flex";
        navContainer.classList.add("scrolled");
    } else {
        mybutton.style.display = "none";
        navContainer.classList.remove("scrolled");
    }

});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

function toggleNav() {
    navContainer.classList.toggle('nav-expand');
    // toggle : menu bars open/closed
    menuBars.classList.toggle('change');
    //    menu active or not
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.toggle('navLinksShow');
    }
}

function resetNav() {
    navContainer.classList.remove('nav-expand')
    menuBars.classList.remove('change');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('navLinksShow');

    }
}

// event listeners

menuBars.addEventListener('click', toggleNav);
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', resetNav);
}

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        answer.classList.toggle('show');
    });
});


