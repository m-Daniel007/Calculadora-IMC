var btn = document.getElementById('btn')

function calculaImc(){
    var nome = document.getElementById('nome').value
    var altura = document.getElementById('altura').value
    var peso = document.getElementById('peso').value
    var resultado = document.getElementById('resultado')
   

    if (nome !== '' && altura !== '' && peso !== ''){
        var imc = peso/(altura * altura)

        var classificacao = ''
          if(imc < 17){
            classificacao = 'muito abaixo do peso'
        }
        else if(imc >= 17 && imc <= 18.49){
            classificacao = 'abaixo do peso'
        }
        else if(imc >= 18.5 && imc <= 24.99){
            classificacao = 'peso normal'
        }
        else if( imc >= 25 && imc <= 29.99){
            classificacao = 'acima do peso'
        }
        else if( imc >= 30 && imc <= 34.99){
            classificacao = 'obesidade grau 1'
        }
        else if( imc >= 35 && imc <= 39.99){
            classificacao = 'obesidade grau 2(severa)'
        }
         else if( imc >= 40){
            classificacao = 'obesidade grau 3 (morbida)'
        }
      
        
        resultado.textContent = `${nome}  seu IMC é ${imc.toFixed(1)} e você está  ${classificacao}`



     }else{
             resultado.textContent = 'Preencha  todos os campos!! '
     }

}


btn.addEventListener('click', calculaImc);


 