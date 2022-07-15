const botaoCriaCarta = document.getElementById('criar-carta');
const contadorPalavras = document.getElementById('carta-contador');
const cartaGerada = document.getElementById('carta-gerada');
const rotuloContador = document.getElementById('rotulo-contador');
const grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
const grupoTamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];

function pegarAleatorio(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

function aplicarAleatorio(event) {
  const evento = event;
  evento.target.className = ''; // reset de classes
  const estiloAlt = pegarAleatorio(grupoEstilo);
  const tamanhoAlt = pegarAleatorio(grupoTamanho);
  const rotacaoAlt = pegarAleatorio(rotacao);
  const inclinacaoAlt = pegarAleatorio(inclinacao);
  evento.target.classList.add(estiloAlt, tamanhoAlt, rotacaoAlt, inclinacaoAlt);
}

function criaCarta() {
  const textoCarta = document.getElementById('carta-texto').value.trim();
  if (textoCarta === '') {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    cartaGerada.innerText = '';
    const arrayPalavras = textoCarta.split(' ');
    for (let index = 0; index < arrayPalavras.length; index += 1) {
      const spanPalavra = document.createElement('span');
      spanPalavra.style.display = 'inline-block';
      spanPalavra.classList.add(pegarAleatorio(grupoEstilo), pegarAleatorio(grupoTamanho));
      spanPalavra.classList.add(pegarAleatorio(rotacao), pegarAleatorio(inclinacao));
      spanPalavra.innerText = `${arrayPalavras[index]}`;
      spanPalavra.addEventListener('click', aplicarAleatorio);
      cartaGerada.appendChild(spanPalavra);
    }
    rotuloContador.style.display = 'block';
    contadorPalavras.innerText = arrayPalavras.length;
  }
}

botaoCriaCarta.addEventListener('click', criaCarta);
