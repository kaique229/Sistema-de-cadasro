package com.Estetica.CadastroAgendamento.Service;

import com.Estetica.CadastroAgendamento.Interface.CadastroRepository;
import com.Estetica.CadastroAgendamento.Model.Cadastro;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CadastroService {
    private final CadastroRepository repository;

    public CadastroService(CadastroRepository repository) {
        this.repository = repository;
    }

    //METODO DE LISTAR TODOS
    public List<Cadastro> listarTodos(){
        return repository.findAll();
    }
    //METODO DE SALVAR
    public Cadastro salvar (Cadastro cadastro){
        return repository.save(cadastro);
    }

    //METODO DE EXCLUIR
    public void excluirCadastro(Long id){
        repository.deleteById(id);
    }

    //METODO DE BUSCAR POR ID
    public Cadastro buscarPorId(Long id){
        return repository.findById(id).orElse(null);
    }

}
