console.clear()
let time = 60;
timer()
let attempts = 0;
let high = 0;
if (localStorage.high) {
    high = localStorage.high;
} else {
    localStorage.high = high;
}
document.getElementById("high").innerHTML = "High Score:" + high;
document.getElementById("attempt").innerHTML = "Attempts:" + attempts;
document.getElementById("btn").style.marginLeft = (100*Math.random()) + "%";
document.getElementById("btn").style.marginTop = (48*Math.random()) + "%";
function buhBye() {
    attempts++
    
    document.getElementById("attempt").innerHTML = "Attempts:" + attempts;
    let leftt = (100*Math.random()) + "%";
    document.getElementById("btn").style.marginLeft = leftt;
    let top = (48*Math.random()) + "%";
    document.getElementById("btn").style.marginTop = top;
}
function timer(){
    
    time--
    document.getElementById("Timer").innerHTML = "Time Left:" + time + " seconds";
    if (time<0){
        alert("You got " + attempts + " attempts! Press OK to retry")
        high = attempts;
        localStorage.high = high;
        document.getElementById("high").innerHTML = "High Score:" + high;
        location.reload()
    }
    setTimeout(timer, 1000)
}