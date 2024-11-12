// Seleciona todas as vagas
const vagas = document.querySelectorAll('.vaga');

// Função para marcar uma vaga como ocupada e coletar dados
function marcarVaga(vaga) {
  // Marca a vaga como ocupada (você pode personalizar a classe)
  vaga.classList.add('ocupada');

  // Coleta os dados da vaga
  const placa = prompt('Digite a placa do veículo:') ;
  const horaEntrada = prompt('Digite a hora de entrada:');

  // Armazena os dados (exemplo usando um array, você pode usar localStorage ou um banco de dados)
  const dadosVaga = {
    placa,
    horaEntrada
  };
  // Adiciona os dados a um array (ajuste para sua lógica de armazenamento)
  vagasOcupadas.push(dadosVaga);

    const infoVaga = document.querySelector('.info-vaga');

  // Exibe os dados da vaga
  const mensagem = dadosVaga;
  // Exibe as informações da vaga ocupada (opcional)

  console.log(`Vaga ${vaga.textContent} ocupada por ${placa} às ${horaEntrada}`);
}

// Adiciona o event listener a cada vaga
vagas.forEach(vaga => {
  vaga.addEventListener('click', () => {
    marcarVaga(vaga);
  });
});

// Array para armazenar as informações das vagas ocupadas (ajuste conforme sua necessidade)
const vagasOcupadas = [];


function exibirVagaOcupada(vaga, placa, horaEntrada) {
    const listaVagas = document.getElementById('lista-vagas');
    const novoItem = document.createElement('li');
    novoItem.textContent = `Vaga ${vaga.textContent}: Placa ${placa} - Entrada ${horaEntrada}`;
    listaVagas.appendChild(novoItem);
  }