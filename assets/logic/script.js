const $ = (selector)  => {
    return document.querySelector(selector);
}

// Calling the class names from the HTML
const hour = $('.hour');
const dots = $('.dots');
const min = $('.min');
const week = $('.week');

let showDot = true;

function update () {
    // The showDot and !showDot is to show and not show the dots - create a blinking effect 
    showDot = !showDot;

    const now = new Date();

    if (showDot) {
        dots.classList.add('invisible');
    }
    else {
        dots.classList.remove('invisible') ;
    }

    hour.textContent = String(now.getHours())
        .padStart(2, '0');
    min.textContent = String(now.getMinutes())
        .padStart(2, '0');

    Array
    .from(week.children)
    .forEach(
        (ele) => {
            ele.classList.remove('active');
        }
    );

    week
        .children[now.getDay()]
        .classList
        .add('active');
};

setInterval(update, 500);