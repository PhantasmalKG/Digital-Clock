function clockUpdater(){

    var getClockData = new Date();

    var getHours = getClockData.getHours();
    var getMinutes = getClockData.getMinutes();
    var getSeconds = getClockData.getSeconds();

    var getAmPm = (getHours > 12) ? "PM" : "AM";

    getHours = (getHours > 12) ? getHours - 12 : getHours;

    getHours = ("0" + getHours).slice(-2);
    getMinutes = ("0" + getMinutes).slice(-2);
    getSeconds = ("0" + getSeconds).slice(-2);

    document.getElementById('dg-clock').innerHTML = getHours + " : " + getMinutes + " : " + getSeconds + " " + getAmPm;

    var st = setTimeout(clockUpdater, 1);
}