var distance = 120
var speedA = 60, speedB = 40, totalSpeed = speedA + speedB

var timeCrash = distance / totalSpeed // 1.2 jam
var timeHour = parseInt(timeCrash) // 1 jam
var timeMinute = (timeCrash * 60) % 60 // 12 menit
