function cari() {
    var kalimat = document.getElementById("kalimat").value;
    var karakter = document.getElementById("karakter").value;
    var result = document.getElementById("result");
    var hitung = "";
    // replace semua huruf yang dicari (global) dengan string kosong
    // var newText = kalimat.replace(/[karakter]/g, "");
    // console.log(karakter);
    // hitung selisih sebelum dan sesudah
    //     var selisih = kalimat.length - newText.length;

    for (var i = 0; i < kalimat.length; i++) {
        if (kalimat[i] == karakter) {
            hitung++
        }
    }
    result.innerHTML = `<strong>jumlah '${karakter}' dalam '${kalimat}' sebanyak ${hitung} buah</strong>`;

}