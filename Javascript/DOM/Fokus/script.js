// Documento
const html = document.querySelector("html");

// Botoes
const btn_iniciar = document.getElementById("start-pause");
const btn_iniciar_texto = document.querySelector("#start-pause span");
const btn_iniciar_img = document.querySelector("#start-pause img");
const btn_foco = document.querySelector(".app__card-button--foco");
const btn_curto = document.querySelector(".app__card-button--curto");
const btn_longo = document.querySelector(".app__card-button--longo");
const btns = document.querySelectorAll(".app__card-button");

// Elementos
const display_timer = document.getElementById("timer");

// Imagem
const img = document.querySelector(".app__image");

// Frase
const frase = document.querySelector(".app__title");

// Musica
const toggle_musica = document.getElementById("alternar-musica");
const audio = new Audio("./sons/luna-rise-part-one.mp3");
audio.loop = true; // deixa a musica em looping

// Efeitos Sonoros
const audio_play = new Audio("./sons/play.wav");
const audio_pause = new Audio("./sons/pause.mp3");
const audio_timesup = new Audio("./sons/beep.mp3");

// Valores Tempos
let tempo_decorrido = 1500;

// ID do Intervalo
let id_intervalo = null;

/* 
addEventListener -> Um metodo do alvo do evento (elemento), que registra o que ocorre no DOM. 
Dispara uma função quando um evento especifico acontece para aquele alvo
Ele recebe 2 parametros:
  - Tipo do evento
  - Função disparada devido ao evento 


setAttribute -> Metodo do elemento de interface que serve para 
  inserir/alterar o valor de algum atributo definido no elemento especifico
  Ele recebe 2 parametros:
    - Nome do atributo
    - Valor do atributo
*/
btn_foco.addEventListener("click", () => {
  tempo_decorrido = 1500;
  alerarContextos("foco");
  btn_foco.classList.add("active");
});

btn_curto.addEventListener("click", () => {
  tempo_decorrido = 300;
  alerarContextos("descanso-curto");
  btn_curto.classList.add("active");
});

btn_longo.addEventListener("click", () => {
  tempo_decorrido = 900;
  alerarContextos("descanso-longo");
  btn_longo.classList.add("active");
});

function alerarContextos(contexto) {
  displayTimer();
  btns.forEach((elemento, indice) => {
    elemento.classList.remove("active");
  });

  html.setAttribute("data-contexto", contexto);
  img.setAttribute("src", `./imagens/${contexto}.png`);

  switch (contexto) {
    case "foco":
      frase.innerHTML = `Otimize sua produtividade,<br /> <strong class="app__title-strong">mergulhe no que importa</strong>`;
      break;
    case "descanso-curto":
      frase.innerHTML = `Que tal dar uma respirada?<br />  <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
      break;
    case "descanso-longo":
      frase.innerHTML = `Hora de voltar à superfície.<br /> <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
      break;
    default:
      break;
  }
}

toggle_musica.addEventListener("change", (event) => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

btn_iniciar.addEventListener("click", iniciarPausarContagem);

function iniciarPausarContagem() {
  if (id_intervalo) {
    zerarId();
    audio_pause.play();
    return;
  }

  audio_play.play();
  btn_iniciar_texto.textContent = "Pausar";
  btn_iniciar_img.setAttribute("src", `./imagens/pause.png`);
  id_intervalo = setInterval(contagemRegressiva, 1000);
}

function contagemRegressiva() {
  if (tempo_decorrido <= 0) {
    // audio_timesup.play();
    alert("Tempo Finalizado!");

    // Pega o contexto do timer e cria um evento customizado para ser disparado para o DOM
    const foco_ativo = html.getAttribute("data-contexto") == "foco";
    if (foco_ativo) {
      const evento = new CustomEvent("FocoFinalizado");
      document.dispatchEvent(evento);
    }

    zerarId();
    btn_iniciar_texto.textContent = "Recomeçar";
    return;
  }
  tempo_decorrido -= 1;
  displayTimer();
}

function zerarId() {
  clearInterval(id_intervalo);
  btn_iniciar_texto.textContent = "Começar";
  btn_iniciar_img.setAttribute("src", `./imagens/play_arrow.png`);
  id_intervalo = null;
}

function displayTimer() {
  const tempo = new Date(tempo_decorrido * 1000);
  const tempo_formatado = tempo.toLocaleTimeString("pt-Br", {
    minute: "2-digit",
    second: "2-digit",
  });
  display_timer.innerHTML = `${tempo_formatado}`;
}
displayTimer(tempo_decorrido);
