function send() {
    // getElementById akan mereturn 1 object
    var name = document.getElementById('name').value;
    var umur = parseInt(document.getElementById('age').value);
    
    // Cara 1
    // getElementsByName akan mereturn array
    // var genderArray = document.getElementsByName('gender');
    // var gender = '';
    // for (let i = 0; i < genderArray.length; i++) {
    //     if(genderArray[i].checked == true){
    //         gender = genderArray[i].value;
    //     }
    // }


    //cara 2
    // input[name] : tag input yang memiliki attribute 'name'
    // input[name=gender] : tag input yang memiliki attribute 'name' dengan value 'gender'


    // querySelector : Mencari element menggunakan query css, yang akan mereturn 1 object
    // bagian untuk radio button
    var gender = document.querySelector('input[name = gender]:checked').value;


    // querySelectorAll : Mencari element menggunakan query css, yang akan mereturn array
    // var gender = document.querySelectorAll('input[name=gender]:checked');

    // bagian untuk checkbox
    var skills = document.querySelectorAll('input[type=checkbox]:checked');
    var kemampuan = [];
    for (let i = 0; i < skills.length; i++) {
        kemampuan.push(skills[i].value);        
    }

    var result = document.getElementById('result');
    result.innerHTML = `\n
        Nama        : ${name}\n
        Umur        : ${umur}\n
        Gender      : ${gender}\n
        Kemampuan   : ${kemampuan.join(", ")}\n
    `;


    console.log(name);
    console.log(umur);
    console.log(gender);
    console.log(kemampuan);


}