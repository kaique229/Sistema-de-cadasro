package com.Estetica.CadastroAgendamento.Interface;


import com.Estetica.CadastroAgendamento.Model.Cadastro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CadastroRepository extends JpaRepository <Cadastro, Long> {
}
