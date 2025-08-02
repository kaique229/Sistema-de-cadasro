function Agendar() {
  const secaoAgendamento = document.getElementById('secao-agendamento');
  
  if (secaoAgendamento) {
    secaoAgendamento.scrollIntoView({ behavior: 'smooth' });
  }
}


function agendados() {
  window.location.href = 'agenda.html';
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
      nome: document.getElementById('nome').value,
      email: document.getElementById('email').value,
      estetica: document.getElementById('estetica').value,
      dia: document.getElementById('dia').value,
      hora: document.getElementById('hora').value
    };

    fetch('http://localhost:8080/cadastro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) throw new Error('Erro ao enviar');
      return response.json();
    })
    .then(() => {
      // Redireciona para agenda.html após o agendamento
      window.location.href = 'agenda.html';
    })
    .catch(error => {
      console.error('Erro ao enviar agendamento:', error);
      // Nenhum alerta visual é necessário
    });
  });
});


// A função para mostrar o pop-up
function showLoginPopup() {
    const loginPopup = document.getElementById('login-popup');
    // Só mostra o modal quando esta função é chamada
    loginPopup.style.display = 'flex';
}

// A função para fechar o pop-up
function closeLoginPopup() {
    const loginPopup = document.getElementById('login-popup');
    // Esconde o modal
    loginPopup.style.display = 'none';
}

// Adiciona os eventos após a página ser carregada
document.addEventListener('DOMContentLoaded', function() {
    const loginPopup = document.getElementById('login-popup');

    // Fecha o pop-up se o usuário clicar fora do conteúdo
    window.onclick = function(event) {
        if (event.target === loginPopup) {
            closeLoginPopup();
        }
    };

    // Lógica para o formulário de login
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        alert('Formulário de login enviado!');
        // Aqui você pode adicionar a lógica de autenticação do usuário
        closeLoginPopup(); // Fecha o pop-up após o envio
    });
});