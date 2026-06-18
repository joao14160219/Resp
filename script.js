/* ============================================================
   RETROSPECTIVA — script.js
   ============================================================
   Toda a lógica do site: música, modal, puzzle, animações.
   Para editar conteúdo (textos, fotos, legendas), procure
   o objeto CAPITULOS abaixo — é o único lugar que você precisa
   alterar.
   ============================================================ */

'use strict';

/* ══════════════════════════════════════════════════════════
   ★ EDITE AQUI — CONTEÚDO DOS CAPÍTULOS
   ══════════════════════════════════════════════════════════
   Cada capítulo tem:
     titulo   → título do card
     descricao → texto curto exibido no card
     capa      → caminho da imagem de capa do card
     fotos     → array de { src, legenda }
                 src: caminho do arquivo de imagem
                 legenda: texto exibido embaixo da foto
   ══════════════════════════════════════════════════════════ */
const CAPITULOS = [
  {
    titulo: 'O começo de tudo',
    descricao: 'Essa foto guarda o começo de tudo. No nosso primeiro dia, eu ainda não sabia explicar, mas já existia alguma coisa acontecendo entre nós. Mal sabia João o quanto ainda ia se apaixonar por você..',
    // ↓ SUBSTITUA pelo caminho da sua foto de capa
    capa: 'imgs/1.jpeg',
    fotos: [
      {
        src: 'imgs/1.jpeg',
        legenda: 'Aqui eu ainda não imaginava quanta coisa viveríamos juntos.'
      }
    ]
  },
  {
    titulo: 'Nosso Primeiro Date',
    descricao: 'Esse dia foi um divisor de águas para mim. Fui sem muitas expectativas e acabei conhecendo uma menina carinhosa, atenciosa e com um jeito que, sem fazer esforço, começou a me ganhar ali mesmo.',
    
    capa: 'imgs/2.jpeg',
    fotos: [
      {
        src: 'imgs/2.jpeg',
        legenda: 'Aqui não tínhamos ideia da história linda que íamos construir, e apesar de tudo, sou muito grato a você.'
      }
    ]
  },
  {
    titulo: 'Meu Wallpaper Favorito',
    descricao: 'Essa foi uma das primeiras foto que mandou e quardo com muito carinho.',
    capa: 'imgs/wallpaper.jpeg',
    fotos: [
      {
        src: 'imgs/wallpaper.jpeg',
        legenda: 'Uma lembrança que ainda consegue arrancar um sorriso.'
      }
    ]
  },
  {
    titulo: 'Praia',
    descricao: 'Aqui já foi difícil esconder o que eu sentia, tanto que escapou um “eu te amo” kkkkk.',
    capa: 'imgs/praia.jpeg',
    fotos: [
      {
        src: 'imgs/praia.jpeg',
        legenda: 'Nois dois bebos.'
      },
      {
        src: 'imgs/praia 2.jpeg',
        legenda: 'Acho que foi aqui que escapou.'
      },
      {
        src: 'imgs/praia 3.jpeg',
        legenda: 'Bebos dnv.'
      },
      {
        src: 'imgs/praia 4.jpeg',
        legenda: 'KKKK nós e uma porca prenha.'
      },
      {
        src: 'imgs/praia 5.jpeg',
        legenda: 'E, por fim, a foto que mandei para sua mãe. Quase uma Cowgirl já kkk.'
      }
    ]
  },
  {
    titulo: 'Aniversário do Crespi',
    descricao: 'Essa foto guarda um dos dias mais felizes da minha vida. Foi o dia em que você me disse “eu te amo” e, por alguns segundos, tudo fez sentido. Ali eu já sabia que a gente realmente estava indo para frente.',
    
    capa: 'imgs/chespi 2.jpeg',
    fotos: [
      {
        src: 'imgs/crespi 1.jpeg',
        legenda: 'Quando pegou meu celular para dar umas conferidas, te amo.'
      },
      {
        src: 'imgs/chespi 2.jpeg',
        legenda: 'Essa foto é bem marcante, aqui foi a certeza do namoro'
      },
      {
        src: 'imgs/chespi 3.jpeg',
        legenda: ''
      },
      {
        src: 'imgs/chespi 4.jpeg',
        legenda: 'Foto do pós brincadeiras.'
      },
      {
        src: 'imgs/chespi 5.jpeg',
        legenda: 'Ninguem é de ferro.'
      },
      {
        src: 'imgs/chespi 6.jpeg',
        legenda: 'Brincadeiras rolaram nesse lugar.'
      }
    ]
  },
  {
    titulo: 'Wilian the sogro',
    descricao: 'Vou sentir saudades das iguarias feitas pelo grande chef Willian e dos mimos culinários.',
    capa: 'imgs/carne_willian.jpeg',
    fotos: [
      {
        src: 'imgs/carne_willian.jpeg',
        legenda: 'Picanha com batata doce roxa, papo de loucura.'
      }
    ]
  },
  {
    titulo: 'Bottega Bernacca',
    descricao: 'Nossa, nesse dia você estava deslumbrante. Tive que te atacar no carro.',
    capa: 'imgs/ibira.jpeg',
    fotos: [
      {
        src: 'imgs/ibira.jpeg',
        legenda: 'Nem todos os momentos importantes pareciam importantes enquanto aconteciam.'
      },
      {
        src: 'imgs/ibira 2.jpeg',
        legenda: 'Uma lembrança que ainda consegue arrancar um sorriso.'
      }
    ]
  },
  {
    titulo: 'Lego',
    descricao: 'Uma flor que dura para sempre, assim como tudo que eu sinto por você.',
    capa: 'imgs/lego.jpeg',
    fotos: [
      {
        src: 'imgs/lego.jpeg',
        legenda: 'Ainda vou te devolver ela montada.'
      },
      {
        src: 'imgs/lego 2.jpeg',
        legenda: 'Nós e a supervisora.'
      }
    ]
  },
  {
    titulo: 'Jantar com os pais',
    descricao: 'Esse dia foi bem legal. Teve até homenagem para você no restaurante.',
    capa: 'imgs/almoço_pais.jpeg',
    fotos: [
      {
        src: 'imgs/almoço_pais.jpeg',
        legenda: 'Linda.'
      },
      {
        src: 'imgs/almoço_pais.mp4',
        tipo: 'video',
        legenda: 'Musica em sua homenagem.'
      }
    ]
  },
  {
    titulo: 'Nós e as graças',
    descricao: 'Aqui eu percebo o seu ponto: quando estava comigo, você era você, sempre com muita alegria.',
    capa: 'imgs/quarto.jpeg',
    fotos: [
      {
        src: 'imgs/quarto.jpeg',
        legenda: 'Estranhos mas sempre juntos.'
      },
      {
        src: 'imgs/quarto 2.jpeg',
        legenda: 'Estilo é para poucos.'
      }
    ]
  },
  {
    titulo: 'Ano novo',
    descricao: 'Apesar da distância, eu me sentia sempre com você, recebendo mensagens desse corpicho gostoso indo para a praia.',
    capa: 'imgs/ano novo.jpeg',
    fotos: [
      {
        src: 'imgs/ano novo.jpeg',
        legenda: 'Deusa grega.'
      }
    ]
  },
  {
    titulo: 'Parati',
    descricao: 'Nessa viagem, vimos um pouquinho do que é ser pais kkkk. Vicente não desgrudava de nós dois (Titicia).',
    capa: 'imgs/parati.jpeg',
    fotos: [
      {
        src: 'imgs/parati.jpeg',
        legenda: 'Eu você e a mamis'
      },
      {
        src: 'imgs/parati 2.jpeg',
        legenda: 'Agora com a helenão e o Duardo.'
      },
      {
        src: 'imgs/parati 3.jpeg',
        legenda: 'Até de longe é linda, como pode.'
      }
    ]
  },
  {
    titulo: 'Fotos avulsas nossas',
    descricao: 'Só quero dizer que nunca foi minha intenção me separar de você. Esses momentos eram muito bons, minha princesa.',
    capa: 'imgs/WhatsApp Image 2026-06-18 at 09.17.07 (1).jpeg',
    fotos: [
      {
        src: 'imgs/WhatsApp Image 2026-06-18 at 09.17.07 (1).jpeg',
        legenda: 'Nosso neguinho de estimação.'
      },
      {
        src: 'imgs/WhatsApp Image 2026-06-18 at 09.17.07 (2).jpeg',
        legenda: 'Sushizinho em casa mesmo(Tava com vontade em kkkk).'
      },
      {
        src: 'imgs/WhatsApp Image 2026-06-18 at 09.42.04.jpeg',
        legenda: 'Foto mais pura nossa.'
      },
      {
        src: 'imgs/WhatsApp Image 2026-06-18 at 09.43.36.jpeg',
        legenda: 'Adoro essas fotos juntos em lugares aleatórios.'
      }
    ]
  }
];


/* ══════════════════════════════════════════════════════════
   INICIALIZAÇÃO
   ══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  iniciarHero();
  iniciarCartaOnline();
  construirCapitulos();
  iniciarModal();
  iniciarMusica();
  iniciarPuzzle();
  iniciarScrollReveal();
});


/* ══════════════════════════════════════════════════════════
   HERO
   ══════════════════════════════════════════════════════════ */
function iniciarHero() {
  // Efeito Ken Burns no fundo
  const heroBg = document.getElementById('hero-bg');
  if (heroBg) {
    setTimeout(() => heroBg.classList.add('ativo'), 100);
  }

  // Botão "Começar retrospectiva" — rola até os capítulos
  const btnComecar = document.getElementById('btn-comecar');
  if (btnComecar) {
    btnComecar.addEventListener('click', () => {
      document.getElementById('capitulos')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Botão "Continuar" da seção Destaque → scroll até o puzzle
  const btnDestContinuar = document.getElementById('btn-dest-continuar');
  if (btnDestContinuar) {
    btnDestContinuar.addEventListener('click', () => {
      document.getElementById('quebra-cabeca')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Botão "Continuar" após o puzzle → scroll até a seção final
  const btnPuzzleContinuar = document.getElementById('btn-puzzle-continuar');
  if (btnPuzzleContinuar) {
    btnPuzzleContinuar.addEventListener('click', () => {
      document.getElementById('final')?.scrollIntoView({ behavior: 'smooth' });
    });
  }
}


/* ══════════════════════════════════════════════════════════
   MÚSICA
   ══════════════════════════════════════════════════════════ */
function iniciarMusica() {
  const audio = document.getElementById('audio-nossa-musica');
  const btn   = document.getElementById('ctrl-musica');
  const barra = document.getElementById('barra-musica');

  if (!btn || !audio) return;

  let tocando = false;

  btn.addEventListener('click', () => {
    if (tocando) {
      audio.pause();
      btn.setAttribute('aria-label', 'Reproduzir nossa música');
      btn.querySelector('.txt-musica').textContent = 'Reproduzir nossa música';
      btn.querySelector('.icone-musica').textContent = '♪';
    } else {
      // carregar e tocar
      audio.play().catch(() => {
        /* Autoplay bloqueado — o usuário já clicou, então deve funcionar */
      });
      btn.setAttribute('aria-label', 'Pausar música');
      btn.querySelector('.txt-musica').textContent = 'Pausar música';
      btn.querySelector('.icone-musica').textContent = '⏸';
    }
    tocando = !tocando;
  });

  // barra de progresso fixa na base da tela
  audio.addEventListener('timeupdate', () => {
    if (!barra || !audio.duration) return;
    const pct = (audio.currentTime / audio.duration) * 100;
    barra.style.width = pct + '%';
  });

  audio.addEventListener('ended', () => {
    tocando = false;
    btn.querySelector('.txt-musica').textContent = 'Reproduzir nossa música';
    btn.querySelector('.icone-musica').textContent = '♪';
    if (barra) barra.style.width = '0%';
  });
}


/* ══════════════════════════════════════════════════════════
   CONSTRUIR CARDS DOS CAPÍTULOS
   ══════════════════════════════════════════════════════════ */
function construirCapitulos() {
  const grade = document.getElementById('grade-capitulos');
  if (!grade) return;

  CAPITULOS.forEach((cap, idx) => {
    const num = String(idx + 1).padStart(2, '0');
    const card = document.createElement('article');
    card.className = 'card-capitulo revelar';
    card.style.transitionDelay = `${(idx % 3) * 0.08}s`;

    card.innerHTML = `
      <div class="card-capa">
        ${imagemOuPlaceholder(cap.capa, cap.titulo)}
        <span class="card-num">Cap. ${num}</span>
      </div>
      <div class="card-corpo">
        <h3 class="card-titulo">${cap.titulo}</h3>
        <p class="card-desc">${cap.descricao}</p>
        <button class="card-btn" aria-label="Ver capítulo: ${cap.titulo}">
          Ver capítulo
        </button>
      </div>
    `;

    const imgCapa = card.querySelector('.card-capa img');
    imgCapa?.addEventListener('error', () => {
      const capaEl = card.querySelector('.card-capa');
      if (capaEl) {
        capaEl.innerHTML = `${placeholderHTML()}<span class="card-num">Cap. ${num}</span>`;
      }
    });

    card.querySelector('.card-btn').addEventListener('click', () => abrirModal(idx));
    card.addEventListener('click', () => abrirModal(idx));
    grade.appendChild(card);
  });
}

/** Retorna <img> se a fonte existe visualmente, ou o placeholder */
function imagemOuPlaceholder(src, alt) {
  // Placeholder por padrão; JS no modal tentará carregar a real
  if (!src) return placeholderHTML();
  return `
    <img
      src="${src}"
      alt="${alt}"
      loading="lazy">
  `;
}

function placeholderHTML() {
  return `<div class="placeholder-foto"><span>🖼</span>Adicionar foto</div>`;
}


/* ══════════════════════════════════════════════════════════
   MODAL — galeria de fotos
   ══════════════════════════════════════════════════════════ */
let modalIndice = 0;   // índice do capítulo aberto
let fotoAtual  = 0;   // índice da foto atual no carrossel

function iniciarModal() {
  const modal     = document.getElementById('modal-capitulo');
  const btnFechar = document.getElementById('modal-fechar');
  const btnAntes  = document.getElementById('modal-antes');
  const btnDepois = document.getElementById('modal-depois');

  if (!modal) return;

  btnFechar.addEventListener('click', fecharModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) fecharModal();
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('aberto')) return;
    if (e.key === 'Escape') fecharModal();
    if (e.key === 'ArrowLeft')  navegarFoto(-1);
    if (e.key === 'ArrowRight') navegarFoto(+1);
  });

  btnAntes.addEventListener('click', () => navegarFoto(-1));
  btnDepois.addEventListener('click', () => navegarFoto(+1));
}

function abrirModal(indiceCapitulo) {
  const cap   = CAPITULOS[indiceCapitulo];
  const modal = document.getElementById('modal-capitulo');
  if (!modal || !cap) return;

  modalIndice = indiceCapitulo;
  fotoAtual   = 0;

  document.getElementById('modal-titulo-cap').textContent = cap.titulo;

  // Construir miniaturas
  const thumbsEl = document.getElementById('modal-thumbs');
  thumbsEl.innerHTML = '';
  cap.fotos.forEach((f, i) => {
    const el = document.createElement(f.src && f.tipo !== 'video' ? 'img' : 'div');
    if (f.src && f.tipo !== 'video') {
      el.src = f.src;
      el.alt = f.legenda || `Foto ${i + 1}`;
      el.className = 'thumb';
      el.onerror = function () {
        const ph = document.createElement('div');
        ph.className = 'thumb-placeholder';
        ph.textContent = '🖼';
        this.replaceWith(ph);
        ph.addEventListener('click', () => irParaFoto(i));
        if (i === fotoAtual) ph.classList.add('ativa');
      };
    } else {
      el.className = 'thumb-placeholder';
      el.textContent = f.tipo === 'video' ? '▶' : '🖼';
    }
    el.addEventListener('click', () => irParaFoto(i));
    if (i === 0) el.classList.add('ativa');
    thumbsEl.appendChild(el);
  });

  modal.classList.add('aberto');
  document.body.style.overflow = 'hidden';

  irParaFoto(0, false);

  // Foco no botão fechar (acessibilidade)
  setTimeout(() => document.getElementById('modal-fechar')?.focus(), 100);
}

function fecharModal() {
  const modal = document.getElementById('modal-capitulo');
  if (!modal) return;
  document.getElementById('modal-video-principal')?.pause();
  modal.classList.remove('aberto');
  document.body.style.overflow = '';
}

function irParaFoto(idx, animar = true) {
  const cap   = CAPITULOS[modalIndice];
  const foto  = cap?.fotos[idx];
  if (!foto) return;

  const imgEl    = document.getElementById('modal-foto-principal');
  const videoEl  = document.getElementById('modal-video-principal');
  const legEl    = document.getElementById('modal-legenda');
  const indEl    = document.getElementById('modal-indicador');
  const btnAntes = document.getElementById('modal-antes');
  const btnDepois= document.getElementById('modal-depois');

  if (animar) {
    imgEl.classList.add('trocando');
    videoEl?.classList.add('trocando');
    setTimeout(() => fazerTrocaFoto(foto, imgEl, videoEl, legEl), 180);
  } else {
    fazerTrocaFoto(foto, imgEl, videoEl, legEl);
  }

  fotoAtual = idx;
  indEl.textContent = `${idx + 1} / ${cap.fotos.length}`;
  btnAntes.disabled  = idx === 0;
  btnDepois.disabled = idx === cap.fotos.length - 1;

  // Atualizar thumbs
  document.querySelectorAll('#modal-thumbs .thumb, #modal-thumbs .thumb-placeholder').forEach((t, i) => {
    t.classList.toggle('ativa', i === idx);
  });
}

function fazerTrocaFoto(foto, imgEl, videoEl, legEl) {
  if (videoEl) {
    videoEl.pause();
    videoEl.removeAttribute('src');
    videoEl.load();
    videoEl.style.display = 'none';
  }

  if (foto.src && foto.tipo === 'video' && videoEl) {
    imgEl.style.display = 'none';
    videoEl.src = foto.src;
    videoEl.style.display = '';
  } else if (foto.src) {
    imgEl.src = foto.src;
    imgEl.alt = foto.legenda || '';
    imgEl.style.display = '';
    imgEl.onerror = function () {
      this.style.display = 'none';
    };
  } else {
    imgEl.style.display = 'none';
  }
  legEl.textContent = foto.legenda || '';
  imgEl.classList.remove('trocando');
  videoEl?.classList.remove('trocando');
}

function navegarFoto(direcao) {
  const novoIdx = fotoAtual + direcao;
  const cap = CAPITULOS[modalIndice];
  if (!cap || novoIdx < 0 || novoIdx >= cap.fotos.length) return;
  irParaFoto(novoIdx);
}


/* ══════════════════════════════════════════════════════════
   QUEBRA-CABEÇA 3×3
   ══════════════════════════════════════════════════════════ */
function iniciarPuzzle() {
  const grid        = document.getElementById('puzzle-grid');
  const btnRecomecar = document.getElementById('btn-recomecar-puzzle');
  const concluido   = document.getElementById('puzzle-concluido');

  if (!grid) return;

  const COLS = 3;
  const ROWS = 3;
  const TOTAL = COLS * ROWS;

  // ↓ SUBSTITUA pelo caminho da sua foto do quebra-cabeça
  const IMG_SRC = 'imgs/QuebraCabeca.jpeg';

  let pecas = [];          // ordem atual (array de 0..8)
  let arrastando = null;   // índice da peça em drag
  let tamanho = 0;         // px do grid

  function calcTamanho() {
    const maxW = Math.min(window.innerWidth - 48, 420);
    tamanho = Math.floor(maxW / COLS) * COLS;
    grid.style.width  = tamanho + 'px';
    grid.style.height = tamanho + 'px';
    return tamanho;
  }

  function criarPecas() {
    grid.innerHTML = '';
    calcTamanho();
    const pecaSize = tamanho / COLS;

    pecas.forEach((posOriginal, posAtual) => {
      const col = posOriginal % COLS;
      const row = Math.floor(posOriginal / COLS);

      const peca = document.createElement('div');
      peca.className = 'puzzle-peca';
      peca.dataset.posAtual   = posAtual;
      peca.dataset.posOriginal = posOriginal;
      peca.style.width  = pecaSize + 'px';
      peca.style.height = pecaSize + 'px';

      // Background-position para simular recorte
      peca.style.backgroundImage = `url('${IMG_SRC}')`;
      peca.style.backgroundSize = `${COLS * 100}% ${ROWS * 100}%`;
      peca.style.backgroundPosition = `${col * 50}% ${row * 50}%`;
      peca.style.backgroundRepeat = 'no-repeat';
      peca.style.backgroundColor = '#1a0a10';

      // Testa se a imagem existe
      const imgTeste = new Image();

      imgTeste.onload = () => {
       peca.style.backgroundImage = `url('${IMG_SRC}')`;
      };

      imgTeste.onerror = () => {
        peca.style.backgroundImage = 'none';
        peca.style.background = `hsl(${posOriginal * 40}, 30%, 20%)`;
        peca.style.display = 'flex';
        peca.style.alignItems = 'center';
        peca.style.justifyContent = 'center';
        peca.style.color = 'rgba(255,255,255,0.2)';
        peca.style.fontSize = '1.4rem';
        peca.textContent = posOriginal + 1;
    };

    imgTeste.src = IMG_SRC;

      // Eventos de drag (mouse + touch)
      adicionarEventosDrag(peca, posAtual);

      grid.appendChild(peca);
    });
  }

  function embaralhar() {
    // Fisher–Yates
    const arr = Array.from({ length: TOTAL }, (_, i) => i);
    for (let i = TOTAL - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    pecas = arr;
    concluido.style.display = 'none';
    grid.style.display = 'grid';
    criarPecas();
  }

  function verificarConclusao() {
    const correto = pecas.every((v, i) => v === i);
    if (correto) mostrarConclusao();
  }

  function mostrarConclusao() {
    // Mantém o quebra-cabeça visível e montado
    grid.style.display = 'grid';
    grid.classList.add('concluido');

    // Exibe a mensagem abaixo da imagem
    concluido.style.display = 'flex';

    lancarConfetti();
  }

  // ── Drag & Drop (mouse) ──────────────────────
  function adicionarEventosDrag(peca, idx) {
    // Mouse
    peca.addEventListener('mousedown', iniciarDrag.bind(null, idx));
    // Touch
    peca.addEventListener('touchstart', iniciarDragTouch.bind(null, idx), { passive: true });
  }

  function iniciarDrag(idx) {
    arrastando = idx;
    const pEl = grid.children[idx];
    if (pEl) pEl.classList.add('arrastando');
  }

  function iniciarDragTouch(idx) {
    arrastando = idx;
    const pEl = grid.children[idx];
    if (pEl) pEl.classList.add('arrastando');
  }

  // Soltar sobre outro elemento
  grid.addEventListener('mouseup', (e) => {
    const alvo = e.target.closest('.puzzle-peca');
    if (alvo && arrastando !== null) {
      const idxAlvo = parseInt(alvo.dataset.posAtual, 10);
      trocarPecas(arrastando, idxAlvo);
    }
    limparDrag();
  });

  grid.addEventListener('touchend', (e) => {
    const toque = e.changedTouches[0];
    const alvo  = document.elementFromPoint(toque.clientX, toque.clientY)?.closest('.puzzle-peca');
    if (alvo && arrastando !== null) {
      const idxAlvo = parseInt(alvo.dataset.posAtual, 10);
      trocarPecas(arrastando, idxAlvo);
    }
    limparDrag();
  });

  document.addEventListener('mouseup', limparDrag);

  function limparDrag() {
    if (arrastando !== null) {
      const pEl = grid.children[arrastando];
      if (pEl) pEl.classList.remove('arrastando');
    }
    arrastando = null;
    document.querySelectorAll('.puzzle-peca').forEach(p => p.classList.remove('destino-alvo'));
  }

  // Hover visual ao arrastar
  grid.addEventListener('mousemove', (e) => {
    if (arrastando === null) return;
    document.querySelectorAll('.puzzle-peca').forEach(p => p.classList.remove('destino-alvo'));
    const alvo = e.target.closest('.puzzle-peca');
    if (alvo) alvo.classList.add('destino-alvo');
  });

  function trocarPecas(idxA, idxB) {
    if (idxA === idxB) return;
    [pecas[idxA], pecas[idxB]] = [pecas[idxB], pecas[idxA]];
    criarPecas();
    verificarConclusao();
  }

  // ── Botão recomeçar ──────────────────────────
  btnRecomecar?.addEventListener('click', embaralhar);

  // ── Iniciar ─────────────────────────────────
  embaralhar();

  // Recalcular no resize
  window.addEventListener('resize', () => {
    criarPecas();
  });
}


/* ══════════════════════════════════════════════════════════
   CONFETTI SIMPLES (sem biblioteca)
   ══════════════════════════════════════════════════════════ */
function lancarConfetti() {
  const canvas = document.getElementById('puzzle-confetti');
  if (!canvas) return;

  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const CORES = ['#c0384e', '#7d1a2e', '#f0e8e0', '#a02540', '#ffffff'];
  const particulas = Array.from({ length: 80 }, () => ({
    x:  Math.random() * canvas.width,
    y: -10 - Math.random() * 80,
    r:  2 + Math.random() * 4,
    cor: CORES[Math.floor(Math.random() * CORES.length)],
    vx: -1 + Math.random() * 2,
    vy:  2 + Math.random() * 3,
    rot: Math.random() * 360,
    vr:  -2 + Math.random() * 4
  }));

  let frame;
  function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let vivas = 0;
    particulas.forEach(p => {
      if (p.y > canvas.height + 20) return;
      vivas++;
      p.x  += p.vx;
      p.y  += p.vy;
      p.rot += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.fillStyle = p.cor;
      ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r);
      ctx.restore();
    });
    if (vivas > 0) {
      frame = requestAnimationFrame(animar);
    } else {
      canvas.style.display = 'none';
    }
  }

  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(animar);

  // Parar após 3s independentemente
  setTimeout(() => {
    cancelAnimationFrame(frame);
    canvas.style.display = 'none';
  }, 3200);
}


/* ══════════════════════════════════════════════════════════
   SCROLL REVEAL
   ══════════════════════════════════════════════════════════ */
function iniciarScrollReveal() {
  const alvo = document.querySelectorAll('.revelar');

  if (!('IntersectionObserver' in window)) {
    // Fallback: mostrar tudo
    alvo.forEach(el => el.classList.add('visivel'));
    return;
  }

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visivel');
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  alvo.forEach(el => obs.observe(el));
}

function iniciarCartaOnline() {
  const btnAbrir = document.getElementById('btn-carta-online');
  const modal = document.getElementById('modal-carta-online');
  const btnFechar = document.getElementById('btn-fechar-carta-online');

  if (!btnAbrir || !modal || !btnFechar) return;

  function abrirCarta() {
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    btnFechar.focus();
  }

  function fecharCarta() {
    modal.hidden = true;
    document.body.style.overflow = '';
    btnAbrir.focus();
  }

  btnAbrir.addEventListener('click', abrirCarta);
  btnFechar.addEventListener('click', fecharCarta);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) fecharCarta();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) fecharCarta();
  });
}
