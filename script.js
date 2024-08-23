const caixaprincipal = document.querySelector(".caixa-principal");
const caixaperguntas = document.querySelector(".caixa-perguntas");
const caixaalternativas = document.querySelector(".caixa-alternativas");
const caixaresultados = document.querySelector(".caixa-resultados");
const textoresultado = document.querySelector(".texto-resultado");

const perguntas = [
   {
      enunciado: "O que é sustentabilidade ambiental ?",
      alternativas: [
         {
            texto: "É a preservação e manutenção do meio ambiente",
            afirmacao: "quis saber mais sobre "

         },
         {
            texto: "Desmatamento, poluição de rios, mares e florestas."
           afirmacao: "sabe sobre o assunto "
         }
      ]
   },
   {
      enunciado: "O que são produtos biodegradáveis ",
      alternativas: [
         {
            texto: "Produtos que se decompoẽ facilmente composto por material sintetico ",
            afirmacao "sabe sobre o assunto e se preocupa com o meio ambiente"
      },
         {
            texto: "Produtos que se decompoẽ facilmente compostos por elementos orgãnicos ."
            afirmacao: "quer saber mais sobre e como funciona"
         }

      ]
   },
   {
      enunciado: "O que quer dizer o termo greenwashing?",
      alternativas: [
         {
            texto: " Organizações que atuam no segmento de protudos verdes ",
            afirmacao: " se procupam e querem o melhor para o meio ambiental "
         },
         {
            texto: " Marcas que criam uma falsa aparência de sustentabilidade"
            afirmacao: "empresas que não se importa com o meio ambiente"
         }


      ]
   },
   {
      enunciado: "O que melhor define sustentabilidade? ",
      alternativas: [
         {
            texto: " Suprir necessidades do presente sem esgotar recursos para o futuro",
            afirmacao: "isso é o que muitos dizem "
         },
         {
            texto: " Termo que se refer exclusivamente a preservação ambiental"
            afirmacao: "referce que o meio ambiente impota "
         },
      ]
   },
   {
      enunciado: "Qual país é o maior emissor de dióxido de carbono (C02), o principal gás responsável pelo efeito estufa ?",
      alternativas: [
         {
            texto: "Estados Unidos ",
            afirmacao: "isso é incrivel"
         },
         {
            texto: "China "
            afirmacao: "isso é assustador"
         }
      ]
   },
];

let atual = 0;
let pertungaAtual;
let historiafinal = "";

function mostraPergunta() {
   if (atual >= perguntas.length) {
      mostraresultado();
      return;
   }
   perguntaAtual = perguntas[atual];
   caixasperguntas.textContent = perguntaAtual.enunciado;
   caixaalternativas.textContent = "";
   mostraAlternativas();
}

function mostraAlternativas() {
   for (const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa.texto;
      botaoAlternativas.addEventListener("click", () => respostaselecionada(alternativa));
      caixaAlternativas.appendChild(botaoAlternativas);
   }
}

function respostaselecionada(opcaoselecionada) {
   const afirmacoes = opcaoselecionada.afirmacoes;
   historiafinal += afirmacoes + " ";
   atual++;
   mostraPergunta();

}

function mostraresultado() {
   caixaPerguntas.textContent = "Em 2049...";
   textoResultado.textContent = historiaFinal;
   caixaAlternativas.textContent = "";
}

mostraPergunta();
