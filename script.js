// Write your code here
let lightBulbs = document.querySelectorAll('.lightbulb');
let subtitle = document.querySelector('.subtitle');

let count = 0;

lightBulbs.forEach((bulb) => {
    bulb.addEventListener('click', function(){
        count += 1;
        subtitle.innerHTML = `You've clicked the lights ${count} times`
        bulb.classList.toggle('active');
    })
});