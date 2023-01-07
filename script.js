let vcamisa = document.getElementById('icamisa')
let vcamiseta = document.getElementById('icamiseta')
let rescamiseta = document.getElementById('rescamiseta')

function camisetatabela() {
    let ecamisa = Number(vcamisa.value)
    rescami = ecamisa - 29.90
    vcamiseta.innerHTML = ecamisa.toFixed(2).replace('.', ',')
    rescamiseta.innerHTML = rescami.toFixed(2).replace('.', ',')

}

let eshort = document.getElementById('ishort')
let eshorts = document.getElementById('ishorts')
let resshort = document.getElementById('resshort')

function shorttabela() {
    let reshort = Number(eshort.value)
    rshort = reshort - 39.99
    eshorts.innerHTML = reshort.toFixed(2).replace('.', ',')
    resshort.innerHTML = rshort.toFixed(2).replace('.', ',')

}

let emeia = document.getElementById('imeia')
let emeias = document.getElementById('imeias')
let resmeia = document.getElementById('resmeia')

function meiatabela() {
    let rmeia = Number(emeia.value)
    let lucromeia = rmeia - 1.99
    emeias.innerHTML = rmeia.toFixed(2).replace('.', ',')
    resmeia.innerHTML = lucromeia.toFixed(2).replace('.', ',')

}

let esapato = document.getElementById('isapato')
let esapatos = document.getElementById('isapatos')
let ressapato = document.getElementById('ressapato')

function sapatotabela() {
    let rsapato = Number(esapato.value)
    lucrosapato = rsapato - 59.99
    esapatos.innerHTML = rsapato.toFixed(2).replace('.', ',')
    ressapato.innerHTML = lucrosapato.toFixed(2).replace('.', ',')
}