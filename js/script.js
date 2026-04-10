const terminal = document.getElementById('terminal');
const finalMessage = document.getElementById('finalMessage');
const launchCount = document.getElementById('launchCount');
const animationStatus = document.getElementById('animationStatus');
const startAnimationBtn = document.getElementById('startAnimation');
const clearTerminalBtn = document.getElementById('clearTerminal');
const randomLine = document.getElementById('randomLine');
const newPhraseBtn = document.getElementById('newPhrase');
const wishInput = document.getElementById('wishInput');
const addWishBtn = document.getElementById('addWish');
const wishList = document.getElementById('wishList');
const heartsContainer = document.querySelector('.hearts');
const lovePhoto = document.getElementById('lovePhoto');
const randomPhotoBtn = document.getElementById('randomPhoto');

const MAX_LINES = 10;
const FRAME_DELAY = 90;
const STORAGE_KEYS = {
  count: 'love-site-launch-count',
  wishes: 'love-site-wishes',
  photo: 'love-site-current-photo'
};

const warmPhrases = [
  'Спасибо девочка моя за то, что каждый раз даешь мне свою любовь, тепло и заботу.',
  'Рядом с тобой я чувствую себя особенным.',
  'Смотреть на твою улыбку — счастье.',
  'Твои глазки - просто космос.',
  'С тобой даже самый обычный день превращается в праздник.',
  'Ты делаешь мою жизнь самой яркой.',
  'Спасибо за твою бесконечную нежность и терпение.',
  'Среди миллионов твоих копий, я выберу именно тебя.',
  'Твое тепло согревает меня даже в самый холодную день.',
  'Рядом с тобой время теряет смысл.',
  'Ты - моя первая мысль с утра.',
  'Ты — мой самый редкий алмазик, который сияет ярче всех звезд и делает мою жизнь по-настоящему драгоценной',
  'Ты самая красивая девочка в этом мире.',
  'Спасибо за твою поддержку в каждом моем начинании.'
];

const animationText = "Загрузка анимации 0%\nЗагрузка анимации 1%\nЗагрузка анимации 2%\nЗагрузка анимации 3%\nЗагрузка анимации 4%\nЗагрузка анимации 5%\nЗагрузка анимации 6%\nЗагрузка анимации 7%\nЗагрузка анимации 8%\nЗагрузка анимации 9%\nЗагрузка анимации 10%\nЗагрузка анимации 11%\nЗагрузка анимации 12%\nЗагрузка анимации 13%\nЗагрузка анимации 14%\nЗагрузка анимации 15%\nЗагрузка анимации 16%\nЗагрузка анимации 17%\nЗагрузка анимации 18%\nЗагрузка анимации 19%\nЗагрузка анимации 20%\nЗагрузка анимации 25%\nЗагрузка анимации 30%\nЗагрузка анимации 35%\nЗагрузка анимации 40%\nЗагрузка анимации 45%\nЗагрузка анимации 50%\nЗагрузка анимации 60%\nЗагрузка анимации 73%\nЗагрузка анимации 78%\nЗагрузка анимации 84%\nЗагрузка анимации 89%\nЗагрузка анимации 92%\nЗагрузка анимации 96%\nЗагрузка анимации 97%\nЗагрузка анимации 98%\nЗагрузка анимации 99%\nЗагрузка анимации 99.1%\nЗагрузка анимации 99.9%\nЗагрузка анимации 100%\ni love you\n i love you\n  i love you\n   i love you\n    i love you\n     i love you\n      i love you\n       i love you\n        i love you\n         i love you\n          i love you\n           i love you\n            i love you\n             i love you\n              i love you\n               i love you\n                i love you\n                 i love you\n                  i love you\n                   i love you\n                    i love you\n                    i love you\n                   i love you\n                  i love you\n                 i love you\n                i love you\n               i love you\n              i love you\n             i love you\n            i love you\n           i love you\n          i love you\n         i love you\n        i love you\n       i love you\n      i love you\n     i love you\n    i love you\n   i love you\n  i love you\n i love you\ni love you\ni love you\n i love you\n  i love you\n   i love you\n    i love you\n     i love you\n      i love you\n       i love you\n        i love you\n         i love you\n          i love you\n           i love you\n            i love you\n             i love you\n              i love you\n               i love you\n                i love you\n                 i love you\n                  i love you\n                   i love you\n                    i love you\n                    i love you\n                   i love you\n                  i love you\n                 i love you\n                i love you\n               i love you\n              i love you\n             i love you\n            i love you\n           i love you\n          i love you\n         i love you\n        i love you\n       i love you\n      i love you\n     i love you\n    i love you\n   i love you\n  i love you\n i love you\ni love you\ni love you\ni love you\ni love yo u\ni love yo  u\ni love yo   u\ni love yo    u\ni love y o    u\ni love y  o    u\ni love y   o    u\ni love y    o    u\ni love  y    o    u\ni love   y    o    u\ni love    y    o    u\ni love     y    o    u\ni lov e     y    o    u\ni lov  e     y    o    u\ni lov   e     y    o    u\ni lov    e     y    o    u\ni lo v    e     y    o    u\ni lo  v    e     y    o    u\ni lo   v    e     y    o    u\ni lo    v    e     y    o    u\ni l o    v    e     y    o    u\ni l  o    v    e     y    o    u\ni l   o    v    e     y    o    u\ni l    o    v    e     y    o    u\ni  l    o    v    e     y    o    u\ni   l    o    v    e     y    o    u\ni    l    o    v    e     y    o    u\ni     l    o    v    e     y    o    u\n i     l    o    v    e     y    o    u\n  i     l    o    v    e     y    o    u\n   i     l    o    v    e     y    o    u\n    i     l    o    v    e     y    o    u\n     i     l    o    v    e     y    o   u\n      i     l    o    v    e     y    o  u\n       i     l    o    v    e     y    o u\n        i     l    o    v    e     y    ou\n         i     l    o    v    e     y   ou\n          i     l    o    v    e     y  ou\n           i     l    o    v    e     y ou\n            i     l    o    v    e     you\n             i     l    o    v    e    you\n              i     l    o    v    e   you\n               i     l    o    v    e  you\n                i     l    o    v    e you\n                 i     l    o    v   e you\n                  i     l    o    v  e you\n                   i     l    o    v e you\n                    i     l    o    ve you\n                     i     l    o   ve you\n                      i     l    o  ve you\n                       i     l    o ve you\n                        i     l    ove you\n                         i     l   ove you\n                          i     l  ove you\n                           i     l ove you\n                            i     love you\n                             i    love you\n                              i   love you\n                               i  love you\n                                i love you\n                                i love you\n                                i love you\n                                i love you\n                                i love you\n                                i love you\n                                i love you\n                                i love you\n                                i love you\n                                i love you\n                                i love you\n                                i love you\n                                i love you\n                                i love you\n                                i love you\n                                i love you\n                                i love you\n                                i love you\n                                i love you\n                                i love you\n                                i love you\n                                i love you\n                                i love you\n                                i lov e you\n                               i lo v  e you\n                              i lo  v   e you\n                             i lo   v    e you\n                            i lo    v     e you\n                           i lo     v      e you\n                          i lo      v       e you\n                         i lo       v        e you\n                        i lo       v          e you\n                        i lo       v           e you\n                         i lo       v           e you\n                          i lo       v           e you\n                           i lo       v           e you\n                           i lo       v           e you\n                          i lo       v           e you\n                         i lo       v           e you\n                        i lo       v           e you\n                       i lo       v           e you\n                      i lo       v           e you\n                     i lo       v           e you\n                     i lo       v           e you\n                      i lo       v           e you\n                       i lo       v           e you\n                        i lo       v          e you\n                         i lo       v           e you\n                          i lo       v           e you\n                           i lo       v           e you\n                           i lo       v           e you\n                          i lo       v           e you\n                         i lo       v           e you\n                        i lo       v           e you\n                       i lo       v           e you\n                      i lo       v           e you\n                     i lo       v           e you\n                     i lo       v           e you\n                      i lo       v           e you\n                       i lo       v           e you\n                        i lo       v          e you\n                         i lo       v           e you\n                          i lo       v           e you\n                           i lo       v           e you\n                           i lo       v           e you\n                          i lo       v           e you\n                         i lo       v           e you\n                        i lo       v           e you\n                       i lo       v           e you\n                      i lo       v           e you\n                     i lo       v           e you\n                     i lo       v           e you\n                      i lo       v          e you\n                       i lo       v         e you\n                        i lo       v        e you\n                         i lo      v       e you\n                          i lo     v      e you\n                           i lo    v     e you\n                            i lo   v    e you\n                             i lo  v   e you\n                              i lo v  e you\n                               i lov e you\n                               i love you\n                               i love you\n                               i love you\n                              i love you\n                             i love you\n                            i love you\n                           i love you\n                          i love you\n                         i love you\n                        i love you\n                       i love you\n                      i love you\n                     i love you\n                    i love you\n                   i love you\n                  i love you\n                 i love you\n                i love you\n               i love you\n              i love you\n             i love you\n            i love you\n           i love you\n          i love you\n         i love you\n        i love you\n       i love you\n      i love you\n     i love you\n    i love you\n   i love you\n  i love you\n i love you\ni love you\ni love you\n i love you\n  i love you\n   i love you\n    i love you\n   i  love you\n  i   love you\n i    love you\ni     love you\ni    l ove you\ni   l  ove you\ni  l   ove you\ni l    ove you\ni l   o ve you\ni l  o  ve you\ni l o   ve you\ni lo    ve you\ni lo   v e you\ni lo  v  e you\ni lo v   e you\ni lov    e you\ni lov   e  you\ni lov  e   you\ni lov e    you\ni love     you\ni love     you\ni love    y ou\ni love   y  ou\ni love  y   ou\ni love y    ou\ni love y   o u\ni love y  o  u\ni love y o   u\ni love yo    u\ni love yo   u\ni love yo  u\ni love yo u\ni love you\nu i love yo\nou i love y\nyou i love\ne you i lov\nve you i lo\nove you i l\nlove you i\ni love you\nu i love yo\nou i love y\nyou i love\ne you i lov\nve you i lo\nove you i l\nlove you i\ni love you\nu i love yo\nou i love y\nyou i love\ne you i lov\nve you i lo\nove you i l\nlove you i\ni love you\nu i love yo\nou i love y\nyou i love\ne you i lov\nve you i lo\nove you i l\nlove you i\ni love you\nu i love yo\nou i love y\nyou i love\ne you i lov\nve you i lo\nove you i l\nlove you i\ni love you\nu i love yo\nou i love y\nyou i love\ne you i lov\nve you i lo\nove you i l\nlove you i\ni love you\nu i love yo\nou i love y\nyou i love\ne you i lov\nve you i lo\nove you i l\nlove you i\ni love you\ni love you\n i love you\n  i love you\n   i love you\n    i love you\n     i love you\n      i love you\n       i love you\n        i love you\n         i love you\n          i love you\n           i love you\n           i love you\n           i love you\n           i love you\n           i love you\n           i love you\n           i love you\n           i love you\n           i love you\n           i love you\n           i love you\n           i love you\n           i love you\n           i love you\n          i lov  e you\n         i lov    e you\n        i lov      e you\n       i lov        e you\n      i lov          e you\n     i lov            e you\n    i lov              e you\n   i lov                e you\n  i lov                  e you\n i lov                    e you\ni lov                      e you\n i lov                    e you\n  i lov                  e you\n   i lov                e you\n    i lov              e you\n     i lov            e you\n      i lov          e you\n       i lov        e you\n        i lov      e you\n         i lov    e you\n          i lov  e you\n           i love you\n            i loe you\n             ile you\n             ie you\n             e youo\n            e youl\n           e youi l\n          e youo i l\n         e youv   i lo\n        e you      i lo\n       e you        i lov\n      e you          i lov\n     e you            i lov\n    e you              i lov\n   e you                i lov\n  e you                  i lov\n e you                    i lov\ne you                      i lov\n e you                    i lov\n  e you                  i lov\n   e you                i lov\n    e you              i lov\n     e you            i lov\n      e you          i lov\n       e you        i lov\n        e you      i lov\n         e you    i lov\n          e you  i lov\n           e youi lov\n            e yi lov\n             ei lov\n             ielov\n            i lev\n           i lo e y\n          i lov  e y\n         i lov    e yo\n        i lov      e yo\n       i lov        e you\n      i lov          e you\n     i lov            e you\n    i lov              e you\n   i lov                e you\n  i lov                  e you\n i lov                    e you\ni lov                      e you\n i lov                    e you\n  i lov                  e you\n   i lov                e you\n    i lov              e you\n     i lov            e you\n      i lov          e you\n       i lov        e you\n        i lov      e you\n         i lov    e you\n          i lov  e you\n           i love you\n            i lo you\n             i l ou\n              i lu\n               ilu\n               ilu\n               ilu\n               ilu\n               ilu\n               ilu\n               ilu\n              i l u\n             i lo  u\n            i lov you\n           i love you\n           i love you\n           i love you\n           i love you\n           i love you\n           i love you\n           i love you\n           i love you\n           i love you\n           i love you\n           i love you\n          i love you\n         i love you\n        i love you\n       i love you\n      i love you\n     i love you\n    i love you\n   i love you\n  i love you\n i love you\ni love you\ni love you\ni love you\ni love you\ni love you\ni love you\ni  love  you\ni   love   you\ni    love    you\ni   love   you\ni  love  you\ni love you\ni love you\ni love you\ni love you\ni love you\ni  love  you\ni   love   you\ni    love    you\ni   love   you\ni  love  you\ni love you\ni love you\ni love you\ni love you\ni love you\ni  love  you\ni   love   you\ni    love    you\ni   love   you\ni  love  you\ni love you\ni love you\ni love you\ni love you\ni love you\ni  love  you\ni   love   you\ni    love    you\ni   love   you\ni  love  you\ni love you\ni love you\ni love you\ni love you\ni love you\ni  love  you\ni   love   you\ni    love    you\ni   love   you\ni  love  you\ni love you\ni love you\ni love you\ni love you\ni love you\ni  love  you\ni   love   you\ni    love    you\ni   love   you\ni  love  you\ni love you\ni love you\ni love you\ni love you\ni love you\ni love you\ni love yo\ni love y\ni love\ni lov\ni lo\ni l\ni\ni l\ni lo\ni lov\ni love\ni love y\ni love yo\ni love you\ni love yo\ni love y\ni love\ni lov\ni lo\ni l\ni\ni l\ni lo\ni lov\ni love\ni love y\ni love yo\ni love you\ni love yo\ni love y\ni love\ni lov\ni lo\ni l\ni\ni l\ni lo\ni lov\ni love\ni love y\ni love yo\ni love you\ni love yo\ni love y\ni love\ni lov\ni lo\ni l\ni\ni l\ni lo\ni lov\ni love\ni love y\ni love yo\ni love you\ni love yo\ni love y\ni love\ni lov\ni lo\ni l\ni\ni\ni\ni\ni love    you        i love you\ni love   you            ilvu\ni love  you             ilvu\ni love you              ilvu\ni lov yo                ilvu\ni lov you               ilvu\ni love you              ilvu\ni love  you             ilvu\ni love   you            ilvu\ni love    you        i love you";
const animationLines = animationText
  .split(/\r?\n/)
  .map(line => line.replace(/\r/g, ''))
  .filter(line => line.trim().length > 0);

const photoList = ["img/photo_10_2026-04-10_20-10-18.jpg", "img/photo_11_2026-04-10_20-10-18.jpg", "img/photo_12_2026-04-10_20-10-18.jpg", "img/photo_13_2026-04-10_20-10-18.jpg", "img/photo_14_2026-04-10_20-10-18.jpg", "img/photo_15_2026-04-10_20-10-18.jpg", "img/photo_16_2026-04-10_20-10-18.jpg", "img/photo_17_2026-04-10_20-10-18.jpg", "img/photo_18_2026-04-10_20-10-18.jpg", "img/photo_19_2026-04-10_20-10-18.jpg", "img/photo_1_2026-04-10_20-10-18.jpg", "img/photo_20_2026-04-10_20-10-18.jpg", "img/photo_21_2026-04-10_20-10-18.jpg", "img/photo_22_2026-04-10_20-10-18.jpg", "img/photo_23_2026-04-10_20-10-18.jpg", "img/photo_24_2026-04-10_20-10-18.jpg", "img/photo_25_2026-04-10_20-10-18.jpg", "img/photo_26_2026-04-10_20-10-18.jpg", "img/photo_27_2026-04-10_20-10-18.jpg", "img/photo_28_2026-04-10_20-10-18.jpg", "img/photo_29_2026-04-10_20-10-18.jpg", "img/photo_2_2026-04-10_20-10-18.jpg", "img/photo_30_2026-04-10_20-10-18.jpg", "img/photo_31_2026-04-10_20-10-18.jpg", "img/photo_32_2026-04-10_20-10-18.jpg", "img/photo_3_2026-04-10_20-10-18.jpg", "img/photo_4_2026-04-10_20-10-18.jpg", "img/photo_5_2026-04-10_20-10-18.jpg", "img/photo_6_2026-04-10_20-10-18.jpg", "img/photo_7_2026-04-10_20-10-18.jpg", "img/photo_8_2026-04-10_20-10-18.jpg", "img/photo_9_2026-04-10_20-10-18.jpg"];

let isAnimating = false;
let animationRunId = 0;
let launchCounter = Number(safeStorageGet(STORAGE_KEYS.count, '0')) || 0;

if (launchCount) {
  launchCount.textContent = String(launchCounter);
}

function safeStorageGet(key, fallback = '') {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // ignore storage errors
  }
}

function setStatus(text) {
  if (animationStatus) {
    animationStatus.textContent = text;
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function resetTerminal(message = 'Экран очищен. Можно запускать анимацию снова.') {
  if (!terminal) return;
  terminal.innerHTML = `<div class="terminal__placeholder">${message}</div>`;
}

function clearTerminal() {
  animationRunId += 1;
  isAnimating = false;

  if (startAnimationBtn) {
    startAnimationBtn.disabled = false;
  }

  resetTerminal('Экран очищен. Можно запускать анимацию снова.');

  if (finalMessage) {
    finalMessage.textContent = '';
  }

  setStatus('Анимация остановлена');
}

function appendLine(text) {
  if (!terminal) return;

  const lines = Array.from(terminal.querySelectorAll('.terminal__line')).map(node => node.textContent);
  lines.push(text);
  const buffer = lines.slice(-MAX_LINES);

  terminal.innerHTML = '';
  buffer.forEach(line => {
    const div = document.createElement('div');
    div.className = 'terminal__line';
    div.textContent = line;
    terminal.appendChild(div);
  });

  terminal.scrollTop = terminal.scrollHeight;
}

async function startAnimation() {
  if (isAnimating || !terminal) {
    return;
  }

  isAnimating = true;
  const currentRunId = ++animationRunId;

  if (startAnimationBtn) {
    startAnimationBtn.disabled = true;
  }

  terminal.innerHTML = '';
  if (finalMessage) {
    finalMessage.textContent = '';
  }
  setStatus('Анимация запущена');

  launchCounter += 1;
  safeStorageSet(STORAGE_KEYS.count, String(launchCounter));
  if (launchCount) {
    launchCount.textContent = String(launchCounter);
  }

  for (const line of animationLines) {
    if (currentRunId !== animationRunId) {
      return;
    }

    appendLine(line);
    await sleep(FRAME_DELAY);
  }

  if (currentRunId !== animationRunId) {
    return;
  }

  if (finalMessage) {
    finalMessage.textContent = '❤️ Анимация завершена. Моя любовь бесконечна к тебе, принцесса! ❤️';
  }
  setStatus('Анимация завершена');

  if (startAnimationBtn) {
    startAnimationBtn.disabled = false;
  }
  isAnimating = false;
}

function showRandomPhrase() {
  if (!randomLine) return;
  const phrase = warmPhrases[Math.floor(Math.random() * warmPhrases.length)];
  randomLine.textContent = phrase;
}

function getWishes() {
  try {
    const raw = safeStorageGet(STORAGE_KEYS.wishes);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function setWishes(wishes) {
  safeStorageSet(STORAGE_KEYS.wishes, JSON.stringify(wishes));
}

function renderWishes() {
  if (!wishList) return;

  const wishes = getWishes();
  wishList.innerHTML = '';

  if (!wishes.length) {
    const empty = document.createElement('p');
    empty.className = 'soft-text';
    empty.textContent = 'Пока здесь пусто. Добавь первое тёплое пожелание.';
    wishList.appendChild(empty);
    return;
  }

  wishes.forEach((wish, index) => {
    const item = document.createElement('div');
    item.className = 'wish-item';

    const text = document.createElement('div');
    text.className = 'wish-item__text';
    text.textContent = wish;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'icon-btn';
    removeBtn.type = 'button';
    removeBtn.title = 'Удалить';
    removeBtn.textContent = '✕';
    removeBtn.addEventListener('click', () => {
      const updated = getWishes().filter((_, i) => i !== index);
      setWishes(updated);
      renderWishes();
    });

    item.append(text, removeBtn);
    wishList.appendChild(item);
  });
}

function addWish() {
  if (!wishInput) return;

  const value = wishInput.value.trim();
  if (!value) {
    wishInput.focus();
    return;
  }

  const wishes = getWishes();
  wishes.unshift(value);
  setWishes(wishes.slice(0, 20));
  wishInput.value = '';
  renderWishes();
}

function spawnHeart() {
  if (!heartsContainer) {
    return;
  }

  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = Math.random() > 0.5 ? '❤' : '♡';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${16 + Math.random() * 22}px`;
  heart.style.animationDuration = `${6 + Math.random() * 6}s`;
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 13000);
}

function setPhoto(src) {
  if (!lovePhoto || !src) return;
  lovePhoto.src = src;
  safeStorageSet(STORAGE_KEYS.photo, src);
}

function showRandomPhoto() {
  if (!lovePhoto || !photoList.length) return;

  const current = lovePhoto.getAttribute('src');
  let nextPhoto = current;

  if (photoList.length === 1) {
    nextPhoto = photoList[0];
  } else {
    while (nextPhoto === current) {
      nextPhoto = photoList[Math.floor(Math.random() * photoList.length)];
    }
  }

  setPhoto(nextPhoto);
}

function initPhoto() {
  if (!lovePhoto || !photoList.length) return;

  const saved = safeStorageGet(STORAGE_KEYS.photo, '');
  const initial = photoList.includes(saved) ? saved : photoList[0];
  setPhoto(initial);
}

if (startAnimationBtn) startAnimationBtn.addEventListener('click', startAnimation);
if (clearTerminalBtn) clearTerminalBtn.addEventListener('click', clearTerminal);
if (newPhraseBtn) newPhraseBtn.addEventListener('click', showRandomPhrase);
if (addWishBtn) addWishBtn.addEventListener('click', addWish);
if (randomPhotoBtn) randomPhotoBtn.addEventListener('click', showRandomPhoto);

if (wishInput) {
  wishInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      addWish();
    }
  });
}

resetTerminal('Нажми «Запустить анимацию», чтобы увидеть мою любовь.');
renderWishes();
showRandomPhrase();
initPhoto();
setInterval(spawnHeart, 900);
