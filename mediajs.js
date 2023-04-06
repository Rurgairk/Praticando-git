var numero1 = window.document.querySelector('input#n1')
var numero2 = window.document.querySelector('input#n2')
var numero3 = window.document.querySelector('input#n3')
var res = window.document.querySelector('div#res')

function nn1(n1) {
    if (numero1.value.length != '') {
        return true
    } else {
        return false
    }
}

function nn2(n2) {
    if (numero2.value.length != '') {
        return true
    } else {
        return false
    }
}

function nn3(n3) {
    if (numero3.value.length != '') {
        return true
    } else {
        return false
    }
}

function botão() {

    if (nn1() && nn2() && nn3()) {
        let n1 = Number(numero1.value)
        let n2 = Number(numero2.value)
        let n3 = Number(numero3.value)
        let media = (n1 + n2 + n3) / 3
        numero1.value = ''
        numero2.value = ''
        numero3.value = ''
        res.innerHTML = `Sua media foi ${media}`
    } else {
        window.alert('Digite os numeros')
    }

}