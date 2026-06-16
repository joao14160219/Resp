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
    descricao: 'As primeiras conversas, os primeiros encontros e o começo de algo que ainda não sabíamos onde chegaria.',
    // ↓ SUBSTITUA pelo caminho da sua foto de capa
    capa: 'assets/images/capitulo-1-capa.jpg',
    fotos: [
      {
        src: 'assets/images/capitulo-1-1.jpg',
        legenda: 'Aqui eu ainda não imaginava quanta coisa viveríamos juntos.'
      },
      {
        src: 'assets/images/capitulo-1-2.jpg',
        legenda: 'Esse dia começou comum e terminou virando uma das minhas lembranças favoritas.'
      },
      {
        src: 'assets/images/capitulo-1-3.jpg',
        legenda: 'Nem todos os momentos importantes pareciam importantes enquanto aconteciam.'
      }
    ]
  },
  {
    titulo: 'Quando viramos nós',
    descricao: 'O momento em que deixou de existir apenas você e eu e começou a existir nós.',
    capa: 'assets/images/capitulo-2-capa.jpg',
    fotos: [
      {
        src: 'assets/images/capitulo-2-1.jpg',
        legenda: 'Uma das coisas mais bonitas foi transformar momentos simples em lembranças.'
      },
      {
        src: 'assets/images/capitulo-2-2.jpg',
        legenda: 'Essa foto ainda me faz lembrar exatamente de como eu me sentia naquele dia.'
      }
    ]
  },
  {
    titulo: 'Nossos dias comuns',
    descricao: 'Os dias simples, as conversas sem hora, as comidas, os filmes e os momentos que pareciam pequenos, mas hoje significam muito.',
    capa: 'assets/images/capitulo-3-capa.jpg',
    fotos: [
      {
        src: 'assets/images/capitulo-3-1.jpg',
        legenda: 'Uma lembrança que ainda consegue arrancar um sorriso.'
      },
      {
        src: 'assets/images/capitulo-3-2.jpg',
        legenda: 'Nem todo momento precisa ser especial para ser lembrado com carinho.'
      },
      {
        src: 'assets/images/capitulo-3-3.jpg',
        legenda: 'Esses momentos simples são os que mais ficam.'
      }
    ]
  },
  {
    titulo: 'Nossas aventuras',
    descricao: 'Os lugares que conhecemos, os passeios e os momentos em que o mundo parecia um pouco mais leve.',
    capa: 'assets/images/capitulo-4-capa.jpg',
    fotos: [
      {
        src: 'assets/images/capitulo-4-1.jpg',
        legenda: 'Descobrir lugares juntos tem um gosto diferente de tudo.'
      },
      {
        src: 'assets/images/capitulo-4-2.jpg',
        legenda: 'Esse dia ainda me faz querer repetir cada detalhe.'
      }
    ]
  },
  {
    titulo: 'As nossas melhores versões',
    descricao: 'Momentos em que cuidamos, apoiamos e fizemos bem um ao outro.',
    capa: 'assets/images/capitulo-5-capa.jpg',
    fotos: [
      {
        src: 'assets/images/capitulo-5-1.jpg',
        legenda: 'Essa foto ainda me faz lembrar exatamente de como eu me sentia naquele dia.'
      },
      {
        src: 'assets/images/capitulo-5-2.jpg',
        legenda: 'Existiram momentos em que fomos muito bons um para o outro.'
      }
    ]
  },
  {
    titulo: 'Coisas que só a gente entende',
    descricao: 'As brincadeiras, os apelidos, as frases e as memórias que só fazem sentido para nós.',
    capa: 'assets/images/capitulo-6-capa.jpg',
    fotos: [
      {
        src: 'assets/images/capitulo-6-1.jpg',
        legenda: 'Algumas referências que ninguém mais ia entender além de nós dois.'
      },
      {
        src: 'assets/images/capitulo-6-2.jpg',
        legenda: 'Uma lembrança que ainda consegue arrancar um sorriso.'
      }
    ]
  },
  {
    titulo: 'Um capítulo que ainda significa muito',
    descricao: 'Nem toda história precisa ser perfeita para ter sido verdadeira.',
    capa: 'assets/images/capitulo-7-capa.jpg',
    fotos: [
      {
        src: 'assets/images/capitulo-7-1.jpg',
        legenda: 'Nem todos os momentos importantes pareciam importantes enquanto aconteciam.'
      },
      {
        src: 'assets/images/capitulo-7-2.jpg',
        legenda: 'Essa foto ainda me faz lembrar exatamente de como eu me sentia naquele dia.'
      },
      {
        src: 'assets/images/capitulo-7-3.jpg',
        legenda: 'Algumas histórias não precisam de um final perfeito para terem sido verdadeiras.'
      }
    ]
  }
];


/* ══════════════════════════════════════════════════════════
   INICIALIZAÇÃO
   ══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  iniciarHero();
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
      loading="lazy"
      onerror="this.parentElement.innerHTML='${placeholderHTML().replace(/'/g, "\\'")}'">
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
    const el = document.createElement(f.src ? 'img' : 'div');
    if (f.src) {
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
      el.textContent = '🖼';
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
  modal.classList.remove('aberto');
  document.body.style.overflow = '';
}

function irParaFoto(idx, animar = true) {
  const cap   = CAPITULOS[modalIndice];
  const foto  = cap?.fotos[idx];
  if (!foto) return;

  const imgEl    = document.getElementById('modal-foto-principal');
  const legEl    = document.getElementById('modal-legenda');
  const indEl    = document.getElementById('modal-indicador');
  const btnAntes = document.getElementById('modal-antes');
  const btnDepois= document.getElementById('modal-depois');

  if (animar) {
    imgEl.classList.add('trocando');
    setTimeout(() => fazerTrocaFoto(foto, imgEl, legEl), 180);
  } else {
    fazerTrocaFoto(foto, imgEl, legEl);
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

function fazerTrocaFoto(foto, imgEl, legEl) {
  if (foto.src) {
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