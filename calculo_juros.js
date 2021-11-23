const calcular = document.getElementById('calcular');
function calculo_juros () {
    const nome = document.getElementById('varnome').value;
    const meses = document.getElementById('varmeses').value;
    const juros = document.getElementById('varjuros').value;
    const valor = document.getElementById('Varvalor').value;
    const resultado = document.getElementById('resultado');
    if (nome !== '' && valor !== '' && meses !== '' && juros !== '') {
    const varjuros2 = juros / 100;
    let resultado1 = (valor*((1+varjuros2)**meses-1)/varjuros2).toFixed(2);
    resultado.textContent = `${nome}, se você aplicar R$${valor},00, à taxa de juros de ${juros}% ao mês, durante ${meses} meses, acumulará uma poupança de R$${resultado1}.`;
    }else {
    resultado.textContent = 'Você não preencheu todos os campos.';
    }
}
calcular.addEventListener('click', calculo_juros);