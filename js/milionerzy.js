// milionerzy.js — logika gry Milionerzy AI
// bez koła "telefon do przyjaciela"

const NAGRODY = [
  { kwota: "1 000 zł",       num: 1000,    milestone: false },
  { kwota: "2 000 zł",       num: 2000,    milestone: false },
  { kwota: "3 000 zł",       num: 3000,    milestone: false },
  { kwota: "5 000 zł",       num: 5000,    milestone: false },
  { kwota: "10 000 zł",      num: 10000,   milestone: true  },
  { kwota: "20 000 zł",      num: 20000,   milestone: false },
  { kwota: "40 000 zł",      num: 40000,   milestone: false },
  { kwota: "75 000 zł",      num: 75000,   milestone: false },
  { kwota: "125 000 zł",     num: 125000,  milestone: false },
  { kwota: "250 000 zł",     num: 250000,  milestone: true  },
  { kwota: "500 000 zł",     num: 500000,  milestone: false },
  { kwota: "1 000 000 zł",   num: 1000000, milestone: true  }
];

function kwotaGwarantowana(poziom) {
  if (poziom >= 10) return "250 000 zł";
  if (poziom >= 5)  return "10 000 zł";
  return "0 zł";
}

// --- STAN GRY ---
let stan = {};

function inicjuj() {
  stan = {
    poziom: 0,
    faza: 'idle',        // idle | wybieranie | potwierdzanie | ujawnianie | koniec
    wybranaOdp: null,
    kola: { half: false, audience: false },
    usuniete: [],
  };
}

// --- DRABINA NAGROD ---
function budujDrabine() {
  const lista = document.getElementById('prizeList');
  lista.innerHTML = '';
  for (let i = 11; i >= 0; i--) {
    const li = document.createElement('li');
    li.id = `prize-${i}`;
    li.className = 'prize-item' +
      (NAGRODY[i].milestone ? ' milestone' : '') +
      (i === stan.poziom ? ' current' : '') +
      (i < stan.poziom ? ' won' : '');
    li.innerHTML = `
      <span class="p-ind">${i+1}</span>
      <span class="p-dot"></span>
      <span>${NAGRODY[i].kwota}</span>
    `;
    lista.appendChild(li);
  }
}

function odswiezDrabine() {
  for (let i = 0; i < 12; i++) {
    const el = document.getElementById(`prize-${i}`);
    if (!el) continue;
    el.className = 'prize-item' +
      (NAGRODY[i].milestone ? ' milestone' : '') +
      (i === stan.poziom ? ' current' : '') +
      (i < stan.poziom ? ' won' : '');
  }
}

// --- LADOWANIE PYTANIA ---
function ladujPytanie() {
  if (stan.poziom >= MILIONERZY_PYTANIA.length) return;

  const q = MILIONERZY_PYTANIA[stan.poziom];
  stan.wybranaOdp = null;
  stan.usuniete = [];
  stan.faza = 'wybieranie';

  document.getElementById('qNum').textContent =
    `Pytanie ${stan.poziom + 1} z 12 — ${NAGRODY[stan.poziom].kwota}`;
  document.getElementById('qText').textContent = q.pytanie;
  document.getElementById('gwarancja').textContent = kwotaGwarantowana(stan.poziom);

  odswiezDrabine();
  budujOdpowiedzi(q);
  document.getElementById('progressFill').style.width = `${(stan.poziom / 12) * 100}%`;
}

function budujOdpowiedzi(q, usuniete = []) {
  const grid = document.getElementById('answersGrid');
  grid.innerHTML = '';
  ['A','B','C','D'].forEach(lit => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.id = `btn-${lit}`;
    if (usuniete.includes(lit)) {
      btn.classList.add('ans-eliminated');
      btn.disabled = true;
    }
    btn.onclick = () => wybierzOdp(lit);
    btn.innerHTML = `
      <span class="a-letter">${lit}</span>
      <span>${q.odpowiedzi[lit]}</span>
    `;
    grid.appendChild(btn);
  });
}

// --- WYBOR ODPOWIEDZI ---
function wybierzOdp(lit) {
  if (stan.faza !== 'wybieranie') return;
  if (stan.usuniete.includes(lit)) return;

  document.querySelectorAll('.answer-btn').forEach(b => {
    b.classList.remove('ans-selected');
  });

  stan.wybranaOdp = lit;
  stan.faza = 'potwierdzanie';
  document.getElementById(`btn-${lit}`).classList.add('ans-selected');

  // po chwili ujawniamy
  setTimeout(ujawnijOdpowiedz, 1600);
}

function ujawnijOdpowiedz() {
  if (stan.faza !== 'potwierdzanie') return;

  const lit = stan.wybranaOdp;
  const q = MILIONERZY_PYTANIA[stan.poziom];
  const poprawna = q.poprawna;

  stan.faza = 'ujawnianie';
  document.querySelectorAll('.answer-btn').forEach(b => b.disabled = true);

  // podswietlenie zoltym przed ujawnieniem
  const btn = document.getElementById(`btn-${lit}`);
  btn.classList.remove('ans-selected');
  btn.classList.add('ans-reveal');

  setTimeout(() => {
    if (lit === poprawna) {
      btn.classList.remove('ans-reveal');
      btn.classList.add('ans-correct');
      dzwiek('poprawna');

      if (stan.poziom === 11) {
        // wygrana!
        setTimeout(() => zakonczGre('wygrana'), 1500);
      } else {
        stan.poziom++;
        setTimeout(ladujPytanie, 1800);
      }
    } else {
      btn.classList.remove('ans-reveal');
      btn.classList.add('ans-wrong');
      document.getElementById(`btn-${poprawna}`).classList.add('ans-correct');
      dzwiek('zla');
      setTimeout(() => zakonczGre('przegrana', lit, poprawna), 2000);
    }
  }, 1600);
}

// --- KOLA RATUNKOWE ---
function uzyj5050() {
  if (stan.kola.half || stan.faza !== 'wybieranie') return;
  stan.kola.half = true;
  const btn50 = document.getElementById('kolo-half');
  btn50.disabled = true;
  btn50.classList.add('used');

  const q = MILIONERZY_PYTANIA[stan.poziom];
  const poprawna = q.poprawna;
  const inne = ['A','B','C','D'].filter(l => l !== poprawna);
  const doUsuniecia = tasujTablice(inne).slice(0, 2);

  stan.usuniete = doUsuniecia;
  doUsuniecia.forEach(l => {
    const b = document.getElementById(`btn-${l}`);
    b.disabled = true;
    b.classList.add('ans-eliminated');
  });

  pokazToast('50:50 — dwie błędne odpowiedzi usunięte!', 'info');
  dzwiek('klik');
}

function uzyjPublicznosc() {
  if (stan.kola.audience || stan.faza !== 'wybieranie') return;
  stan.kola.audience = true;
  const btnA = document.getElementById('kolo-audience');
  btnA.disabled = true;
  btnA.classList.add('used');

  const q = MILIONERZY_PYTANIA[stan.poziom];
  const glosy = generujGlosy(q.poprawna, stan.poziom, stan.usuniete);
  pokazWykresPublicznosci(glosy);
  dzwiek('klik');
}

function generujGlosy(poprawna, poziom, usuniete) {
  const trudnosc = poziom / 11;
  const litery = ['A','B','C','D'].filter(l => !usuniete.includes(l));

  let poprawnaWartosc;
  if (trudnosc < 0.4)      poprawnaWartosc = 62 + Math.floor(Math.random() * 22);
  else if (trudnosc < 0.75) poprawnaWartosc = 40 + Math.floor(Math.random() * 22);
  else                      poprawnaWartosc = 26 + Math.floor(Math.random() * 24);

  const wynik = {};
  wynik[poprawna] = poprawnaWartosc;
  let zostalo = 100 - poprawnaWartosc;

  const inne = litery.filter(l => l !== poprawna);
  inne.forEach((l, i) => {
    if (i === inne.length - 1) {
      wynik[l] = zostalo;
    } else {
      const v = Math.floor(Math.random() * zostalo * 0.65);
      wynik[l] = v;
      zostalo -= v;
    }
  });

  usuniete.forEach(l => { wynik[l] = 0; });
  ['A','B','C','D'].forEach(l => { if (wynik[l] === undefined) wynik[l] = 0; });
  return wynik;
}

function pokazWykresPublicznosci(glosy) {
  const max = Math.max(...Object.values(glosy));
  const bars = document.getElementById('audienceBars');
  bars.innerHTML = '';

  ['A','B','C','D'].forEach(l => {
    const pct = glosy[l];
    const h = max > 0 ? Math.round((pct / max) * 75) : 0;
    const col = document.createElement('div');
    col.className = 'bar-col';
    col.innerHTML = `
      <div class="bar-pct">${pct}%</div>
      <div class="bar-fill" style="height:${h}px"></div>
      <div class="bar-lbl">${l}</div>
    `;
    bars.appendChild(col);
  });

  document.getElementById('audienceModal').classList.add('open');
}

// --- ODEJSCIE Z GRY ---
function potwierdzOdejscie() {
  const gwarancja = kwotaGwarantowana(stan.poziom);
  document.getElementById('walkMsg').textContent =
    `Czy na pewno chcesz odejść? Zabierasz gwarantowane: ${gwarancja}.`;
  document.getElementById('walkModal').classList.add('open');
}

function odejdz() {
  zamknijModal('walkModal');
  const gwarancja = kwotaGwarantowana(stan.poziom);
  zakonczGre('odejscie', null, null, gwarancja);
}

// --- KONIEC GRY ---
function zakonczGre(typ, wybrana, poprawna, kwotaOdejscia) {
  stan.faza = 'koniec';

  let ikonka, tytul, podtytul, kwotaStr;

  if (typ === 'wygrana') {
    ikonka   = '🏆';
    tytul    = 'MILIONER!';
    podtytul = 'Niesamowite! Odpowiedziałeś poprawnie na wszystkie 12 pytań!';
    kwotaStr = '1 000 000 zł';
    dzwiek('wygrana');
    zapiszWynik('milionerzy', 1000000);
  } else if (typ === 'przegrana') {
    const q = MILIONERZY_PYTANIA[stan.poziom];
    const gwarancja = kwotaGwarantowana(stan.poziom);
    ikonka   = '💔';
    tytul    = 'Niestety...';
    podtytul = `Wybrałeś ${wybrana}: "${q.odpowiedzi[wybrana]}". Poprawna to ${poprawna}: "${q.odpowiedzi[poprawna]}".`;
    kwotaStr = gwarancja;
    zapiszWynik('milionerzy', parseInt(kwotaGwarantowana(stan.poziom)) || 0);
  } else {
    ikonka   = '👋';
    tytul    = 'Do zobaczenia!';
    podtytul = 'Bezpieczna decyzja. Wróć kiedy chcesz spróbować dalej!';
    kwotaStr = kwotaOdejscia;
  }

  document.getElementById('endIcon').textContent  = ikonka;
  document.getElementById('endTitle').textContent  = tytul;
  document.getElementById('endMsg').textContent    = podtytul;
  document.getElementById('endKwota').textContent  = kwotaStr;

  pokazEkran('screenEnd');
}

// --- EKRANY ---
function pokazEkran(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function startujGre() {
  inicjuj();
  budujDrabine();

  // reset kol
  ['kolo-half','kolo-audience'].forEach(id => {
    const b = document.getElementById(id);
    b.disabled = false;
    b.classList.remove('used');
  });

  pokazEkran('screenGame');
  ladujPytanie();
}

// --- ZAMKNIJ MODAL ---
function zamknijModal(id) {
  document.getElementById(id).classList.remove('open');
}

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
  pokazEkran('screenStart');
});