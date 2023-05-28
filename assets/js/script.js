// select inputs


let inputValueConta = document.querySelector(".contaValue")

let inputValuepersons = document.querySelector(".numberPerson")

let botaoResult = document.querySelector("#buttonResult")

let divButton = document.querySelector(".selecione_valores")

let a = document.querySelector(".value_monney")

let valueTotal = document.querySelector(".value_monney1")

// select button


let button5 = document.querySelector(".button5")

let button10 = document.querySelector(".button10")

let button15 = document.querySelector(".button15")

let button25 = document.querySelector(".button25")

let button50 = document.querySelector(".button50")

let inputPct = document.querySelector(".inputPct_personalize")

let campoTotal  = document.querySelector(".value_monney1")

// eventos para atribuir o value

 button5.addEventListener("click" , () => {

    inputPct.setAttribute("class" , "selection1")
    button50.setAttribute("class" , "selection1")
    button25.setAttribute("class" , "selection1")
    button15.setAttribute("class" , "selection1")
    button10.setAttribute("class" , "selection1")
    button5.value = 5
    button5.setAttribute("class" , "selection")
})

button10.addEventListener("click" , () => {

    inputPct.setAttribute("class" , "selection1")
    button50.setAttribute("class" , "selection1")
    button25.setAttribute("class" , "selection1")
    button15.setAttribute("class" , "selection1")
    button5.setAttribute("class" , "selection1")
    button10.value = 10
    button10.setAttribute("class" , "selection")
})

button15.addEventListener("click" , () => {

    inputPct.setAttribute("class" , "selection1")
    button50.setAttribute("class" , "selection1")
    button25.setAttribute("class" , "selection1")
    button10.setAttribute("class" , "selection1")
    button5.setAttribute("class" , "selection1")
    button15.value = 15
    button15.setAttribute("class" , "selection")
})

button25.addEventListener("click" , () => {

    inputPct.setAttribute("class" , "selection1")
    inputPct.setAttribute("class" , "selection1")
    button15.setAttribute("class" , "selection1")
    button50.setAttribute("class" , "selection1")
    button10.setAttribute("class" , "selection1")
    button5.setAttribute("class" , "selection1")
    button25.value = 25
    button25.setAttribute("class" , "selection")
})

button50.addEventListener("click" , () => {

    inputPct.setAttribute("class" , "selection1")
    button25.setAttribute("class" , "selection1")
    button15.setAttribute("class" , "selection1")
    button10.setAttribute("class" , "selection1")
    button5.setAttribute("class" , "selection1")
    button50.value = 50
    button50.setAttribute("class" , "selection")
})
inputPct.addEventListener("click" , () => {

    button50.setAttribute("class" , "selection1")
    button25.setAttribute("class" , "selection1")
    button15.setAttribute("class" , "selection1")
    button10.setAttribute("class" , "selection1")
    button5.setAttribute("class" , "selection1")
    inputPct.setAttribute("class" , "selection")
})


// eventos keyup

inputValuepersons.addEventListener("keyup" , () => {
    
    let valueInputValueConta = inputValueConta.value
    let numberPersonValue =  inputValuepersons.value
    // campo 2
    if(button10.className == "selection"){
        let valueClick = button10.value
        let soma = valueInputValueConta *  valueClick  / 100
        let div = soma / numberPersonValue
        let campo  = document.querySelector(".value_monney")
        campo.innerHTML = `$${div.toFixed(2)}`
        a.value = div

    }  if(button5.className == "selection"){
        let valueClick = button5.value
        let soma = valueInputValueConta *  valueClick  / 100
        let div = soma / numberPersonValue
        let campo  = document.querySelector(".value_monney")
        campo.innerHTML = `$${div.toFixed(2)}`
        a.value = div

    } if(button15.className == "selection"){
        let valueClick = button15.value
        let soma = valueInputValueConta *  valueClick  / 100
        let div = soma / numberPersonValue
        let campo  = document.querySelector(".value_monney")
        campo.innerHTML = `$${div.toFixed(2)}`
        a.value = div
        
    } if(button25.className == "selection"){
        let valueClick = button25.value
        let soma = valueInputValueConta *  valueClick  / 100
        let div = soma / numberPersonValue
        let campo  = document.querySelector(".value_monney")
        campo.innerHTML = `$${div.toFixed(2)}`
        a.value = div

    } if(button50.className == "selection"){
        let valueClick = button50.value
        let soma = valueInputValueConta *  valueClick  / 100
        let div = soma / numberPersonValue
        let campo  = document.querySelector(".value_monney")
        campo.innerHTML = `$${div.toFixed(2)}`
        a.value = div
    }
    if(inputPct.className == "selection"){
        let valueClick = inputPct.value
        let soma = valueInputValueConta *  valueClick  / 100
        let div = soma / numberPersonValue
        let campo  = document.querySelector(".value_monney")
        campo.innerHTML = `$${div.toFixed(2)}`
        a.value = div
    }

 

    if(inputValuepersons.value == ""){
        let avisoError = document.querySelector(".aviso_error")
        avisoError.classList.add('aviso_errorJS')
    } else{
        let avisoError = document.querySelector(".aviso_error")
        avisoError.classList.remove('aviso_errorJS')
    }
    
    if(inputValuepersons.value != 0 ){
        let errorZero = document.querySelector(".aviso_error")
        errorZero.style.display = "none"
        inputValuepersons.style.border =" 0"
      }
    
    let conta = ( valueInputValueConta  / numberPersonValue ) + a.value
    let campoTotal  = document.querySelector(".value_monney1")
    campoTotal.innerHTML = `$${conta.toFixed(2)}`
    
})
     
inputValueConta.addEventListener("keyup" , () => {
    let valueInputValueConta = inputValueConta.value
    let numberPersonValue =  inputValuepersons.value
    // campo 2
    if(button10.className == "selection"){
        let valueClick = button10.value
        let soma = valueInputValueConta *  valueClick  / 100
        let div = soma / numberPersonValue
        let campo  = document.querySelector(".value_monney")
        campo.innerHTML = `$${div.toFixed(2)}`
        a.value = div

    }  if(button5.className == "selection"){
        let valueClick = button5.value
        let soma = valueInputValueConta *  valueClick  / 100
        let div = soma / numberPersonValue
        let campo  = document.querySelector(".value_monney")
        campo.innerHTML = `$${div.toFixed(2)}`
        a.value = div

    } if(button15.className == "selection"){
        let valueClick = button15.value
        let soma = valueInputValueConta *  valueClick  / 100
        let div = soma / numberPersonValue
        let campo  = document.querySelector(".value_monney")
        campo.innerHTML = `$${div.toFixed(2)}`
        a.value = div
        
    } if(button25.className == "selection"){
        let valueClick = button25.value
        let soma = valueInputValueConta *  valueClick  / 100
        let div = soma / numberPersonValue
        let campo  = document.querySelector(".value_monney")
        campo.innerHTML = `$${div.toFixed(2)}`
        a.value = div

    } if(button50.className == "selection"){
        let valueClick = button50.value
        let soma = valueInputValueConta *  valueClick  / 100
        let div = soma / numberPersonValue
        let campo  = document.querySelector(".value_monney")
        campo.innerHTML = `$${div.toFixed(2)}`
        a.value = div
    }
    if(inputPct.className == "selection"){
        let valueClick = inputPct.value
        let soma = valueInputValueConta *  valueClick  / 100
        let div = soma / numberPersonValue
        let campo  = document.querySelector(".value_monney")
        campo.innerHTML = `$${div.toFixed(2)}`
        a.value = soma
    }


 

    
    
    let conta = ( valueInputValueConta  / numberPersonValue ) + a.value
    let campoTotal  = document.querySelector(".value_monney1")
    campoTotal.innerHTML = `$${conta.toFixed(2)}`

    if(isNaN(conta)){
        campoTotal.innerHTML = "  $0.00"
    }

  if(inputValuepersons.value == 0){
    let errorZero = document.querySelector(".aviso_error")
    errorZero.style.display = "inline"
    inputValuepersons.style.border =" 2px solid #f00"
  } else{
    let errorZero = document.querySelector(".aviso_error")
    errorZero.style.display = "none"
  }

  if(isFinite(a) ){
    return true
  } else{
    a.innerHTML = "$0.00"
    valueTotal.innerHTML = "$0.00"
  }
    
})
     
botaoResult.addEventListener("click" , () => {
    inputValueConta.value = ""
    inputValuepersons.value = ""
    a.innerHTML = "  $0.00"
    valueTotal.innerHTML = "$0.00"
})