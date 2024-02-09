const InNumero = document.querySelector('#InNumero')
const InNumero2 = document.querySelector('#InNumero2')
const btnMostrar = document.querySelector('#btnMostrar')

btnMostrar.addEventListener('click', () => {
    let num1 = Number(InNumero.value)
    let num2 = Number(InNumero2.value)

    let soma = num1 / (num2*num2)
    resposta.innerHTML = `${soma.toFixed(2)}` 

    if(soma < 16.9){
        classificacao.innerHTML = "Muito abaixo do peso"
    }else if(soma >= 17 && soma <= 18.4 ){
      classificacao.innerHTML = "Abaixo do peso"
    }else if(soma >= 18.5 && soma <= 24.9){
      classificacao.innerHTML = "Peso normal"
    }else if(soma >=25 && soma <= 29.9){
      classificacao.innerHTML = "Acima do peso"
    }else if(soma >= 30 && soma <=34.9){
      classificacao.innerHTML = "Obesidade de grau I"
    }else if(soma >= 35 && soma <=40){
      classificacao.innerHTML = "Obesidade de grau II"
    }else if(soma > 40){
      classificacao.innerHTML = "Obesidade de grau III"
    }
}
)
    
