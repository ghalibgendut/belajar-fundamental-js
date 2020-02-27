function kuadrat() {
    var angka1 = parseInt(document.getElementById('num1').value);
    var res = Math.pow(angka1,2);
    var result = document.getElementById('result');
    result.innerHTML = `Hasil Dari : ${angka1} <sup>2</sup> = ${res}`;
}

function pangkat() {
    var angka1 = parseInt(document.getElementById('num2').value);
    var angka2 = parseInt(document.getElementById('num3').value);
    var res = Math.pow(angka1,angka2);
    var result = document.getElementById('res');
    result.innerHTML = `Hasil Dari : ${angka1} <sup>${angka2}</sup> = ${res}`;
    
}

function cari() {
    var kata = document.getElementById('kalimat').value;
    var cari = document.getElementById('cariHuruf').value;
    var hasil = '';
    var result = document.getElementById('hasil');
    for (let i = 0; i < kata.length; i++) {
        if (kata[i] == cari) {
            hasil++;
        }
    }
    result.innerHTML = `Jumlah '${cari}' sebanyak ${hasil} buah`;
}

function kali() {
    var angka1 = parseInt(document.getElementById('angka1').value);
    var angka2 = parseInt(document.getElementById('angka2').value);
    var res = angka1 * angka2;
    var result = document.getElementById('total');
    result.innerHTML = `Hasil Dari : ${angka1} x ${angka2} = ${res}`;
}

function bagi() {
    var angka1 = parseInt(document.getElementById('angka1').value);
    var angka2 = parseInt(document.getElementById('angka2').value);
    var res = angka1 / angka2;
    var result = document.getElementById('total');
    result.innerHTML = `Hasil Dari : ${angka1} / ${angka2} = ${res}`;
}

function tambah() {
    var angka1 = parseInt(document.getElementById('angka1').value);
    var angka2 = parseInt(document.getElementById('angka2').value);
    var res = angka1 + angka2;
    var result = document.getElementById('total');
    result.innerHTML = `Hasil Dari : ${angka1} + ${angka2} = ${res}`;
}

function kurang() {
    var angka1 = parseInt(document.getElementById('angka1').value);
    var angka2 = parseInt(document.getElementById('angka2').value);
    var res = angka1 - angka2;
    var result = document.getElementById('total');
    result.innerHTML = `Hasil Dari : ${angka1} - ${angka2} = ${res}`;
}

function mod() {
    var angka1 = parseInt(document.getElementById('angka1').value);
    var angka2 = parseInt(document.getElementById('angka2').value);
    var res = angka1 % angka2;
    var result = document.getElementById('total');
    result.innerHTML = `Hasil Dari : ${angka1} % ${angka2} = ${res}`;
}

function pang() {
    var angka1 = parseInt(document.getElementById('angka1').value);
    var angka2 = parseInt(document.getElementById('angka2').value);
    var res = Math.pow(angka1,angka2);
    var result = document.getElementById('total');
    result.innerHTML = `Hasil Dari : ${angka1} <sup>${angka2}</sup> = ${res}`;
}

function submit() {
    
}

