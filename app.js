// ============================================================
// RHAPSODY OF REALITIES — APP ENGINE
// ============================================================

// ============================================================
// TELEGRAM INIT
// ============================================================
const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready();
  tg.expand();
  tg.setHeaderColor('#0D0B07');
  tg.setBackgroundColor('#0D0B07');
}
const TG_USER = tg?.initDataUnsafe?.user || { id: 0, first_name: 'Reader', username: 'user' };

// ============================================================
// SCRIPTURE MEMORY POOL
// ============================================================
const SCRIPTURE_POOL = [
  { verse: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.", ref: "John 3:16", blank: 3, word: "loved" },
  { verse: "I can do all things through Christ which strengtheneth me.", ref: "Philippians 4:13", blank: 1, word: "all" },
  { verse: "And we know that all things work together for good to them that love God.", ref: "Romans 8:28", blank: 3, word: "work" },
  { verse: "Trust in the Lord with all thine heart and lean not unto thine own understanding.", ref: "Proverbs 3:5", blank: 1, word: "Lord" },
  { verse: "The Lord is my shepherd I shall not want.", ref: "Psalm 23:1", blank: 4, word: "shall" },
  { verse: "For the wages of sin is death but the gift of God is eternal life through Jesus Christ our Lord.", ref: "Romans 6:23", blank: 4, word: "gift" },
  { verse: "No weapon that is formed against thee shall prosper.", ref: "Isaiah 54:17", blank: 2, word: "formed" },
  { verse: "But my God shall supply all your need according to his riches in glory by Christ Jesus.", ref: "Philippians 4:19", blank: 3, word: "supply" },
  { verse: "Being born again not of corruptible seed but of incorruptible by the word of God which liveth and abideth for ever.", ref: "1 Peter 1:23", blank: 2, word: "corruptible" },
  { verse: "For the law of the Spirit of life in Christ Jesus hath made me free from the law of sin and death.", ref: "Romans 8:2", blank: 5, word: "life" },
];

// ============================================================
// RAPID FIRE POOL
// ============================================================
const RAPID_POOL = [
  { q: "Who wrote the book of Romans?", options: ["Peter", "Paul", "John", "Luke"], answer: 1 },
  { q: "How many books are in the New Testament?", options: ["24", "27", "39", "66"], answer: 1 },
  { q: "Jesus was baptized in which river?", options: ["Nile", "Euphrates", "Jordan", "Tigris"], answer: 2 },
  { q: "Who was the first king of Israel?", options: ["David", "Solomon", "Saul", "Samuel"], answer: 2 },
  { q: "On which day did God create light?", options: ["Day 1", "Day 2", "Day 3", "Day 4"], answer: 0 },
  { q: "How many disciples did Jesus have?", options: ["10", "11", "12", "13"], answer: 2 },
  { q: "What is the shortest verse in the Bible?", options: ["God is love", "Jesus wept", "Pray without ceasing", "Fear not"], answer: 1 },
  { q: "The book of Psalms has how many chapters?", options: ["100", "120", "150", "180"], answer: 2 },
  { q: "Who built the ark?", options: ["Moses", "Abraham", "Noah", "Elijah"], answer: 2 },
  { q: "In what city was Jesus born?", options: ["Jerusalem", "Nazareth", "Bethlehem", "Jericho"], answer: 2 },
  { q: "How many days was Lazarus in the tomb?", options: ["1", "2", "3", "4"], answer: 3 },
  { q: "Who was the mother of Jesus?", options: ["Martha", "Mary", "Elizabeth", "Anna"], answer: 1 },
  { q: "Which disciple betrayed Jesus?", options: ["Peter", "Thomas", "Judas", "John"], answer: 2 },
  { q: "What did Jesus turn water into?", options: ["Oil", "Milk", "Wine", "Blood"], answer: 2 },
  { q: "Who is described as a man after God's own heart?", options: ["Abraham", "Moses", "David", "Paul"], answer: 2 },
  { q: "How many days did Jesus fast in the wilderness?", options: ["7", "21", "30", "40"], answer: 3 },
  { q: "Who was swallowed by a great fish?", options: ["Elijah", "Jonah", "Isaiah", "Ezekiel"], answer: 1 },
  { q: "What was the name of Abraham's son of promise?", options: ["Ishmael", "Isaac", "Jacob", "Joseph"], answer: 1 },
  { q: "The Holy Spirit descended on Jesus at His baptism like a:", options: ["Eagle", "Dove", "Wind", "Fire"], answer: 1 },
  { q: "Who wrote the book of Revelation?", options: ["Paul", "Peter", "James", "John"], answer: 3 },
];

// ============================================================
// STATE
// ============================================================
const state = {
  activeTab: 'home',
  fontSizeClass: 'font-md',
  lightMode: false,
  readDays: JSON.parse(localStorage.getItem('rr_read') || '[]'),
  streak: parseInt(localStorage.getItem('rr_streak') || '0'),
  lastReadDate: localStorage.getItem('rr_lastread') || '',
  totalScore: parseInt(localStorage.getItem('rr_score') || '0'),
  quizzesDone: parseInt(localStorage.getItem('rr_qcount') || '0'),
  notifOn: localStorage.getItem('rr_notif') === 'true',
  activeChallenges: JSON.parse(localStorage.getItem('rr_chals') || '[]'),
  leaderboard: JSON.parse(localStorage.getItem('rr_lb') || JSON.stringify([
    { name: "Pastor K", score: 2450, initials: "PK" },
    { name: "Adaeze O", score: 1980, initials: "AO" },
    { name: "Emmanuel T", score: 1740, initials: "ET" },
    { name: "Blessing N", score: 1520, initials: "BN" },
    { name: "You", score: 0, initials: "ME", isMe: true },
  ])),
  quiz: {
    active: false, mode: null, questions: [], current: 0,
    score: 0, correct: 0, startTime: 0, answered: false,
    timer: null, timeLeft: 30,
  },
  archiveMonths: {}
};

// ============================================================
// INIT
// ============================================================
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const splash = document.getElementById('splash');
    splash.style.transition = 'opacity 0.5s';
    splash.style.opacity = '0';
    setTimeout(() => {
      splash.classList.add('hidden');
      document.getElementById('app').classList.remove('hidden');
      init();
    }, 500);
  }, 1800);
});

function init() {
  loadToday();
  buildArchive();
  updateQuizStats();
  buildLeaderboard();
  buildProfile();
  buildAchievements();
  updateActiveChallenges();
  document.body.classList.add(state.fontSizeClass);
  if (state.notifOn) document.getElementById('notif-toggle')?.classList.add('on');
}

// ============================================================
// TABS
// ============================================================
function switchTab(name) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name)?.classList.add('active');
  document.querySelector('[data-tab="' + name + '"]')?.classList.add('active');
  state.activeTab = name;
}

// ============================================================
// TODAY
// ============================================================
function getTodayKey() {
  return new Date().toISOString().split('T')[0];
}

function getContentForDate(key) {
  if (CONTENT[key]) return CONTENT[key];
  const keys = Object.keys(CONTENT).sort();
  return keys.length > 0 ? CONTENT[keys[keys.length - 1]] : null;
}

function loadToday() {
  const now = new Date();
  document.getElementById('today-day').textContent = now.getDate();
  document.getElementById('today-month').textContent =
    now.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();

  const key = getTodayKey();
  const entry = getContentForDate(key);

  if (!entry) {
    document.getElementById('devotional-title').textContent = 'Content Coming Soon';
    document.getElementById('devotional-body').innerHTML =
      '<p style="color:var(--text-dim);padding:16px 0">Today\'s devotional will appear here once content is loaded.</p>';
    return;
  }

  document.getElementById('devotional-title').textContent = entry.title;
  document.getElementById('confession-text').textContent = entry.confession;
  document.getElementById('scripture-text').textContent = '\u201C' + entry.scripture.text + '\u201D';
  document.getElementById('scripture-ref').textContent = '\u2014 ' + entry.scripture.ref;
  document.getElementById('devotional-body').innerHTML =
    entry.body.map(p => '<p>' + p + '</p>').join('');
  document.getElementById('rhema-text').textContent = entry.rhema;
  document.getElementById('further-text').textContent = entry.furtherStudy;
  document.getElementById('bible-plan').textContent =
    'OT: ' + entry.biblePlan.ot + '\nNT: ' + entry.biblePlan.nt;

  if (state.readDays.includes(key)) markReadUI();
}

function markReadUI() {
  const btn = document.getElementById('mark-read-btn');
  if (btn) { btn.textContent = '\u2713 Read'; btn.style.color = 'var(--gold)'; }
}

function markRead() {
  const key = getTodayKey();
  if (!state.readDays.includes(key)) {
    state.readDays.push(key);
    localStorage.setItem('rr_read', JSON.stringify(state.readDays));
    updateStreak();
    buildAchievements();
    buildProfile();
    showToast('\u2713 Marked as read!');
  }
  markReadUI();
}

function updateStreak() {
  const today = getTodayKey();
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  if (state.lastReadDate === yesterday || state.lastReadDate === '') {
    state.streak += 1;
  } else if (state.lastReadDate !== today) {
    state.streak = 1;
  }
  state.lastReadDate = today;
  localStorage.setItem('rr_streak', state.streak);
  localStorage.setItem('rr_lastread', today);
  document.getElementById('streak-count').textContent = state.streak;
}

function checkReading(num) {
  const btns = document.querySelectorAll('.reading-check-btn');
  const btn = btns[num - 1];
  if (!btn) return;
  btn.classList.toggle('done');
  const labels = ['OT Reading', 'NT Reading'];
  btn.textContent = btn.classList.contains('done')
    ? labels[num - 1] + ' \u2713'
    : labels[num - 1] + ' \u25CB';
}

function setFontSize(size) {
  document.body.classList.remove('font-sm', 'font-md', 'font-lg');
  document.body.classList.add('font-' + size);
  state.fontSizeClass = 'font-' + size;
  document.querySelectorAll('.ctrl-btn[data-size]').forEach(b => {
    b.classList.toggle('active', b.dataset.size === size);
  });
}

function toggleTheme() {
  state.lightMode = !state.lightMode;
  document.body.classList.toggle('light-mode', state.lightMode);
  document.getElementById('theme-toggle').textContent = state.lightMode ? '\u2600' : '\uD83C\uDF19';
  if (tg) {
    tg.setHeaderColor(state.lightMode ? '#FDFAF0' : '#0D0B07');
    tg.setBackgroundColor(state.lightMode ? '#FDFAF0' : '#0D0B07');
  }
}

function shareDevotional() {
  const key = getTodayKey();
  const entry = getContentForDate(key);
  const text = entry
    ? '\uD83D\uDCD6 *' + entry.title + '*\n\n\u201C' + entry.scripture.text + '\u201D\n\u2014 ' + entry.scripture.ref + '\n\n\u2726 ' + entry.rhema + '\n\nRead more in Rhapsody of Realities'
    : 'Read today\'s Rhapsody of Realities!';
  if (tg?.switchInlineQuery) {
    tg.switchInlineQuery(text, ['users']);
  } else if (navigator.share) {
    navigator.share({ title: 'Rhapsody of Realities', text });
  } else {
    showToast('Copied!');
  }
}

// ============================================================
// ARCHIVE
// ============================================================
function buildArchive() {
  const months = {};
  Object.keys(CONTENT).sort().forEach(key => {
    const d = new Date(key + 'T00:00:00');
    const mKey = key.substring(0, 7);
    const mLabel = d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    if (!months[mKey]) months[mKey] = { label: mLabel, days: [] };
    months[mKey].days.push(key);
  });
  state.archiveMonths = months;

  const tabsEl = document.getElementById('month-tabs');
  const mKeys = Object.keys(months);
  if (!mKeys.length) {
    document.getElementById('archive-grid').innerHTML =
      '<p style="color:var(--text-faint);text-align:center;padding:24px;grid-column:1/-1">No archive entries yet.</p>';
    return;
  }

  tabsEl.innerHTML = mKeys.map((k, i) =>
    '<button class="month-tab' + (i === mKeys.length - 1 ? ' active' : '') + '" data-mkey="' + k + '" onclick="renderArchiveMonth(\'' + k + '\')">' + months[k].label + '</button>'
  ).join('');

  renderArchiveMonth(mKeys[mKeys.length - 1]);
}

function renderArchiveMonth(mKey) {
  const months = state.archiveMonths;
  document.querySelectorAll('.month-tab').forEach(t =>
    t.classList.toggle('active', t.dataset.mkey === mKey));
  const grid = document.getElementById('archive-grid');
  grid.innerHTML = '';
  (months[mKey]?.days || []).forEach(dayKey => {
    const entry = CONTENT[dayKey];
    if (!entry) return;
    const d = new Date(dayKey + 'T00:00:00');
    const isRead = state.readDays.includes(dayKey);
    const card = document.createElement('div');
    card.className = 'archive-card' + (isRead ? ' read' : '');
    card.innerHTML =
      '<p class="archive-day">' + d.toLocaleDateString('en-US', { weekday: 'short' }) + ' ' + d.getDate() + '</p>' +
      '<p class="archive-title">' + entry.title + '</p>';
    card.onclick = () => openArchiveEntry(dayKey);
    grid.appendChild(card);
  });
}

function openArchiveEntry(dayKey) {
  const entry = CONTENT[dayKey];
  if (!entry) return;
  const d = new Date(dayKey + 'T00:00:00');
  showModal(
    '<p style="font-size:0.7rem;color:var(--text-dim);text-transform:uppercase;letter-spacing:0.2em;margin-bottom:6px">' +
    d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) + '</p>' +
    '<p class="modal-title">' + entry.title + '</p>' +
    '<div class="scripture-block" style="margin:12px 0">' +
    '<p class="scripture-text">\u201C' + entry.scripture.text + '\u201D</p>' +
    '<p class="scripture-ref">\u2014 ' + entry.scripture.ref + '</p>' +
    '</div>' +
    '<div style="max-height:38vh;overflow-y:auto;color:var(--text);font-size:0.9rem;line-height:1.75;padding-right:4px">' +
    entry.body.map(p => '<p style="margin-bottom:12px">' + p + '</p>').join('') +
    '</div>' +
    '<div style="margin-top:12px;padding:12px;background:var(--surface);border-radius:10px;border-left:3px solid var(--gold)">' +
    '<p style="font-size:0.65rem;color:var(--gold);text-transform:uppercase;letter-spacing:0.2em;margin-bottom:4px">\u2726 Rhema</p>' +
    '<p style="font-family:var(--font-serif);font-style:italic;color:var(--gold-light)">' + entry.rhema + '</p>' +
    '</div>' +
    '<div class="modal-actions" style="margin-top:16px">' +
    '<button class="action-btn primary" onclick="closeModal();switchTab(\'quiz\');startQuiz(\'daily\',\'' + dayKey + '\')">Take Quiz \u26A1</button>' +
    '<button class="action-btn secondary" onclick="closeModal()">Close</button>' +
    '</div>'
  );
}

// ============================================================
// QUIZ ENGINE
// ============================================================
function startQuiz(mode, dateKey) {
  let questions = [];

  if (mode === 'daily') {
    const key = dateKey || getTodayKey();
    const entry = getContentForDate(key);
    if (!entry?.quiz?.length) { showToast('No quiz for this entry yet'); return; }
    questions = entry.quiz.map(q => Object.assign({}, q, { type: 'mcq' }));
  } else if (mode === 'weekly') {
    const allKeys = Object.keys(CONTENT).sort().slice(-7);
    allKeys.forEach(k => {
      if (CONTENT[k]?.quiz) {
        CONTENT[k].quiz.forEach(q => questions.push(Object.assign({}, q, { type: 'mcq' })));
      }
    });
    questions = shuffle(questions).slice(0, 15);
  } else if (mode === 'scripture') {
    questions = shuffle(SCRIPTURE_POOL).slice(0, 5).map(buildScriptureQ);
  } else if (mode === 'rapid') {
    questions = shuffle(RAPID_POOL).slice(0, 10).map(q => Object.assign({}, q, { type: 'mcq' }));
  }

  if (!questions.length) { showToast('No questions available yet'); return; }

  state.quiz = {
    active: true, mode, questions, current: 0,
    score: 0, correct: 0, startTime: Date.now(),
    answered: false, timer: null,
    timeLeft: mode === 'rapid' ? 15 : 30,
  };

  document.getElementById('quiz-home-view').classList.add('hidden');
  document.getElementById('quiz-result-view').classList.add('hidden');
  document.getElementById('quiz-active-view').classList.remove('hidden');
  renderQuestion();
}

function buildScriptureQ(s) {
  const words = s.verse.split(' ');
  const correctWord = s.word;
  const distractors = ['grace', 'faith', 'truth', 'light', 'love', 'peace', 'holy', 'power', 'glory', 'mighty']
    .filter(w => w !== correctWord);
  const opts = shuffle([correctWord, ...shuffle(distractors).slice(0, 3)]);
  const blanked = words.map(w => w === correctWord ? '______' : w).join(' ');
  return {
    type: 'scripture',
    q: 'Complete the verse (' + s.ref + '):\n"' + blanked + '"',
    options: opts,
    answer: opts.indexOf(correctWord),
    explanation: 'The missing word is "' + correctWord + '" — ' + s.ref
  };
}

function renderQuestion() {
  const q = state.quiz.questions[state.quiz.current];
  const total = state.quiz.questions.length;
  const idx = state.quiz.current;
  state.quiz.answered = false;

  document.getElementById('quiz-q-num').textContent = 'Question ' + (idx + 1) + ' of ' + total;
  document.getElementById('quiz-question').textContent = q.q;
  document.getElementById('quiz-progress-fill').style.width = ((idx / total) * 100) + '%';

  const fb = document.getElementById('quiz-feedback');
  fb.className = 'quiz-feedback hidden';
  fb.textContent = '';

  const optsEl = document.getElementById('quiz-options');
  optsEl.innerHTML = q.options.map((opt, i) =>
    '<button class="quiz-option" onclick="selectAnswer(' + i + ')">' +
    String.fromCharCode(65 + i) + '. ' + opt + '</button>'
  ).join('');

  document.getElementById('quiz-timer').textContent = '\u23F1 ' + state.quiz.timeLeft;

  if (state.quiz.mode === 'rapid') startTimer();
}

function startTimer() {
  clearInterval(state.quiz.timer);
  state.quiz.timeLeft = 15;
  updateTimerDisplay();
  state.quiz.timer = setInterval(() => {
    state.quiz.timeLeft--;
    updateTimerDisplay();
    if (state.quiz.timeLeft <= 0) {
      clearInterval(state.quiz.timer);
      if (!state.quiz.answered) timeUp();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const el = document.getElementById('quiz-timer');
  el.textContent = '\u23F1 ' + state.quiz.timeLeft;
  el.style.color = state.quiz.timeLeft <= 5 ? '#E53935' : 'var(--gold)';
}

function timeUp() {
  state.quiz.answered = true;
  document.querySelectorAll('.quiz-option').forEach(b => b.classList.add('disabled'));
  const q = state.quiz.questions[state.quiz.current];
  document.querySelectorAll('.quiz-option')[q.answer]?.classList.add('correct');
  showFeedback(false, 'Time up! ' + (q.explanation || ''));
  setTimeout(nextQuestion, 2000);
}

function selectAnswer(idx) {
  if (state.quiz.answered) return;
  state.quiz.answered = true;
  clearInterval(state.quiz.timer);

  const q = state.quiz.questions[state.quiz.current];
  const correct = idx === q.answer;
  const btns = document.querySelectorAll('.quiz-option');
  btns.forEach(b => b.classList.add('disabled'));
  btns[idx]?.classList.add(correct ? 'correct' : 'wrong');
  if (!correct) btns[q.answer]?.classList.add('correct');

  const pts = state.quiz.mode === 'rapid'
    ? Math.max(1, state.quiz.timeLeft) * 10
    : 10;
  if (correct) { state.quiz.correct++; state.quiz.score += pts; }

  showFeedback(correct, q.explanation || '');
  setTimeout(nextQuestion, correct ? 1200 : 2200);
}

function showFeedback(correct, text) {
  const el = document.getElementById('quiz-feedback');
  el.className = 'quiz-feedback ' + (correct ? 'correct-fb' : 'wrong-fb');
  el.textContent = (correct ? '\u2713 Correct! ' : '\u2717 ') + text;
}

function nextQuestion() {
  state.quiz.current++;
  if (state.quiz.current >= state.quiz.questions.length) {
    endQuiz();
  } else {
    renderQuestion();
  }
}

function endQuiz() {
  clearInterval(state.quiz.timer);
  state.totalScore += state.quiz.score;
  state.quizzesDone++;
  localStorage.setItem('rr_score', state.totalScore);
  localStorage.setItem('rr_qcount', state.quizzesDone);

  // Update leaderboard
  state.leaderboard.forEach(r => { if (r.isMe) r.score = state.totalScore; });
  state.leaderboard.sort((a, b) => b.score - a.score);
  localStorage.setItem('rr_lb', JSON.stringify(state.leaderboard));

  updateQuizStats();
  buildLeaderboard();
  buildProfile();
  buildAchievements();

  const total = state.quiz.questions.length;
  const pct = Math.round((state.quiz.correct / total) * 100);
  const elapsed = Math.round((Date.now() - state.quiz.startTime) / 1000);

  document.getElementById('quiz-active-view').classList.add('hidden');
  const rv = document.getElementById('quiz-result-view');
  rv.classList.remove('hidden');

  document.getElementById('result-icon').textContent =
    pct >= 80 ? '\uD83C\uDFC6' : pct >= 60 ? '\u2B50' : '\uD83D\uDCBE';
  document.getElementById('result-title').textContent =
    pct >= 80 ? 'Excellent!' : pct >= 60 ? 'Good Work!' : 'Keep Studying!';
  document.getElementById('result-score-text').textContent =
    'You got ' + state.quiz.correct + ' of ' + total + ' correct (' + pct + '%)';
  document.getElementById('r-correct').textContent = state.quiz.correct;
  document.getElementById('r-points').textContent = state.quiz.score;
  document.getElementById('r-time').textContent = elapsed + 's';
}

function exitQuiz() {
  clearInterval(state.quiz.timer);
  state.quiz.active = false;
  document.getElementById('quiz-active-view').classList.add('hidden');
  document.getElementById('quiz-result-view').classList.add('hidden');
  document.getElementById('quiz-home-view').classList.remove('hidden');
}

function shareResult() {
  const text = '\uD83C\uDFC6 I scored ' + state.quiz.score + ' points (' +
    state.quiz.correct + '/' + state.quiz.questions.length + ' correct) in Rhapsody Bible Quiz! Can you beat me?';
  if (tg?.switchInlineQuery) {
    tg.switchInlineQuery(text, ['users']);
  } else if (navigator.share) {
    navigator.share({ title: 'Rhapsody Quiz Result', text });
  } else {
    showToast('Score: ' + state.quiz.score + ' pts!');
  }
  exitQuiz();
}

function updateQuizStats() {
  document.getElementById('streak-count').textContent = state.streak;
  document.getElementById('total-score').textContent = state.totalScore;
  document.getElementById('quizzes-done').textContent = state.quizzesDone;
}

// ============================================================
// CHALLENGES
// ============================================================
function buildLeaderboard() {
  state.leaderboard.forEach(r => { if (r.isMe) r.score = state.totalScore; });
  state.leaderboard.sort((a, b) => b.score - a.score);

  const el = document.getElementById('leaderboard-list');
  const medals = ['\uD83E\uDD47', '\uD83E\uDD48', '\uD83E\uDD49'];
  const rClass = ['gold', 'silver', 'bronze'];
  el.innerHTML = state.leaderboard.slice(0, 5).map((r, i) =>
    '<div class="lb-row' + (r.isMe ? '" style="background:rgba(201,168,76,0.06)' : '') + '">' +
    '<span class="lb-rank ' + (rClass[i] || '') + '">' + (medals[i] || (i + 1)) + '</span>' +
    '<div class="lb-avatar">' + r.initials + '</div>' +
    '<span class="lb-name">' + r.name + (r.isMe ? ' (You)' : '') + '</span>' +
    '<span class="lb-pts">' + r.score.toLocaleString() + ' pts</span>' +
    '</div>'
  ).join('');
}

function createChallenge() {
  const code = generateCode();
  const modes = ['Daily Devotional Quiz', 'Scripture Memory', 'Rapid Fire'];
  const mode = modes[Math.floor(Math.random() * modes.length)];
  showModal(
    '<p class="modal-title">Challenge Created! \u2694</p>' +
    '<p class="modal-body">Share this code with a friend to battle in <strong>' + mode + '</strong>:</p>' +
    '<div class="challenge-code">' +
    '<p class="code-label">Challenge Code</p>' +
    '<p class="code-value">' + code + '</p>' +
    '</div>' +
    '<p style="font-size:0.8rem;color:var(--text-dim);text-align:center;margin-bottom:16px">Valid 24 hours \u2022 ' + mode + '</p>' +
    '<div class="modal-actions">' +
    '<button class="action-btn primary" onclick="shareChallenge(\'' + code + '\',\'' + mode + '\')">Share Code \uD83D\uDCE4</button>' +
    '<button class="action-btn secondary" onclick="closeModal()">Close</button>' +
    '</div>'
  );
  state.activeChallenges.push({ code, mode, created: Date.now(), status: 'pending' });
  localStorage.setItem('rr_chals', JSON.stringify(state.activeChallenges));
  updateActiveChallenges();
}

function shareChallenge(code, mode) {
  const text = '\u2694 I challenge you to a Rhapsody Bible Quiz duel!\nMode: ' + mode + '\nCode: ' + code + '\nAccept the challenge!';
  closeModal();
  if (tg?.switchInlineQuery) {
    tg.switchInlineQuery(text, ['users']);
  } else if (navigator.share) {
    navigator.share({ title: 'Rhapsody Challenge', text });
  } else {
    showToast('Code: ' + code);
  }
}

function joinChallenge() {
  showModal(
    '<p class="modal-title">Join Challenge \uD83D\uDD17</p>' +
    '<p class="modal-body">Enter the challenge code shared with you:</p>' +
    '<input type="text" class="modal-input" id="code-input" placeholder="Enter code" maxlength="6" ' +
    'style="text-align:center;letter-spacing:0.3em;font-size:1.3rem;text-transform:uppercase" />' +
    '<div class="modal-actions">' +
    '<button class="action-btn primary" onclick="acceptChallenge()">' +
    'Join \u26A1</button>' +
    '<button class="action-btn secondary" onclick="closeModal()">Cancel</button>' +
    '</div>'
  );
  setTimeout(() => document.getElementById('code-input')?.focus(), 100);
}

function acceptChallenge() {
  const code = document.getElementById('code-input')?.value?.trim()?.toUpperCase();
  if (!code || code.length < 4) { showToast('Enter a valid code'); return; }
  closeModal();
  showToast('Joining challenge...');
  setTimeout(() => startDuel(code), 500);
}

function startDuel(code) {
  const questions = shuffle(RAPID_POOL).slice(0, 10).map(q => Object.assign({}, q));
  document.getElementById('challenge-home-view').classList.add('hidden');
  const av = document.getElementById('challenge-active-view');
  av.classList.remove('hidden');

  document.getElementById('your-name').textContent = TG_USER.first_name || 'You';
  document.getElementById('opp-name').textContent = 'Friend';
  document.getElementById('your-score').textContent = '0';
  document.getElementById('opp-score').textContent = '\u2013';

  renderDuelQ(questions, 0);
}

function renderDuelQ(questions, idx) {
  if (idx >= questions.length) {
    document.getElementById('challenge-active-view').classList.add('hidden');
    document.getElementById('challenge-home-view').classList.remove('hidden');
    showToast('Challenge complete! \uD83C\uDFC6');
    return;
  }
  const q = questions[idx];
  document.getElementById('chal-q-num').textContent = 'Question ' + (idx + 1) + ' of ' + questions.length;
  document.getElementById('chal-question').textContent = q.q;
  const optsEl = document.getElementById('chal-options');
  optsEl.innerHTML = q.options.map((o, i) =>
    '<button class="quiz-option" onclick="duelAnswer(this,' + i + ',' + q.answer + ',' +
    JSON.stringify(questions).split('"').join('&quot;') + ',' + (idx + 1) + ')">' +
    String.fromCharCode(65 + i) + '. ' + o + '</button>'
  ).join('');
}

function duelAnswer(btn, selected, correct, questions, nextIdx) {
  document.querySelectorAll('#chal-options .quiz-option').forEach(b => b.classList.add('disabled'));
  btn.classList.add(selected === correct ? 'correct' : 'wrong');
  if (selected !== correct) {
    document.querySelectorAll('#chal-options .quiz-option')[correct]?.classList.add('correct');
  }
  const sc = parseInt(document.getElementById('your-score').textContent) || 0;
  if (selected === correct) document.getElementById('your-score').textContent = sc + 10;
  setTimeout(() => renderDuelQ(questions, nextIdx), 1200);
}

function updateActiveChallenges() {
  const el = document.getElementById('active-challenges-list');
  if (!state.activeChallenges.length) {
    el.innerHTML = '<p class="no-challenges">No active challenges.<br>Create or join one above!</p>';
    return;
  }
  el.innerHTML = state.activeChallenges.map(c =>
    '<div class="quiz-mode-card" style="margin-bottom:10px">' +
    '<div class="mode-icon">\u2694</div>' +
    '<div class="mode-info">' +
    '<p class="mode-name">' + c.mode + '</p>' +
    '<p class="mode-desc">Code: ' + c.code + ' \u2022 ' + c.status + '</p>' +
    '</div>' +
    '</div>'
  ).join('');
}

function generateCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

// ============================================================
// PROFILE
// ============================================================
function buildProfile() {
  const name = (TG_USER.first_name || '') + (TG_USER.last_name ? ' ' + TG_USER.last_name : '') || 'Rhapsody Reader';
  const handle = TG_USER.username ? '@' + TG_USER.username : '@reader';
  const initial = name.charAt(0).toUpperCase();

  document.getElementById('profile-avatar').textContent = initial;
  document.getElementById('profile-name').textContent = name;
  document.getElementById('profile-handle').textContent = handle;
  document.getElementById('p-streak').textContent = state.streak;
  document.getElementById('p-points').textContent = state.totalScore;
  document.getElementById('p-read').textContent = state.readDays.length;

  const myRank = state.leaderboard.findIndex(r => r.isMe) + 1;
  document.getElementById('p-rank').textContent = myRank > 0 ? '#' + myRank : '#\u2013';

  const badges = [];
  if (state.streak >= 7) badges.push('\uD83D\uDD25 7-Day Streak');
  if (state.streak >= 30) badges.push('\u26A1 30-Day Streak');
  if (state.totalScore >= 500) badges.push('\u2B50 500 Club');
  if (state.readDays.length >= 30) badges.push('\uD83D\uDCDA Devotee');
  if (state.quizzesDone >= 10) badges.push('\u26A1 Quiz Pro');
  if (!badges.length) badges.push('\u2726 New Believer');

  document.getElementById('profile-badges').innerHTML =
    badges.map(b => '<span class="badge">' + b + '</span>').join('');
}

function buildAchievements() {
  const list = [
    { icon: '\uD83D\uDCDA', name: 'First Read', unlocked: state.readDays.length >= 1 },
    { icon: '\uD83D\uDD25', name: '7 Day Streak', unlocked: state.streak >= 7 },
    { icon: '\u26A1', name: 'Quiz Pro', unlocked: state.quizzesDone >= 5 },
    { icon: '\uD83C\uDFC6', name: '500 Points', unlocked: state.totalScore >= 500 },
    { icon: '\uD83D\uDCC5', name: '30 Days', unlocked: state.readDays.length >= 30 },
    { icon: '\u2694', name: 'First Duel', unlocked: state.activeChallenges.length >= 1 },
    { icon: '\u2726', name: 'Scripture Pro', unlocked: state.quizzesDone >= 10 },
    { icon: '\uD83D\uDC51', name: 'Top Ranker', unlocked: state.totalScore >= 2000 },
  ];
  document.getElementById('achievements-grid').innerHTML = list.map(a =>
    '<div class="achievement ' + (a.unlocked ? 'unlocked' : 'locked') + '">' +
    '<div class="achievement-icon">' + a.icon + '</div>' +
    '<div class="achievement-name">' + a.name + '</div>' +
    '</div>'
  ).join('');
}

// ============================================================
// SETTINGS
// ============================================================
function toggleNotif() {
  state.notifOn = !state.notifOn;
  localStorage.setItem('rr_notif', state.notifOn);
  document.getElementById('notif-toggle').classList.toggle('on', state.notifOn);
  showToast(state.notifOn ? '\uD83D\uDD14 Reminders on' : '\uD83D\uDD15 Reminders off');
}

function shareApp() {
  const text = '\uD83D\uDCD6 Read Rhapsody of Realities daily & take Bible quizzes with friends!';
  if (tg?.shareUrl) {
    tg.shareUrl(window.location.href, text);
  } else if (navigator.share) {
    navigator.share({ title: 'Rhapsody App', text });
  } else {
    showToast('Share via Telegram!');
  }
}

// ============================================================
// MODAL
// ============================================================
function showModal(html) {
  document.getElementById('modal-content').innerHTML = html;
  document.getElementById('modal-overlay').classList.remove('hidden');
}
function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
}

// ============================================================
// TOAST
// ============================================================
function showToast(msg, duration) {
  duration = duration || 2200;
  const old = document.querySelector('.toast');
  if (old) old.remove();
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), duration);
}

// ============================================================
// UTILS
// ============================================================
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}
