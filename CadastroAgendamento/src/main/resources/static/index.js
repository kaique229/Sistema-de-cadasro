function Agendar() {
  // Encontra a seção pelo seu ID
  const secaoAgendamento = document.getElementById('secao-agendamento');
  
  // Verifica se a seção existe para evitar erros
  if (secaoAgendamento) {
    // Rola a página até a seção de forma suave
    secaoAgendamento.scrollIntoView({ behavior: 'smooth' });
  }
}


function toggleMenu() {
  const appointmentMenu = document.querySelector('.agendamento-menu');
  appointmentMenu.classList.toggle('visible');
}

function toggleMenu2() {
  const appointmentMenu = document.querySelector('.agendamento-menu2');
  appointmentMenu.classList.toggle('visible');
}