let vcamisa = document.getElementById('icamisa')
let vcamiseta = document.getElementById('icamiseta')
let rescamiseta = document.getElementById('rescamiseta')


function paratabela() {
    let ecamisa = Number(vcamisa.value);
    rescami = ecamisa - 29.90
    rescam = parseFloat(rescami)
    vcamiseta.innerHTML = ecamisa
    rescamiseta.innerHTML = rescami

}