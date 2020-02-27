class Market {
    constructor(_category, _name, _harga, _stock, _qty, _total) {
        this.category = _category;
        this.name = _name;
        this.price = _harga;
        this.stock = _stock;
        this.qty = _qty;
        this.total = _total;
    }
}

class FastFood extends Market {
    constructor(_category, _name, _harga, _stock, _expired, _qty, _total) {
        super(_category, _name, _harga, _stock, _qty, _total);
        this.expired = _expired;
    }

}

class Cloths extends Market {
    constructor(_category, _name, _harga, _stock, _size, _qty, _total) {
        super(_category, _name, _harga, _stock, _qty, _total);
        this.size = _size;
    }
}

class Electronics extends Market {
    constructor(_category, _name, _harga, _stock, _warranty, _qty, _total) {
        super(_category, _name, _harga, _stock, _qty, _total);
        this.warranty = _warranty;
    }

}

class Fruits extends Market {
    constructor(_category, _name, _harga, _stock, _sugarLvl, _qty, _total) {
        super(_category, _name, _harga, _stock, _qty, _total);
        this.sugarLvl = _sugarLvl;
    }

}



let products = [
    { category: 1, name: 'Noodle', price: 20000, stock: 8, expired: 2020, qty: 0, total: 0 },
    { category: 2, name: 'Hoodie', price: 15000, stock: 7, size: 'L', qty: 0, total: 0 },
    { category: 3, name: 'Headphone', price: 20000, stock: 8, warranty: 'Yes', qty: 0, total: 0 },
    { category: 4, name: 'Apel', price: 10000, stock: 5, sugarLvl: 'High', qty: 0, total: 0 }

]




function daftarProducts() {
    var listProduct = '';

    if (products.length > 0) {
        for (var i = 0; i < products.length; i++) {
            if (products[i].category == 1) {
                listProduct += `${i + 1}. ${products[i].name} | Stock : ${products[i].stock} ` +
                    `| Harga : ${products[i].price.toLocaleString()} | Expiered : ${products[i].expired}\n`;
            }
            if (products[i].category == 2) {
                listProduct += `${i + 1}. ${products[i].name} | Stock : ${products[i].stock}` +
                    `| Harga : ${products[i].price.toLocaleString()} | Size : ${products[i].size}\n`;
            }
            if (products[i].category == 3) {
                listProduct += `${i + 1}. ${products[i].name} | Stock : ${products[i].stock}` +
                    `| Harga : ${products[i].price.toLocaleString()} | Warranty : ${products[i].warranty}\n`;
            }
            if (products[i].category == 4) {
                listProduct += `${i + 1}. ${products[i].name} | Stock : ${products[i].stock}` +
                    `| Harga : ${products[i].price.toLocaleString()} | Sugar Level : ${products[i].sugarLvl}\n`;
            }
            // listProduct += `${i + 1}. ${products[i].name} | Stock : ${products[i].stock} | Harga : ${products[i].price.toLocaleString()}\n`;
        }
        return listProduct;
    }
    return 'Barang tidak ada';
}

// function beliFastFood(_qty) {

//     products[0].total = products[0].price * _qty;
//     detailBelanja += `Belanjaan anda adalah \n\n ${products[0].name}: ${_qty} x ` +
//     `${products[0].price} = ${products[0].total}`;
// }

// function beliCloths(_qty) {

//     products[1].total = products[1].price * _qty;
//     detailBelanja += `Belanjaan anda adalah \n\n ${products[1].name}: ${_qty} x ` +
//     `${products[1].price} = ${products[1].total}`;
// }

// function beliElectronics(_qty) {

//     products[2].total = products[2].price * _qty;
//     detailBelanja += `Belanjaan anda adalah \n\n ${products[2].name}: ${_qty} x ` +
//     `${products[2].price} = ${products[2].total}`;
// }

// function beliFruits(_qty) {

//     products[3].total = products[3].price * _qty;
//     detailBelanja += `Belanjaan anda adalah \n\n ${products[3].name}: ${_qty} x ` +
//     `${products[3].price} = ${products[3].total}`;
// }


// function tambahBarang() {

// }




// console.log(daftarProducts(products));





var repeat = true;


do {
    var menu = parseInt(prompt(
        'Menu Utama : \n\n' +
        '1. Menampilkan daftar barang\n' +
        '2. Menambah barang\n' +
        '3. Menghapus barang\n' +
        '4. Membeli barang\n' +
        '5. Exit\n\n'
    ));
    switch (menu) {
        case 1:
            //Daftar Barang
            alert(daftarProducts());
            var repeat = confirm('Kembali ke menu utama ?');
            break;
        case 2:
            //Tambah Barang
            var pilihCategory = parseInt(prompt(
                'Silakan Pilih Category \n\n' +
                '1. Fast Food\n' +
                '2. Cloths\n' +
                '3. Electronics\n' +
                '4. Fruits\n'
            ));
            var nama = prompt('Masukan Nama : ');
            var harga = parseInt(prompt('Masukan Harga :'));
            var stock = parseInt(prompt('Masukan Stock :'));
            if (pilihCategory == 1) {
                var kadaluarsaMakanan = parseInt(prompt('Masukan Kadaluarsa :'));
                var object = new FastFood(pilihCategory, nama, harga, stock, kadaluarsaMakanan);
                products.push(object);
            }

            else if (pilihCategory == 2) {
                var sizeBaju = prompt('Masukan Ukuran Baju :');
                var object = new Cloths(pilihCategory, nama, harga, stock, sizeBaju);
                products.push(object);
            }
            else if (pilihCategory == 3) {
                var garansi = prompt('Apakah ada garansi :');
                var object = new Electronics(pilihCategory, nama, harga, stock, garansi);
                products.push(object);
            }
            else if (pilihCategory == 4) {
                var levelGula = prompt('Level Gula : ');
                var object = new Fruits(pilihCategory, nama, harga, stock, levelGula);
                products.push(object);
            }
            alert(daftarProducts());
            break;
        case 3:
            //Hapus
            var selected = parseInt(prompt(`Pilih barang :\n\n${daftarProducts(products)}`)) - 1;

            // hapus buah, stock, harga, pada index terpilih
            products.splice(selected, 1);

            alert(daftarProducts());
            break;
        case 4:
            //Belanja
            var totalPrice = 0;
            do {
                var selected = parseInt(prompt(`Pilih barang :\n\n${daftarProducts(products)}`)) - 1; //pilih produk yang ingin di beli
                // cek dulu apakah quantity lebih dari stock yang ada
                do {
                    var quantity = parseInt(prompt(`Masukan Jumlah ${products[selected].name} yang ingin di beli: `));
                    if (quantity > products[selected].stock) {
                        alert(`Quantity dari ${products[selected].name} lebih dari stock : ${products[selected].stock}`);
                    }
                    //kalo jumlah quantity sesuai
                    else{
                        products[selected].qty += quantity; //menambah quantity yang dibeli

                        products[selected].stock -= quantity // Mengurangi stock

                        var belanja = confirm('Mau Belanja Lagi ?');
                    }
                } while (quantity > products[selected].stock);


                // console.log(products[selected].name,products[selected].qty);

            } while (belanja);

            //untuk pengecekan pembelian barang
            for (var i = 0; i < products.length; i++) {
                if (products[i].qty > 0) {
                    products[i].total = products[i].price * products[i].qty;
                    totalPrice += products[i].total;
                }
            }


            var detailBelanja = '';
            for (var i = 0; i < products.length; i++) {
                if (products[i].qty > 0) {
                    detailBelanja += `${products[i].name} : ${products[i].qty} x ${products[i].price} = ${products[i].total}\n`;
                }
            }
            console.log(detailBelanja);

            alert(
                'Detail Belanja \n\n' + detailBelanja + '\n' +
                'Total : Rp. ' + totalPrice.toLocaleString('in')
            );


            var moneyCondition=true;
            do {
                // User input uang
                var money = parseInt(prompt('Masukkan jumlah uang : '));

                // Cari selisih uang dan total biaya
                var margin = money - totalPrice;

                // Jika uang user kurang
                if (money < totalPrice) {
                    alert(`Mohon input kembali, uang Anda kurang Rp. ${margin}`);
                    moneyCondition = true;

                    // Jika uang user lebih
                } else if (money > totalPrice) {
                    alert(`Terimakasih\n\nUang kembali Anda Rp. ${margin}`);
                    moneyCondition = false;

                    // Jika uang user pas
                } else {
                    alert('Terimakasih !');
                    moneyCondition = false;

                }

            } while (moneyCondition);


            break;
        case 5:
            alert('Terimakasih!')
            var repeat = false;
            break;
        default:
            alert('Kesalahan dalam Input');
            var repeat = true;
            break;
    }
    // console.log(products);


} while (repeat);


