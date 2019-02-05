//SET interval
//var initiate = setInterval(function () {time()}, 1000);

function time() {
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    if (second < 10) {
        second = "0" + second;
    }
    var str = hour + ":" + minute + ":" + second;
    document.getElementById("demo0").innerHTML = str;
}
var initiate = setInterval(function () { time() }, 1000);