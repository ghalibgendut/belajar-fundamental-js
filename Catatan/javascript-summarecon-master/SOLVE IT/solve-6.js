var yesterday = new Date()
var today = new Date()
var tomorrow = new Date()

// Atur ulang untuk tanggal kemarin dan besok
yesterday.setDate(today.getDate() - 1)
tomorrow.setDate(today.getDate() + 1)

// Tanggal
var tdyDate = today.getDate()
var ystDate = yesterday.getDate()
var tmrDate = tomorrow.getDate()

// Bulan
var tdyMonth = today.getMonth() + 1
var ystMonth = yesterday.getMonth() + 1
var tmrMonth = tomorrow.getMonth() + 1

// Tahun
var tdyFullYear = today.getFullYear()
var ystFullYear = yesterday.getFullYear()
var tmrFullYear = tomorrow.getFullYear()

console.log(
    `Hari ini tanggal ${tdyDate} - ${tdyMonth} - ${tdyFullYear}\n`+
    `Kemarin tanggal ${ystDate} - ${ystMonth} - ${ystFullYear}\n`+
    `Besok tanggal ${tmrDate} - ${tmrMonth} - ${tmrFullYear}`
)