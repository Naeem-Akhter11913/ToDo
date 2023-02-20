// alert("jagha khali na chhodna");
var WorkToBeDo = document.getElementById('inpName');
var btn = document.getElementById('button-addon2');
let btn_text = btn.innerText
var tbody = document.querySelector('tbody');
var arrayData = [];
let edit_id = null;

let obj = localStorage.getItem('uses')

if (obj != null) {
    arrayData = JSON.parse(obj);
}
displayInfo();



function fetchData() {

    const str = WorkToBeDo.value;
    if (str == '') {
        alert("fdfdfd")
    } else if (edit_id != null) {
        arrayData.splice(edit_id, 1, { 'name': str })
    } else {
        arrayData.push({ 'name': str })
    }



    document.getElementById('inpName').value = "";
    saveInfo(arrayData);
    displayInfo();
    btn.innerHTML = btn_text
}






function saveInfo(val) {
    let userVal = JSON.stringify(val);
    localStorage.setItem('uses', userVal);
}

function displayInfo() {
    let statement = "";
    arrayData.forEach((user, i) => {
        statement += `
            <tr class = "lead">
                <td>${i + 1}</td>
                <td>${user.name}</td>
                <td class ="dd">
                <button class ="btn btn-primary" onclick = 'editInfo(${i})'><i class="fa-solid fa-pen-to-square"></i></button>
                <button class ="btn btn-danger" onclick = 'deleteInfo(${i})'><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>        
    `

    
})
tbody.innerHTML = statement;

}
function editInfo(id) {
    edit_id = id;
    let show = document.getElementById('button-addon2');
    show.innerHTML = "Save Changes";

    WorkToBeDo.value = arrayData[id].name;
}

function deleteInfo(id) {
    arrayData.splice(id, 1);
    saveInfo(arrayData);
    displayInfo();

}



document.getElementById('button-addon2').addEventListener('click', fetchData)