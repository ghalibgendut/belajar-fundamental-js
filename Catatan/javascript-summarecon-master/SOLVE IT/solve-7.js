var text = 'Halo Dunia'
var find = 'a'

// Replace semua (global) huruf a dengan string kosong
var newText = text.replace(/a/g, '')

// Hitung selisih sebelum dan sesudah di replace
var result = text.length - newText.length

console.log(`Terdapat ${result} huruf ${find}`)