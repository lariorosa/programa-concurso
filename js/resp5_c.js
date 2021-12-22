var candidatos = [];

function adicionarCandidatos() {
  var inNome = document.getElementById("inNome");
  var inAcertos = document.getElementById("inAcertos");

  var nome = inNome.value;
  var acertos = Number(inAcertos.value);

  if (nome == "") {
    alert("Informe o nome do candidato");
    inNome.focus();
    return;
  }

  if (acertos == "" || isNaN(acertos)) {
    alert("Informe o número de acertos corretamente");
    inAcertos.focus();
    return;
  }

  candidatos.push({nome: nome, acertos: acertos});

  inNome.value = "";
  inAcertos.value = "";
  inNome.focus();

  listarCandidatos();

}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCandidatos);

function listarCandidatos() {
  if (candidatos.length == 0) {
    alert("Não há candidatos na lista");
    return;
  }

  var lista = "";

  for (i = 0; i < candidatos.length; i++) {
    lista += candidatos[i].nome + " - " + candidatos[i].acertos + " acertos\n";
  }

  document.getElementById("outLista").textContent = lista;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCandidatos);

function listarAprovados() {
  if (candidatos.length == 0) {
    alert("Não há candidatos na lista");
    return;
  }

  var notaCorte = Number(prompt("Número de Acertos para a Aprovação? "));

  if (notaCorte == 0 || isNaN(notaCorte)) {
    alert("Número inválido");
    return;
  }

  var copiaCandidatos = candidatos.slice();
  copiaCandidatos.sort(function (a, b) {return a.acertos - b.acertos});
  copiaCandidatos.reverse();

  var aprovados = "";

  for (i = 0; i < copiaCandidatos.length; i++) {
    if (copiaCandidatos[i].acertos >= notaCorte) {
      aprovados += copiaCandidatos[i].nome + " - " + copiaCandidatos[i].acertos + " acertos\n";
    }
  }

  var outLista = document.getElementById("outLista");

  if (aprovados == "") {
    outLista.textContent = "Não há candidatos aprovados...";
  } else { 
    outLista.textContent = aprovados;
  }
}
var btAprovados = document.getElementById("btAprovados");
btAprovados.addEventListener("click", listarAprovados);