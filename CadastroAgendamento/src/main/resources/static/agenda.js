
function voltar() {
    window.location.href = 'index.html';
}





document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:8080/cadastro')
    .then(response => response.json())
    .then(data => {
      const tbody = document.getElementById('Agendamentos-tbody');
      data.forEach(agendamento => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${agendamento.nome}</td>
          <td>${agendamento.email}</td>
          <td>${agendamento.estetica}</td>
          <td>${agendamento.dia}</td>
          <td>${agendamento.hora}</td>
        `;
        tbody.appendChild(tr);
      });
    })
    .catch(error => console.error('Erro ao carregar agendamentos:', error));
});






document.addEventListener('DOMContentLoaded', () => {
  const tbody = document.getElementById('Agendamentos-tbody');

  fetch('http://localhost:8080/cadastro')
    .then(response => response.json())
    .then(data => {
      tbody.innerHTML = ''; // limpa antes de preencher

      data.forEach(agendamento => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
          <td>${agendamento.nome}</td>
          <td>${agendamento.email}</td>
          <td>${agendamento.estetica}</td>
          <td>${agendamento.dia}</td>
          <td>${agendamento.hora}</td>
          <td>
            <button class="deletar-btn" data-id="${agendamento.id}">Deletar</button>
          </td>
        `;

        tbody.appendChild(tr);
      });

      // Atribui evento de deletar
      document.querySelectorAll('.deletar-btn').forEach(button => {
        button.addEventListener('click', function () {
          const id = this.getAttribute('data-id');

          fetch(`http://localhost:8080/cadastro/${id}`, {
            method: 'DELETE'
          })
          .then(response => {
            if (!response.ok) throw new Error('Erro ao deletar');
            this.closest('tr').remove();
          })
          .catch(error => {
            console.error('Erro ao deletar agendamento:', error);
          });
        });
      });
    })
    .catch(error => {
      console.error('Erro ao carregar agendamentos:', error);
    });
});


