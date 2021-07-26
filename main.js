

function getTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    var m = checkTime(m);
    var s = checkTime(s);

    document.getElementById('hours').innerHTML = h;
    document.getElementById('mins').innerHTML = m;
    document.getElementById('secs').innerHTML = s;
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

setInterval(getTime, 1000);