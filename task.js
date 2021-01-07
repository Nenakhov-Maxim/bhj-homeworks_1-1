let getStartTime = document.getElementById("timer");
let i = 1;

function timer() {
    debugger;
    let startTime = parseInt(getStartTime.textContent, 10);
    let newTime = startTime - i;
    if (newTime === 0) {
        alert("Вы победили в конкурсе");
        clearInterval(timerId);
    }
    getStartTime.textContent = newTime;
}
let timerId = setInterval(timer, 1000);