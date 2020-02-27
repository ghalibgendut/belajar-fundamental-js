// MARKET V1.0

let fruits = [
    { name: 'Apel', price: 10000, stock: 5, qty: 0, total: 0 },
    { name: 'Anggur', price: 15000, stock: 7, qty: 0, total: 0 },
    { name: 'Jeruk', price: 20000, stock: 8, qty: 0, total: 0 }
]
// buah: [ klo mao nampilin object semua gmna?
// ]

function listBuah(listFruits) {
    var listFruits = '';

    if (fruits.length > 0) {
        for (var i = 0; i < fruits.length; i++) {
            listFruits += `${i + 1}. ${fruits[i].name} | Stock : ${fruits[i].stock} | Harga : ${fruits[i].price.toLocaleString()}\n`;
        }
        return listFruits;
    }
    return 'Buah tidak ada';
}

// listBuah(fruits);


var repeat = true;

do {
    var mainOpt = parseInt(prompt(
        'Menu Utama : \n\n' +
        '1. Menampilkan daftar buah\n' +
        '2. Menambah buah\n' +
        '3. Menghapus buah\n' +
        '4. Membeli buah\n' +
        '5. Exit\n\n'
    ))

    switch (mainOpt) {
        case 1: // Daftar buah
            alert(listBuah(fruits));

            // press ok, repeat = true
            // press cancel, repeat = false
            var repeat = confirm('Kembali ke menu utama ?');
            break;
        case 2: // Menambah buah
            // tanya nama, stock, dan harga
            var newFruit = prompt(`Masukan Buah :`);
            var newStock = parseInt(prompt('Masukkan stock buah :'));
            var newPrice = parseInt(prompt('Masukkan harga buah :'));

            //tambah buah
            fruits.push({ name: newFruit, price: newPrice, stock: newStock, qty: 0, total: 0 });


            // push ke masing - masing array
            // fruits.push(newFruit)
            // stock.push(newStock)
            // price.push(newPrice)

            // tampilkan list buah
            alert(listBuah(fruits));

            // press ok, repeat = true
            // press cancel, repeat = false
            var repeat = confirm('Kembali ke menu utama ?');
            break;
        case 3: // Menghapus buah

            // munculkan list, minta input user
            (listBuah(fruits));

            var selected = parseInt(prompt(`Pilih buah :\n\n${listBuah(fruits)}`)) - 1;

            // hapus buah, stock, harga, pada index terpilih
            fruits.splice(selected, 1);

            // munculkan list
            alert(listBuah(fruits));

            // press ok, repeat = true
            // press cancel, repeat = false
            var repeat = confirm('Kembali ke menu utama ?');
            break;
        case 4: // Membeli buah

            // total biaya kesuluruhan
            let totalPrice = 0;

            // Meminta qty setiap buah, loop sebanyak jumlah buah
            for (var i = 0; i < fruits.length; i++) {
                do {
                    fruits[i].qty = prompt(`Masukkan jumlah ${fruits[i].name} : `)
                    // Jika qty yang diminta melebihi stock
                    if (fruits[i].qty > fruits[i].stock) {
                        alert(
                            `Kesalahan dalam input, stock ${fruits[i].name} : ${fruits[i].stock}`
                        );
                    }
                    // Akan mengulang loop jika qty lebih besar dari stock
                } while (fruits[i].qty > fruits[i].stock);

                //  total biaya per buah
                fruits[i].total = fruits[i].price * fruits[i].qty;
                // total biaya kesuluruhan
                totalPrice += fruits[i].total;
            }

            var detailStr = '';
            for (var i = 0; i < fruits.length; i++) {
                detailStr += `${fruits[i].name} : ${fruits[i].qty} x ${fruits[i].price.toLocaleString()} = ${fruits[i].total.toLocaleString()}\n`;
            }

            // Munculkan Alert
            alert(
                'Detail Belanja \n\n' + detailStr + '\n' +
                'Total : Rp. ' + totalPrice.toLocaleString('in')
            );


            var moneyCondition
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
            // press ok, repeat = true
            // press cancel, repeat = false
            var repeat = confirm('Kembali ke menu utama ?');
            break;

        case 5:
            alert('Dadah ...');
            var repeat = false;
    }
} while (repeat);



/*
- Ubah penyimpanan data menjadi array of object
    - Berikan kepada student nilai awal array ini
    - Student akan refactor kode.
- Buatlah sebuah function untuk membuat sebuah list product

*/





