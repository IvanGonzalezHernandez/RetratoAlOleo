// Menú Hamburguesa
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    
    menuIcon.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});

// Cuenta atrás
const countdownElement = document.getElementById('countdown');

const updateCountdown = () => {
    const now = new Date();
    let nextOneAM = new Date();
    nextOneAM.setHours(1, 0, 0, 0);

    if (now.getHours() >= 1) {
        nextOneAM.setDate(now.getDate() + 1);
    }

    const distance = nextOneAM - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = 
        (hours < 10 ? "0" : "") + hours + ":" + 
        (minutes < 10 ? "0" : "") + minutes + ":" + 
        (seconds < 10 ? "0" : "") + seconds;

    if (distance < 0) {
        countdownElement.innerHTML = "EXPIRED";
    }
};

setInterval(updateCountdown, 1000);


// Preguntas Frecuentes

(function(){
    const titleQuestions = [...document.querySelectorAll('.questions-title')];

    titleQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const arrowIcon = question.querySelector('.questions-arrow i');

            
            if (answer.style.height && answer.style.height !== '0px') {
                answer.style.height = '0px';
                arrowIcon.classList.replace('bx-chevron-up', 'bx-chevron-down');
            } else {
                
                document.querySelectorAll('.questions-show').forEach(p => {
                    p.style.height = '0px';
                });

                
                document.querySelectorAll('.questions-arrow i').forEach(icon => {
                    icon.classList.replace('bx-chevron-up', 'bx-chevron-down');
                });

                answer.style.height = `${answer.scrollHeight}px`;
                arrowIcon.classList.replace('bx-chevron-down', 'bx-chevron-up');
            }
        });
    });
}());









