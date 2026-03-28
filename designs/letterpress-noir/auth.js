(() => {
  const PASSWORD = 'hulkenbergdagoat';
  const KEY = 'wedding_auth';

  if (sessionStorage.getItem(KEY) === 'true') return;

  document.body.style.visibility = 'hidden';

  const overlay = document.createElement('div');
  overlay.id = 'auth-overlay';
  overlay.innerHTML = `
    <div class="auth-box">
      <p class="auth-title">Joice & Pedro</p>
      <p class="auth-subtitle">Digite a senha para acessar</p>
      <input type="password" id="auth-input" placeholder="Senha" autocomplete="off">
      <button id="auth-btn">Entrar</button>
      <p id="auth-error"></p>
    </div>
  `;
  document.body.prepend(overlay);
  document.body.style.visibility = 'visible';

  const input = document.getElementById('auth-input');
  const btn = document.getElementById('auth-btn');
  const error = document.getElementById('auth-error');

  function attempt() {
    if (input.value === PASSWORD) {
      sessionStorage.setItem(KEY, 'true');
      overlay.remove();
    } else {
      error.textContent = 'Senha incorreta';
      input.value = '';
      input.focus();
    }
  }

  btn.addEventListener('click', attempt);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') attempt();
  });

  input.focus();
})();
