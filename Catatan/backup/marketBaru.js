var arrProduct = [
    { id: 1579581080923, category: 'Fast Food', name: "Noodle", price: 3500, stock: 9, qty: 0 },
    { id: 1579581081130, category: 'Electronic', name: "Headphone", price: 4300000, stock: 8, qty: 0 },
    { id: 1579581081342, category: 'Cloth', name: "Hoodie", price: 300000, stock: 7, qty: 0 },
    { id: 1579581081577, category: 'Fruit', name: "Apple", price: 10000, stock: 8, qty: 0 }
];

var arrCat = ['All', 'Fast Food', 'Electronic', 'Cloth', 'Fruit', 'Model Kit'];

var arrCart = [];

// menggunakan ES 5
// function category(x) {
//     return `<option value="">${x}</option>`;
// }

// tabel barang yang dijual dan dropdown
var renderList = (data, dataId) => {
    // Maping Product menggunakan ES 6
    var result = data.map((obj) => {

        // pengecekan ketika membeli barang tombol delete dan edit di disabled
        if (arrCart.length > 0) {
            return `
            <tr>
                <td>${obj.id}</td>
                <td>${obj.category}</td>
                <td>${obj.name}</td>
                <td>${obj.price}</td>
                <td>${obj.stock}</td>
                <td>
                    <input onclick = "jumlahBeli(${obj.id})" type="button" value = "Beli">
                </td>
                <td>
                    <input onclick = "funDelete(${obj.id})" type="button" value = "Delete" disabled>
                </td>
                <td>
                    <input onclick = "funEdit(${obj.id})" type="button" value = "Edit" disabled>
                </td>
            </tr>`;
            
        }
        // pengecekan ketika mengedit barang tombol beli di disabled
        else if (obj.id == dataId) {
            return `
                <tr>
                    <td><input type="text" value="${obj.id}" placeholder="ID Barang" id="idLama" disabled></td>
                    <td><input type="text" value="${obj.category}" placeholder="Kategori Barang" id="katLama" disabled></td>
                    <td><input type="text" value="${obj.name}" placeholder="Nama Barang" id="namaBaru"></td>
                    <td><input type="text" value="${obj.price}" placeholder="Harga Barang" id="hargaBaru"></td>
                    <td><input type="text" value="${obj.stock}" placeholder="Stock Barang" id="stockBaru"></td>
                    <td>
                        <input type="button" value = "Beli" disabled>
                    </td>
                    <td>
                        <input onclick = "funSave(${obj.id})" type="button" value = "Save">
                    </td>
                    <td>
                        <input onclick = "renderList(arrProduct)" type="button" value = "Cancel">
                    </td>
                </tr>`;

        }
        else {
            return `
                <tr>
                    <td>${obj.id}</td>
                    <td>${obj.category}</td>
                    <td>${obj.name}</td>
                    <td>${obj.price}</td>
                    <td>${obj.stock}</td>
                    <td>
                        <input onclick = "jumlahBeli(${obj.id})" type="button" value = "Beli">
                    </td>
                    <td>
                        <input onclick = "funDelete(${obj.id})" type="button" value = "Delete">
                    </td>
                    <td>
                        <input onclick = "funEdit(${obj.id})" type="button" value = "Edit">
                    </td>
                </tr>`;
        }
    });

    // Maping Category Menggunakan ES 6
    var cat = arrCat.map((val) => {
        return `<option value="${val}">${val}</option>`
    });



    // Menggunakan ES 5
    // var category1 = arrCat.map(category); 

    document.getElementById('render').innerHTML = result.join('');
    document.getElementById('catFilter').innerHTML = cat;
    document.getElementById('catTambah').innerHTML = cat;
};


// Input data

var funInputData = () => {
    // Ambil Data
    var _name = document.getElementById('name').value;
    var _price = parseInt(document.getElementById('price').value);
    var _stock = parseInt(document.getElementById('stock').value);
    var _category = document.getElementById('catTambah').value;
    var _id = new Date();

    // console.log(name, price, stock, category);


    // Push ke Object
    arrProduct.push({
        id: _id.getTime(),
        name: _name,
        price: _price,
        stock: _stock,
        category: _category,
    });

    // Render Product
    renderList(arrProduct);
}

// Tambah Barang Baru sampai sini




// Pencarian Data Barang

//function untuk filterring
var renderFilter = (data) => {
    // Maping Product menggunakan ES 6
    var result = data.map((obj) => {
        return `
            <tr>
                <td>${obj.id}</td>
                <td>${obj.category}</td>
                <td>${obj.name}</td>
                <td>${obj.price}</td>
                <td>${obj.stock}</td>
                <td>
                    <input onclick = "funBuy()" type="button" value = "Beli">
                </td>
                <td>
                    <input onclick = "funDelete(${obj.id})" type="button" value = "Delete">
                </td>
                <td>
                    <input onclick = "funEdit(${obj.id})" type="button" value = "Edit">
                </td>
            </tr>
        `
    });
    document.getElementById('render').innerHTML = result.join('');
}



//Category
var cari = () => {
    var _category = document.getElementById('catFilter').value;
    var kategori = arrProduct;

    // bisa dengan cara seperti ini
    // var kategori = arrProduct.filter((obj) => {
    //     if (_category == 'All') {
    //         return arrProduct;
    //     } else {
    //         return obj.category == _category;
    //     }
    // });

    // renderFilter(kategori);

    // atau dengan cara 
    if (_category != 'All') {
        kategori = arrProduct.filter((obj) => {
            return obj.category == _category;
        });
    }

    renderFilter(kategori);

    // var result = kategori.map((obj) => {
    //     return `
    //     <tr>
    //         <td>${obj.id}</td>
    //         <td>${obj.category}</td>
    //         <td>${obj.name}</td>
    //         <td>${obj.price}</td>
    //         <td>${obj.stock}</td>
    //     </tr>`;
    // });

    // document.getElementById('render').innerHTML = result.join('');
}


//Nama
var cariNama = () => {
    var _name = document.getElementById('nama').value;
    _name = _name.toLowerCase();

    //Mulai Filter
    var namaProduk = arrProduct.filter((obj) => {
        var lowProd = obj.name.toLocaleLowerCase();
        return lowProd.includes(_name);
    });

    renderFilter(namaProduk);
}


//Harga
var cariHarga = () => {
    var _price1 = document.getElementById('harga1').value;
    var _price2 = document.getElementById('harga2').value;
    var filHarga = arrProduct;

    // bisa menggunakan cara seperti ini

    if (!(_price1 == '' || _price2 == '')) {
        filHarga = arrProduct.filter((obj) => {
            return obj.price >= _price1 && obj.price <= _price2;
        });
    }

    renderFilter(filHarga);


    // atau dengan cara seperti ini

    // var totalHarga = arrProduct.filter((obj)=>{

    //     if ( !(_price1 == '' || _price2 == '') ) {
    //         return obj.price >= _price1 && obj.price <= _price2;
    //     } else {
    //         return arrProduct;
    //     }

    //     // if (_price1 == '' || _price2 == '') {
    //     //     return arrProduct;
    //     // } 
    //     // else if (obj.price >= _price1 && obj.price <= _price2) {
    //     //     return obj.price >= _price1 && obj.price <= _price2;
    //     // }
    // });
    // renderFilter(totalHarga);


    //atau seperti ini

    // var result = totalHarga.map((obj)=>{
    //     return `
    //     <tr>
    //         <td>${obj.id}</td>
    //         <td>${obj.category}</td>
    //         <td>${obj.name}</td>
    //         <td>${obj.price}</td>
    //         <td>${obj.stock}</td>
    //     </tr>`;
    // });
    // document.getElementById('render').innerHTML = result.join('');
}


// Sort

// Nama A -> Z
let sortAtoZ = () => {
    var bandingkanNama = (a,b) => {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        var status = '';
        
        var comp = 0;
        if (nameA > nameB){
            comp = 1;
        }
        else if(nameA < nameB){
            comp = -1;
        }
        return comp;
    }
    arrProduct.sort(bandingkanNama);
    renderList(arrProduct);
}



// Nama Z -> A
let sortZtoA = () => {
    var bandingkanNama = (a,b) => {
        var namaA = a.name.toUpperCase();
        var namaB = b.name.toUpperCase();

        var comp = 0;
        if (namaA < namaB) {
            comp = 1;
        }
        else if (namaA > namaB){
            comp = -1;
        }
        return comp;
    }
    arrProduct.sort(bandingkanNama);
    renderList(arrProduct);
}

// Price 1 -> 9
let sortPrice = () => {
    var bandingkanHarga = (a,b) => {
        var hargaA = a.price;
        var hargaB = b.price;

        var comp = 0;
        if (hargaA > hargaB) {
            comp = 1;
        }
        else if (hargaA < hargaB) {
            comp = -1;
        }
        return comp;
    }
    arrProduct.sort(bandingkanHarga);
    renderList(arrProduct);
}

// price 9 -> 1
let sortHarga = () => {
    var bandingkanHarga = (a,b) => {
        var hargaA = a.price;
        var hargaB = b.price;

        var comp = 0;
        if (hargaA > hargaB) {
            comp = -1;
        }
        else if (hargaA < hargaB) {
            comp = 1;
        }
        return comp;
    }
    arrProduct.sort(bandingkanHarga);
    renderList(arrProduct);
}


// Pencaraian Sampai Sini




// Edit dan Penghapusan Data Barang

// Delete
var funDelete = (dataId) => {
    // Delete Berdasarkan IDnya    

    arrProduct = arrProduct.filter((val) => {
        return val.id != dataId;
    });

    // Render data kembali
    renderList(arrProduct);
}


// Edit
var funEdit = (dataId) => {
    //  Edit 

    // Render datanya yang ingin di edit
    renderList(arrProduct, dataId);
}

// Save
var funSave = (dataId) => {
    // Ambil Data
    var _name = document.getElementById('namaBaru').value;
    var _price = parseInt(document.getElementById('hargaBaru').value);
    var _stock = parseInt(document.getElementById('stockBaru').value);

    // Cari Index arrProduct
    var cariIndex = arrProduct.findIndex((val) => {
        return val.id == dataId;
    });
    console.log(cariIndex);

    // Replace data lama dengan destructring array of objectnya
    arrProduct[cariIndex] = {
        ...arrProduct[cariIndex],
        name: _name,
        price: _price,
        stock: _stock
    };
    renderList(arrProduct);

}

// Edit dan Penghapusan data Barang Sampai Sini





// Pembelian Barang

// memunculkan list barang yang dibeli
var renderCart = () => {
    var listCart = arrCart.map((obj) => {
        // for (let i = 0; i < arrCart.length; i++) {
        // console.log(obj);

        return `
            <tr>
                <td>${obj.id}</td>
                <td>${obj.category}</td>
                <td>${obj.name}</td>
                <td>${obj.price}</td>
                <td>${obj.qty}</td>
                <td>
                    <input onclick = "funDeleteCart(${obj.id})" type="button" value = "Batal Beli">
                </td>
            </tr>
        
        `;

        // }
    });



    // cari index dengan id yang sama

    document.getElementById('cart').innerHTML = listCart.join('');
}


// Function untuk memasukan quantity barang yang dibeli

var jumlahBeli = (dataId) => {
    // Maping untuk memasukan qty barang yang dibeli

    var barang = arrProduct.map((obj) => {
        if (obj.id == dataId) {
            return `
                <tr>
                    <td>${obj.id}</td>
                    <td>${obj.category}</td>
                    <td>${obj.name}</td>
                    <td>${obj.price}</td>
                    <td>${obj.stock}</td>
                    <td><input type="number" placeholder="Jumlah yang dibeli" id="qtyBarang"></td>
                    <td>
                        <input onclick = "funBuy(${obj.id})" type="button" value = "Beli">
                    </td>
                    <td>
                        <input onclick = "renderList(arrProduct)" type="button" value = "Batal">
                    </td>
                    <td>
                        <input onclick = "funDelete(${obj.id})" type="button" value = "Delete" disabled>
                    </td>
                    <td>
                        <input onclick = "funEdit(${obj.id})" type="button" value = "Edit" disabled>
                    </td>
                </tr>`;
        }
        else {
            return `
                <tr>
                    <td>${obj.id}</td>
                    <td>${obj.category}</td>
                    <td>${obj.name}</td>
                    <td>${obj.price}</td>
                    <td>${obj.stock}</td>
                    <td>
                        <input onclick = "jumlahBeli(${obj.id})" type="button" value = "Beli">
                    </td>
                    <td>
                        <input onclick = "renderList(arrProduct)" type="button" value = "Batal">
                    </td>
                    <td>
                        <input onclick = "funDelete(${obj.id})" type="button" value = "Delete" disabled>
                    </td>
                    <td>
                        <input onclick = "funEdit(${obj.id})" type="button" value = "Edit" disabled>
                    </td>
                </tr>`;
        }
    });


    document.getElementById('render').innerHTML = barang.join('');
}


// Button Beli
var funBuy = (dataId) => {
    // Ambil data dari Qty yang dibeli
    var qtyBeli = parseInt(document.getElementById('qtyBarang').value);


    // temukan produk yang dipilih
    var produkTerpilih = arrProduct.find((val) => {
        return val.id == dataId;
    });

    var cekCart = arrCart.find((val) => {
        return val.id == dataId;
    })


    // Pengecekan id Index
    if (cekCart == undefined) {
        if (qtyBeli > produkTerpilih.stock) {
            alert(`Stock ${produkTerpilih.name} kurang dari ${qtyBeli}`);
        }
        else {
            produkTerpilih.stock = produkTerpilih.stock - qtyBeli;

            produkTerpilih.qty = produkTerpilih.qty + qtyBeli;

            arrCart.push({ ...produkTerpilih, qty: qtyBeli });
            renderList(arrProduct);
            renderCart();
            detailTransaksi();
        }
    }
    else {
        // Sisa Stock dan pengecekan stock
        if (qtyBeli > produkTerpilih.stock) {
            alert(`Stock ${produkTerpilih.name} kurang dari ${qtyBeli}`);
        }
        //  Beli Quantity
        else {

            // Pengurangan stock yang ada di arrProduct
            // Kenapa menggunakan produkTerpilih karena arrProduct sudah di simpan ke produkTerpilih
            produkTerpilih.stock = produkTerpilih.stock - qtyBeli;

            // Ubah qty yang ada di arrProduct = qtyBeli
            produkTerpilih.qty = produkTerpilih.qty + qtyBeli;

            var cekId = arrCart.findIndex(val => val.id == dataId);
            console.log(cekId);
            var hasil = arrCart[cekId].qty + qtyBeli;

            // Push dengan cara destruct ke arrCart
            arrCart[cekId] = {
                ...arrCart[cekId],
                qty: hasil
            };

            // Render Barang 
            renderList(arrProduct);

            // render cart
            renderCart();

            // // Render Detail Transaksi
            detailTransaksi();
        }
    }
    // console.log(arrCart);
    // console.log(produkTerpilih.qty);

}

// Buton Batal Beli
var funDeleteCart = (dataId) => {
    // Delete Berdasarkan IDnya   

    // perbandingan 2 data array
    var foundIdx = arrProduct.findIndex((val) => {
        return val.id == dataId;
    });

    var foundIdxCart = arrCart.findIndex((val) => {
        return val.id == dataId;
    });

    // buat balikin stock
    arrProduct[foundIdx].stock += arrCart[foundIdxCart].qty;

    arrCart = arrCart.filter((val) => {

        return val.id != dataId;
    });
    // console.log(arrProduct.stock);



    // Render data kembali
    renderList(arrProduct);
    renderCart(arrCart);
    detailTransaksi();
}

// Pembelian barang Sampai Sini





// Fungsi Bayar Dari sini
var detailTransaksi = () => {

    // Hitung total Harga
    var subTotal = 0;
    for (var i = 0; i < arrCart.length; i++) {
        subTotal += arrCart[i].price * arrCart[i].qty;
    }

    var ppn = subTotal * 0.1;
    var totalBelanja = subTotal + ppn;


    // Tampilkan total belanjaan
    var finalList = `
        <tr>
            <td colspan="3">Sub Total</td>
            <td>${subTotal}</td>
        </tr>
        <tr>
            <td colspan="3">PPN</td>
            <td>${ppn}</td>
        </tr>
        <tr>
            <td colspan="3">Total Belanja</td>
            <td>${totalBelanja}</td>
        </tr>
    `;
    document.getElementById('belanja').innerHTML = finalList;

}


// Fungsi Bayar
var renderBayar = () => {
    var kol = `
    <input type="number" placeholder="Masukan Jumlah Uang" id="jmlUang">
    <input type="button" value="Bayar" onclick="bayar()">
    `;
    document.getElementById('payment').innerHTML = kol;
}


// button bayar pada detail transaksi
var bayar = () => {

    // Hitung detail transaksi
    var subTotal = 0;
    for (var i = 0; i < arrCart.length; i++) {
        subTotal += arrCart[i].price * arrCart[i].qty;
    }

    var ppn = subTotal * 0.1;
    var totalBelanja = subTotal + ppn;

    // Simpan inputan uang

    var pay = parseInt(document.getElementById('jmlUang').value);

    var kembali = pay - totalBelanja;

    if (pay < totalBelanja) {
        alert(`Mohon input kembali, uang Anda kurang Rp. ${kembali}`);
    }
    else if (pay > totalBelanja) {
        alert(`Terimakasih\n\nUang kembali Anda Rp. ${kembali}`);
        arrCart = [];
        renderCart(arrCart);
        detailTransaksi();
        var kol = `
        <input type="number" placeholder="Masukan Jumlah Uang" id="jmlUang" disabled>
        <input type="button" value="Bayar" onclick="bayar()" disabled>
        `;
        document.getElementById('payment').innerHTML = kol;
    }
    else {
        alert('Terimakasih !');
        arrCart = [];
        renderCart(arrCart);
        detailTransaksi();
        var kol = `
        <input type="number" placeholder="Masukan Jumlah Uang" id="jmlUang" disabled>
        <input type="button" value="Bayar" onclick="bayar()" disabled>
        `;
        document.getElementById('payment').innerHTML = kol;
    }
    renderList(arrProduct);

}

// Fungsi bayar Sampai Sini

renderList(arrProduct);

