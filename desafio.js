/* Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o
total de medalhas. Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:

#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

*/

const medalhas = {};

function adicionarMedalhas() {
  while (true) {
    const pais = prompt("Digite o nome do país (ou 'sair' para encerrar):").trim();

    if (pais.toLowerCase() === 'sair') {
      break;
    }

    const ouro = parseInt(prompt(`Medalhas de ouro para ${pais}:`), 10);
    const prata = parseInt(prompt(`Medalhas de prata para ${pais}:`), 10);
    const bronze = parseInt(prompt(`Medalhas de bronze para ${pais}:`), 10);

    if (isNaN(ouro) || isNaN(prata) || isNaN(bronze)) {
      alert("Por favor, insira números válidos para as medalhas.");
      continue;
    }

    const total = ouro + prata + bronze;
    medalhas[pais] = total;
  }
}

function exibirRanking() {
  let resultado = "\n#Ranking de medalhas:\n";
  const ranking = Object.entries(medalhas).sort((a, b) => b[1] - a[1]);

  ranking.forEach(([pais, total]) => {
    resultado += `#${pais}: ${total} medalhas\n`;
  });

  alert(resultado); // Exibe o ranking em uma janela de alerta.
}

function main() {
  adicionarMedalhas();
  exibirRanking();
}

main();
