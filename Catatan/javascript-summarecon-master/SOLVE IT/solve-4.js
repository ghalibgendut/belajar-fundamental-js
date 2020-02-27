var days = 200

var years = parseInt(days / 360)
leftDays = days % 360

var months = parseInt(leftDays / 30)
leftDays = leftDays % 30

var weeks = parseInt(leftDays / 7)
leftDays = leftDays % 7

console.log(
    `${days} hari : ${years} tahun, ${months} bulan, ` +
    `${weeks} minggu, dan ${leftDays} hari`
)