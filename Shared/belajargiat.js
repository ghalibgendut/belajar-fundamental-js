class toko {
    constructor(_urut, _category, _nama, _stock, _harga, _qty, _total) {
        this.urut = _urut
        this.category = _category
        this.nama = _nama
        this.stock = _stock
        this.harga = _harga
        this.qty = _qty
        this.total = _total
    }

}

class buah extends toko {
    constructor(_urut, _category, _nama, _stock, _harga, _sugar, _qty, _total) {
        super(_urut, _category, _nama, _stock, _harga, _qty, _total)
        this.sugar = _sugar

    }
}

class food extends toko {
    constructor(_urut, _category, _nama, _stock, _harga, _expired, _qty, _total) {
        super(_urut, _category, _nama, _stock, _harga, _qty, _total)
        this.expired = _expired

    }
}

var product = [
    { urut: 0, category: 1, nama: 'mangga', stock: 10, harga: 12000, sugar: 'high', qty: 0, total: 0 },
    { urut: 0, category: 2, nama: 'telur', stock: 12, harga: 7000, expired: 2021, qty: 0, total: 0 }
]

function daftarProduct() {
    var list = '';
    if (product.length > 0) {
        for (urut = 0; urut < product.length; urut++) {
            if (product[urut].category == 1) {
                list += `${urut + 1}.nama:${product[urut].nama}|stock:${product[urut].stock}|harga:${product[urut].harga}\n`;

            } if (product[urut].category == 2) {
                list += `${urut + 1}.nama:${product[urut].nama}|stock:${product[urut].stock}|harga:${product[urut].harga}|expired:${product[urut].expired}\n`;
            }
        }
        return list
    }
    return 'soldout'
}

function daftarBelanja() {
    var list = '';
    if (product.length > 0) {
        for (urut = 0; urut < product.length; urut++) {
            if (product[urut].category == 1) {
                list += `${urut + 1}.nama:${product[urut].nama} ${product[urut].qty} x ${product[urut].harga} = ${product[urut].total}\n`;

            } if (product[urut].category == 2) {
                list += `${urut + 1}.nama:${product[urut].nama} ${product[urut].qty} x ${product[urut].harga} = ${product[urut].total}\n`;
            }
        }
        return list
    }
}

var repeat = true;

do {
    var menu = parseInt(prompt(`TOKO MAKMUR \n\n
1.list Product \n
2.Tambah Product\n
3.Hapus Product\n
4.Beli Product\n
5.Exit`
    ));
    switch (menu) {
        case 1:
            alert(daftarProduct())
            break;
    }switch (menu) {
        case 2:
            tambah = parseInt(prompt("1.fruit\n2.food"))
            if (tambah == 1) {
                newcategory = 1
                newname = prompt(`masukkan nama buah`)
                newstock = prompt(`masukkan stock buah`)
                newprice = prompt(`masukkan harga buah`)
                newsugar = prompt(`masukkan tingkat gula buah`)
                product.push({ category: newcategory, nama: newname, stock: newstock, harga: newprice, sugar: newsugar })

            } if (tambah == 2) {
                newcategory = 2
                newname = prompt(`masukkan nama makanan`)
                newstock = prompt(`masukkan stock makanan`)
                newprice = prompt(`masukkan harga makanan`)
                newexpired = prompt(`masukkan expired makanan`)
                product.push({ category: newcategory, nama: newname, stock: newstock, harga: newprice, expired: newexpired })
            }

            break;
    }switch (menu) {
        case 3:
            var hapus = parseInt(prompt(daftarProduct()))
            product.splice((hapus - 1), 1)
            break;
    }
    switch (menu) {
        case 4:
            var daftar = ""
            do {
                var totalPrice = 0

                // var daftarbelanja =''
                var beli = parseInt(prompt(daftarProduct())) - 1
                var kuantitas = parseInt(prompt('beli berapa?'))
                if (product[beli].stock > kuantitas) {
                    var jumlah = product[beli].qty + kuantitas;
                    product[beli].qty = jumlah
                    var kurang = product[beli].stock - kuantitas;
                    product[beli].stock = kurang;
                    product[beli].total = jumlah * product[beli].harga
                    totalPrice += product[beli].total
                    daftar += product[beli].nama + " " + product[beli].qty + "x" + product[beli].harga + "=" + product[beli].total + "\n"



                    // var proses = 
                    if (confirm('lanjut belanja?') == false) {
                        // alert(
                        //     `detail belanja \n\n
                        //     {urut:0,category:1, nama:'mangga',stock:10,harga:12000,sugar:'high',qty:0,total:0},


                        //     `)
                        // alert(daftarBelanja())
                        alert(`DETAIL BELANJA \n\n ${daftar}\n\n total= ${totalPrice}`)
                        var moneyCondition
                        do {
                            // User input uang
                            var money = parseInt(prompt('Masukkan jumlah uang : '))
                            // Cari selisih uang dan total biaya
                            var margin = money - totalPrice

                            // Jika uang user kurang
                            if (money < totalPrice) {
                                alert(`Mohon input kembali, uang Anda kurang Rp. ${margin}`)
                                moneyCondition = true

                                // Jika uang user lebih
                            } else if (money > totalPrice) {
                                alert(`Terimakasih\n\nUang kembali Anda Rp. ${margin}`)
                                moneyCondition = false

                                // Jika uang user pas
                            } else {
                                alert('Terimakasih !')
                                moneyCondition = false

                            }

                        } while (moneyCondition)
                        // press ok, repeat = true
                        // press cancel, repeat = false
                        var repeat = confirm('Kembali ke menu utama ?')
                        break;
                    } switch (menu) {
                        case 5:

                            var repeat = alert('terima kasih')
                            repeat = false


                            break;
                    }

                }




            } while (repeat)




    }
} while (repeat)
