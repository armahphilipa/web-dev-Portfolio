// JavaScript to handle the sliding effect
/*const portfolioContainer = document.querySelector('.portfolio-container');

// Function to slide left
function slideLeft() {
  portfolioContainer.scrollLeft -= 350; // Adjust the scrolling distance as needed
}

// Function to slide right
function slideRight() {
  portfolioContainer.scrollLeft += 350; // Adjust the scrolling distance as needed
}

// Attach click event handlers to buttons or any navigation elements
document.querySelector('#slide-left').addEventListener('click', slideLeft);
document.querySelector('#slide-right').addEventListener('click', slideRight);
*/

// JavaScript for sliding portfolio items

/*document.addEventListener("DOMContentLoaded", function (){
const portfolioContainer = document.querySelector('.portfolio-container');
const portfolioBoxes = document.querySelectorAll('.portfolio-box');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

function slidePortfolio(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = portfolioBoxes.length - 1;
    } else if (currentIndex >= portfolioBoxes.length) {
        currentIndex = 0;
    }
    const translateXValue = -currentIndex * 320; // Adjust the value to match your portfolio box width
    portfolioContainer.style.transform = `translateX(${translateXValue}px)`;
}


prevBtn.addEventListener('click', () => slidePortfolio(-1));
nextBtn.addEventListener('click', () => slidePortfolio(1));
});*/

/*document.addEventListener("DOMContentLoaded",function (){
const portfolioContainer = document.querySelector('.portfolio-container');
const portfolioBoxes = document.querySelectorAll('.portfolio-box');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;
const boxWidth = 320; // Adjust the width as needed

function slidePortfolio(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = portfolioBoxes.length - 1;
    } else if (currentIndex >= portfolioBoxes.length) {
        currentIndex = 0;
    }
    const translateXValue = -currentIndex * boxWidth;
    portfolioContainer.style.transform = `translateX(${translateXValue}px)`;
}

prevBtn.addEventListener('click', () => slidePortfolio(-1));
nextBtn.addEventListener('click', () => slidePortfolio(1));
});*/


document.addEventListener("DOMContentLoaded",function(){

    const portfolioContainer = document.querySelector('.portfolio-container');
    const portfolioBoxes = document.querySelectorAll('.portfolio-box');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const boxWidth = 320; // Adjust the width as needed
    const numVisibleCards = 3; // Number of cards visible at a time
    
    let currentIndex = 0;
    let isAnimating = false;
    
    function clonePortfolioBoxes() {
        const clonedBoxes = [];
        portfolioBoxes.forEach((box, _index) => {
            const clonedBox = box.cloneNode(true);
            clonedBoxes.push(clonedBox);
        });
        return clonedBoxes;
    }
    
    function updatePortfolioContainer(clonedBoxes) {
        portfolioContainer.innerHTML = '';
        clonedBoxes.forEach((box) => {
            portfolioContainer.appendChild(box);
        });
    }
    
    function slidePortfolio(direction) {
        if (isAnimating) return;
        isAnimating = true;
    
        currentIndex += direction;
    
        if (currentIndex < 0) {
            currentIndex = portfolioBoxes.length - 1;
        } else if (currentIndex >= portfolioBoxes.length) {
            currentIndex = 0;
    
            const clonedBoxes = clonePortfolioBoxes();
            updatePortfolioContainer(clonedBoxes);
    
            setTimeout(() => {
                const swoopInCard = portfolioContainer.querySelector('.portfolio-box:first-child');
                swoopInCard.style.transform = `translateX(-${boxWidth}px)`;
                requestAnimationFrame(() => {
                    swoopInCard.style.transition = 'transform 0.5s ease-in-out';
                    swoopInCard.style.transform = 'translateX(0)';
                });
            }, 0);
        }
    
        const translateXValue = -currentIndex * boxWidth;
        portfolioContainer.style.transition = 'transform 0.3s ease-in-out';
        portfolioContainer.style.transform = `translateX(${translateXValue}px)`;
    
        setTimeout(() => {
            isAnimating = false;
        }, 300);
    }
    
    prevBtn.addEventListener('click', () => slidePortfolio(-1));
    nextBtn.addEventListener('click', () => slidePortfolio(1));
    

    /*const portfolioContainer = document.querySelector('.portfolio-container');
    const portfolioBoxes = document.querySelectorAll('.portfolio-box');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const boxWidth = 320; // Adjust the width as needed
    const numVisibleCards = 3; // Number of cards visible at a time
    
    let currentIndex = 0;
    let isAnimating = false;
    
    function clonePortfolioBoxes() {
        const clonedBoxes = [];
        portfolioBoxes.forEach((box, index) => {
            const clonedBox = box.cloneNode(true);
            clonedBoxes.push(clonedBox);
        });
        return clonedBoxes;
    }
    
    function updatePortfolioContainer(clonedBoxes) {
        portfolioContainer.innerHTML = '';
        clonedBoxes.forEach((box) => {
            portfolioContainer.appendChild(box);
        });
    }
    
    function slidePortfolio(direction) {
        if (isAnimating) return;
        isAnimating = true;
    
        currentIndex += direction;
    
        if (currentIndex < 0) {
            currentIndex = portfolioBoxes.length - 1;
        } else if (currentIndex >= portfolioBoxes.length) {
            currentIndex = 0;
    
            const clonedBoxes = clonePortfolioBoxes();
            updatePortfolioContainer(clonedBoxes);
    
            setTimeout(() => {
                const swoopInCard = portfolioContainer.querySelector('.portfolio-box:first-child');
                swoopInCard.style.transform = 'translateX(-100%)';
                requestAnimationFrame(() => {
                    swoopInCard.style.transition = 'transform 0.5s ease-in-out';
                    swoopInCard.style.transform = 'translateX(0)';
                });
            }, 0);
        }
    
        const translateXValue = -currentIndex * boxWidth;
        portfolioContainer.style.transition = 'transform 0.3s ease-in-out';
        portfolioContainer.style.transform = `translateX(${translateXValue}px)`;
    
        setTimeout(() => {
            isAnimating = false;
        }, 300);
    }
    
    prevBtn.addEventListener('click', () => slidePortfolio(-1));
    nextBtn.addEventListener('click', () => slidePortfolio(1));*/
    

    /*const portfolioContainer = document.querySelector('.portfolio-container');
    const portfolioBoxes = document.querySelectorAll('.portfolio-box');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const boxWidth = 320; // Adjust the width as needed
    const numVisibleCards = 3; // Number of cards visible at a time
    
    let currentIndex = 0;
    let isAnimating = false;
    
    function clonePortfolioBoxes() {
        const clonedBoxes = [];
        portfolioBoxes.forEach((box, index) => {
            const clonedBox = box.cloneNode(true);
            clonedBoxes.push(clonedBox);
        });
        return clonedBoxes;
    }
    
    function updatePortfolioContainer(clonedBoxes) {
        portfolioContainer.innerHTML = '';
        clonedBoxes.forEach((box) => {
            portfolioContainer.appendChild(box);
        });
    }
    
    function slidePortfolio(direction) {
        if (isAnimating) return;
        isAnimating = true;
    
        currentIndex += direction;
    
        if (currentIndex < 0) {
            currentIndex = portfolioBoxes.length - 1;
        } else if (currentIndex >= portfolioBoxes.length) {
            currentIndex = 0;
    
            const clonedBoxes = clonePortfolioBoxes();
            updatePortfolioContainer(clonedBoxes);
    
            setTimeout(() => {
                const swoopInCard = portfolioContainer.querySelector('.portfolio-box:first-child');
                swoopInCard.style.transform = 'translateX(-100%)';
                requestAnimationFrame(() => {
                    swoopInCard.style.transition = 'transform 0.5s ease-in-out';
                    swoopInCard.style.transform = 'translateX(0)';
                });
            }, 0);
        }
    
        const translateXValue = -currentIndex * boxWidth;
        portfolioContainer.style.transition = 'transform 0.3s ease-in-out';
        portfolioContainer.style.transform = `translateX(${translateXValue}px)`;
    
        setTimeout(() => {
            isAnimating = false;
        }, 300);
    }
    
    prevBtn.addEventListener('click', () => slidePortfolio(-1));
    nextBtn.addEventListener('click', () => slidePortfolio(1));
*/    

    /*const portfolioContainer = document.querySelector('.portfolio-container');
const portfolioBoxes = document.querySelectorAll('.portfolio-box');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const boxWidth = 320; // Adjust the width as needed
const numVisibleCards = 3; // Number of cards visible at a time

let currentIndex = 0;
let isAnimating = false;

function clonePortfolioBoxes() {
    const clonedBoxes = [];
    portfolioBoxes.forEach((box, index) => {
        const clonedBox = box.cloneNode(true);
        clonedBoxes.push(clonedBox);
    });
    return clonedBoxes;
}

function updatePortfolioContainer(clonedBoxes) {
    portfolioContainer.innerHTML = '';
    clonedBoxes.forEach((box) => {
        portfolioContainer.appendChild(box);
    });
    const translateXValue = -currentIndex * boxWidth;
    portfolioContainer.style.transform = `translateX(${translateXValue}px)`;
}

function slidePortfolio(direction) {
    if (isAnimating) return;
    isAnimating = true;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = portfolioBoxes.length - 1;
    } else if (currentIndex >= portfolioBoxes.length) {
        currentIndex = 0;
    }

    const clonedBoxes = clonePortfolioBoxes();
    updatePortfolioContainer(clonedBoxes);

    setTimeout(() => {
        const translateXValue = -numVisibleCards * boxWidth;
        portfolioContainer.style.transition = 'none';
        portfolioContainer.style.transform = `translateX(${translateXValue}px)`;

        setTimeout(() => {
            portfolioContainer.style.transition = 'transform 0.3s ease-in-out';
            const translateXValue = -currentIndex * boxWidth;
            portfolioContainer.style.transform = `translateX(${translateXValue}px)`;

            isAnimating = false;
        }, 0);
    }, 300);
}

prevBtn.addEventListener('click', () => slidePortfolio(-1));
nextBtn.addEventListener('click', () => slidePortfolio(1));
*/

    /*const portfolioContainer = document.querySelector('.portfolio-container');
const portfolioBoxes = document.querySelectorAll('.portfolio-box');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const boxWidth = 320; // Adjust the width as needed

let currentIndex = 0;
const totalBoxes = portfolioBoxes.length;

function slidePortfolio(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalBoxes - 1;
    } else if (currentIndex >= totalBoxes) {
        currentIndex = 0;
    }

    const translateXValue = -currentIndex * boxWidth;
    portfolioContainer.style.transition = 'transform 0.3s ease-in-out';
    portfolioContainer.style.transform = `translateX(${translateXValue}px)`;

    // Reset transition to create a continuous loop effect
    setTimeout(() => {
        portfolioContainer.style.transition = 'none';
    }, 300);
}

prevBtn.addEventListener('click', () => slidePortfolio(-1));
nextBtn.addEventListener('click', () => slidePortfolio(1));*/

});


//toggle icon navbar

document.addEventListener("DOMContentLoaded", function(){
// JavaScript to show/hide the navbar when the checkbox is clicked
const checkbox = document.getElementById('showNavbar');
const navbar = document.getElementById('show-nav');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none';
    }
});

});

/*const checkbox = document.getElementById('showNavbar');
const navbar = document.getElementById('show-nav');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none';
    }
});/*

// Toggle dark mode when the checkbox is changed (as shown in the previous answer)
/*checkbox.addEventListener("change", function () {
    if (this.checked) {
        // Dark mode
        document.body.classList.add("dark-mode");
    } else {
        // Light mode
        document.body.classList.remove("dark-mode");
    }
});*/

//making active link colored

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*= '+ id +']').classList.add('active');
            });
        };
    });
    //sticky navbar
let header = document.querySelector('header');

header.document.toggle('sticky',window.scrollY > 100);
};


/*const checkbox = document.getElementById("checkbox");
    const toggle = document.querySelector(".toggle");

    checkbox.addEventListener("change", function () {
        if (this.checked) {
            //Light mode 
            document.body.classList.add("light-mode");
        } else {
            // Dark mode
            document.body.classList.remove("light-mode");
        }
    }); */

//scroll reveal


/*document.addEventListener("DOMContentLoaded", function(){
    ScrollReveal({ 
        reset: true ,
        distance: '80px',
        duration: 2000,
        delay: 200
    });
    
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

});*/

document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.home-content, .heading', {
        origin: 'top',
        distance: '80px',
        duration: 2000,
        delay: 200
    });
});

//clear email post-content after sending

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Clear input fields
        const inputFields = contactForm.querySelectorAll("input");
        const textareaField = contactForm.querySelector("textarea");
        inputFields.forEach((input) => {
            input.value = "";
        });
        textareaField.value = "";
    });
});

