function submit() {
    // document.getElementById("name") = inputObject
    // document.getElementById("name").value = "John Wick"

    // getElementById : return 1 object
    // getElementsByName : return array

    // querySelector / querySelectorAll : mencari element menggunakan query css
    // querySelector : return 1 object
    // querySelectorAll : return array

    // input[name] : tag input yang memiliki attribute 'name'
    // input[name=gender] : tag input yang memiliki attribute 'name' dg value 'gender'
    // input[name=gender]:checked : tag input yang memiliki attribute 'name' dg value 'gender' dan di ceklis
    var name = document.getElementById("name").value
    var age = parseInt(document.getElementById("age").value)
    var gender = document.querySelector("input[name=gender]:checked").value
    var skills = document.querySelectorAll("input[type=checkbox]:checked")
    var skillArr = []
    for(var i = 0; i < skills.length; i++){
        skillArr.push(skills[i].value)
    }

    var result = document.getElementById("result")
    result.innerHTML = `
        Nama saya ${name}\n
        umur saya ${age}\n
        saya ${gender}\n
        kemampuan saya ${skillArr.join(", ")}
    `
    
}


// var genderArr = document.getElementsByName("gender")
    // var gender

    // for(var i = 0; i < genderArr.length; i++){
    //     if(genderArr[i].checked == true){
    //         gender = genderArr[i].value
    //     }
    // }