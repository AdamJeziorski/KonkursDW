// =============================================
// utils.js — wspolne funkcje dla wszystkich gier
// nic specjalnego, po prostu przydatne rzeczy
// =============================================

// --- TABLICE I LOSOWANIE ---

// fisher-yates, klasyk
function tasujTablice(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// alias uzywany przez gre 1 z N
const tasuj = tasujTablice;

/**
 * Pobiera N losowych pytań z puli
 */
function losujPytania(pula, ile) {
  return tasujTablice(pula).slice(0, ile);
}

// --- STAN GRY 1 Z N ---

/**
 * Tworzy stan gry na podstawie listy graczy
 * @param {string[]} gracze — tablica nazw graczy
 * @param {object[]} pytania — tablica pytań
 * @returns {object} stan gry
 */
function stworzStanGry(gracze, pytania) {
  return {
    gracze: gracze.map((nazwa, i) => ({
      id: i,
      nazwa,
      punkty: 0,
      aktywny: true,
      buzzed: false,
    })),
    pytania,
    aktualnyIndeks: 0,
    fazaGry: "pytanie",   // "pytanie" | "odpowiedz" | "wynik" | "koniec"
    buzzKolejka: [],      // kolejność buzzowania w tej rundzie
    historiaPunktow: [],  // [{graczId, pytanieId, poprawna}]
    czas: null,
  };
}

/**
 * Zwraca tytuł gry na podstawie liczby graczy
 */
function tytulGry(ilu) {
  return `1 z ${ilu}`;
}

/**
 * Sprawdza czy odpowiedź jest poprawna (case-insensitive, trim)
 */
function sprawdzOdpowiedz(wpisana, poprawna) {
  return wpisana.trim().toLowerCase() === poprawna.trim().toLowerCase();
}

/**
 * Zwraca gracza prowadzącego (max punkty), lub null jeśli remis
 */
function liderGry(gracze) {
  const max = Math.max(...gracze.map(g => g.punkty));
  const liderzy = gracze.filter(g => g.punkty === max);
  return liderzy.length === 1 ? liderzy[0] : null;
}

/**
 * Formatuje wyniki końcowe posortowane malejąco
 */
function rankingGraczy(gracze) {
  return [...gracze].sort((a, b) => b.punkty - a.punkty);
}

/**
 * Zwraca klawisz klawiatury dla gracza (1–9, 0 dla 10-go; null dla 11–30)
 */
function klawiszGracza(indeks) {
  const klawisze = ["1","2","3","4","5","6","7","8","9","0"];
  return klawisze[indeks] ?? null;
}

/**
 * Zwraca etykietę skrótu klawiszowego do wyświetlenia.
 * Dla graczy 11+ zwraca pusty string.
 */
function labelKlawisza(indeks) {
  const k = klawiszGracza(indeks);
  return k ? `[${k}]` : '';
}

/**
 * Czy gracz buzzuje klawiaturą (tylko pierwsi 10)
 */
function buzzujeKlawiatura(indeks) {
  return indeks < 10;
}

/**
 * Ile pytań zagrać domyślnie dla danej liczby graczy.
 * Minimum 10, maksimum dostępna pula.
 */
function domyslnaLiczbaPytan(ilu) {
  return Math.min(Math.max(10, ilu), typeof PYTANIA !== 'undefined' ? PYTANIA.length : 44);
}

// --- UI HELPERS ---

function pokazToast(wiadomosc, typ = 'info', czas = 3000) {
  // usun stary toast jesli jest
  const stary = document.getElementById('toast-global');
  if (stary) stary.remove();

  const toast = document.createElement('div');
  toast.id = 'toast-global';
  toast.className = `toast toast--${typ}`;
  toast.textContent = wiadomosc;
  document.body.appendChild(toast);

  // malutkie opoznienie zeby css transition dzialal
  setTimeout(() => toast.classList.add('toast--show'), 10);
  setTimeout(() => {
    toast.classList.remove('toast--show');
    setTimeout(() => toast.remove(), 400);
  }, czas);
}

function formatujCzas(sekundy) {
  const m = Math.floor(sekundy / 60);
  const s = sekundy % 60;
  return m > 0 ? `${m}:${s.toString().padStart(2, '0')}` : `${s}s`;
}

// --- DZWIEKI (syntetyczne przez Web Audio API) ---

let _audioCtx = null;
function getAudio() {
  if (!_audioCtx) {
    try {
      _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch(e) {
      return null;
    }
  }
  return _audioCtx;
}

function dzwiek(typ) {
  const ctx = getAudio();
  if (!ctx) return;

  const osc  = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);

  const now = ctx.currentTime;

  if (typ === 'poprawna') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523, now);
    osc.frequency.setValueAtTime(659, now + 0.1);
    osc.frequency.setValueAtTime(784, now + 0.2);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
    osc.start(now);
    osc.stop(now + 0.7);
  } else if (typ === 'zla') {
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(100, now + 0.4);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    osc.start(now);
    osc.stop(now + 0.4);
  } else if (typ === 'klik') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
    osc.start(now);
    osc.stop(now + 0.1);
  } else if (typ === 'buzz') {
    // buzz gracza — krotki pisk
    osc.type = 'square';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
    osc.start(now);
    osc.stop(now + 0.15);
  } else if (typ === 'wygrana') {
    // maly fanfar
    const nuty = [523, 659, 784, 1047];
    nuty.forEach((freq, i) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.type = 'sine';
      o.frequency.setValueAtTime(freq, now + i * 0.12);
      g.gain.setValueAtTime(0.15, now + i * 0.12);
      g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.2);
      o.start(now + i * 0.12);
      o.stop(now + i * 0.12 + 0.3);
    });
  }
}

// --- HISTORIA WYNIKOW (localStorage) ---

// zapisuje wynik do localStorage
function zapiszWynik(gra, wynik) {
  try {
    const historia = JSON.parse(localStorage.getItem('ai_wyniki') || '{}');
    if (!historia[gra]) historia[gra] = [];
    historia[gra].push({ wynik, data: new Date().toLocaleDateString('pl-PL') });
    // max 10 wpisow na gre
    if (historia[gra].length > 10) historia[gra] = historia[gra].slice(-10);
    localStorage.setItem('ai_wyniki', JSON.stringify(historia));
  } catch(e) {
    // localStorage moze nie dzialac, nic sie nie stanie
  }
}

function pobierzWyniki(gra) {
  try {
    const historia = JSON.parse(localStorage.getItem('ai_wyniki') || '{}');
    return historia[gra] || [];
  } catch(e) {
    return [];
  }
}

function najlepszyWynik(gra) {
  const wyniki = pobierzWyniki(gra);
  if (wyniki.length === 0) return null;
  return Math.max(...wyniki.map(w => w.wynik));
}