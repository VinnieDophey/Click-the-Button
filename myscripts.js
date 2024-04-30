console.clear()
let attempts = 0;
if (localStorage.attempts) {
    attempts = localStorage.attempts;
} else {
    localStorage.attempts = attempts;
}
document.getElementById("attempt").innerHTML = "Attempts:" + attempts;
document.getElementById("btn").style.marginLeft = (100*Math.random()) + "%";
document.getElementById("btn").style.marginTop = (48*Math.random()) + "%";
function buhBye() {
    attempts++
    localStorage.attempts = attempts;
    document.getElementById("attempt").innerHTML = "Attempts:" + attempts;
    let leftt = (100*Math.random()) + "%";
    document.getElementById("btn").style.marginLeft = leftt;
    let top = (48*Math.random()) + "%";
    document.getElementById("btn").style.marginTop = top;
}
