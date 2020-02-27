var arrProduct = [
    { id: 1579581080923, category: 'Fast Food', name: "Noodle", price: 3500, stock: 9 },
    { id: 1579581081130, category: 'Electronic', name: "Headphone", price: 4300000, stock: 8 },
    { id: 1579581081342, category: 'Cloth', name: "Hoodie", price: 300000, stock: 7 },
    { id: 1579581081577, category: 'Fruit', name: "Apple", price: 10000, stock: 8 }
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

        if (obj.id == dataId) {
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
                        <input onclick = "funBuy(${obj.id})" type="button" value = "Beli">
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





// memunculkan list barang yang dibeli
var renderCart = () => {
    var listCart = arrCart.map((obj) => {
        return `
            <tr>
                <td>${obj.id}</td>
                <td>${obj.category}</td>
                <td>${obj.name}</td>
                <td>${obj.price}</td>
                <td>
                    <input onclick = "funDeleteCart(${obj.id})" type="button" value = "Batal Beli">
                </td>
            </tr>
        
        `;
    });
    document.getElementById('cart').innerHTML = listCart.join('');
}




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


// Button Beli
var funBuy = (idx) => {
    // temukan produk yang duipilih
    var produkTerpilih = arrProduct.find((val) => {
        return val.id == idx;
    });

    // Tambahkan produk ke cart
    arrCart.push(produkTerpilih);

    // render cart
    renderCart();
}

// Buton Batal Beli
var funDeleteCart = (dataId) => {
    // Delete Berdasarkan IDnya    

    arrCart = arrCart.filter((val) => {
        return val.id != dataId;
    });

    // Render data kembali
    renderCart(arrCart);
}


var detailTransaksi = () => {
    // Barang yang ada di cart
    var listTransaksi = arrCart.map((val)=>{
        return `<p>${val.id} || ${val.category} || ${val.name} || ${val.price}</p>`;
    });


    

    // Hitung total Harga
    var subTotal = 0;
    for (var i = 0; i < arrCart.length; i++) {
        subTotal += arrCart[i].price;
    }

    var ppn = subTotal*0.1; 
    var totalBelanja = subTotal +ppn;


    // Tampilkan total belanjaan
    var finalList = listTransaksi.join('') + 
    `<h3>Sub Total : ${subTotal}</h3>
    <h3>PPN : ${ppn}</h3>
    <h3>Total Belanja : ${totalBelanja}</h3>`
    document.getElementById('payment').innerHTML = finalList;
    
}



renderList(arrProduct);

