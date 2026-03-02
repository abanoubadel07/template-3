let nums = document.querySelectorAll(".number");
let section = document.querySelector(".stats .box");

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++
    }, 100);
}

startCount(num[0]);
