const calculoClick = document.getElementById('calculo-imc');
const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const resultadoImc = document.getElementById('resposta-imc');
const mostrarResposta = document.getElementById('caixa-resposta')

function calImc() {

  calculoClick.addEventListener('click', function(event) {    

    let pesoEntrada = parseInt(pesoInput.value);
    let alturaEntrada = parseFloat(alturaInput.value);
    
    let imc = pesoEntrada / (alturaEntrada * 2);        
    

    if(pesoInput.value.length === 0 || alturaInput.value.length === 0) {
      mostrarResposta.style.backgroundColor = 'red';
      resultadoImc.innerHTML = 'Campo vazio!';
    } else if(!pesoEntrada || !alturaEntrada) {
      mostrarResposta.style.backgroundColor = 'red';
      resultadoImc.innerHTML = 'Campo invalido!';
    } else if (imc <= 18.5) {
      mostrarResposta.style.backgroundColor = 'red';
      resultadoImc.innerHTML = `IMC = ${imc.toFixed(2)}, você esta abaixo do peso.`;
    } else if (imc > 18.5 && imc <= 24.9) {
      mostrarResposta.style.backgroundColor = '#1dd1a1';
      resultadoImc.innerHTML = `IMC = ${imc.toFixed(2)}, você esta no peso ideal.`;
    } else if (imc > 24.9 && imc <= 29.9) {
      mostrarResposta.style.backgroundColor = '#feca57';
      resultadoImc.innerHTML = `IMC = ${imc.toFixed(2)}, você esta em sobrepeso.`;
    } else if (imc > 29.9 && imc <= 34.9) {
      mostrarResposta.style.backgroundColor = 'red';
      resultadoImc.innerHTML = `IMC = ${imc.toFixed(2)}, você tem obesidade Grau 1!`;
    } else if (imc > 34.9 && imc <= 39.9) {
      mostrarResposta.style.backgroundColor = 'red';
      resultadoImc.innerHTML = `IMC = ${imc.toFixed(2)}, você tem obesidade Grau 2!`;
    } else if (imc > 39.9 && imc <= 45) {
      mostrarResposta.style.backgroundColor = 'red';
      resultadoImc.innerHTML = `IMC = ${imc.toFixed(2)}, você tem obesidade Grau 3!`;
    }  else {
      mostrarResposta.style.backgroundColor = 'red';
      resultadoImc.innerHTML = `IMC = ${imc.toFixed(2)}, Cuide-se melhor !`;
    }  

     mostrarResposta.style.display = "flex"
     
     return;

  })

}
calImc();


