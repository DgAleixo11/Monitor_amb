function atualizarRelogioBrasilia() {
  const horaBrasilia = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date());

  const relogio = document.getElementById('relogio');

  if (relogio) {
    relogio.textContent = horaBrasilia;
  }
}

atualizarRelogioBrasilia();
setInterval(atualizarRelogioBrasilia, 1000);