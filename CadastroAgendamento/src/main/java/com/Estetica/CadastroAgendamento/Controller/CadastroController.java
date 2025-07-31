package com.Estetica.CadastroAgendamento.Controller;


import com.Estetica.CadastroAgendamento.Model.Cadastro;
import com.Estetica.CadastroAgendamento.Service.CadastroService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cadastro")
public class CadastroController {
    private final CadastroService service;

    public CadastroController(CadastroService service) {
        this.service = service;
    }


    @GetMapping
    public List<Cadastro> buscarCadastro(){
        return  service.listarTodos();
    }

    @PostMapping
    public Cadastro salvarNovoCadastro(@RequestBody Cadastro cadastro){
        return service.salvar(cadastro);
    }

    @GetMapping("/{id}")
    public Cadastro buscarCadastroId(@PathVariable Long id){
        return service.buscarPorId(id);
    }

    @DeleteMapping("/{id}")
    public void deletarCadastro(@PathVariable Long id){
        service.excluirCadastro(id);
    }

    @PutMapping("/{id}")
    public Cadastro atualizarCadastro(@PathVariable Long id, @RequestBody Cadastro cadastroAtualizado){
        Cadastro existeCadastro = service.buscarPorId(id);

        if (existeCadastro ==null) return  null;
        existeCadastro.setNome(cadastroAtualizado.getNome());
        existeCadastro.setEmail(cadastroAtualizado.getEmail());
        existeCadastro.setDia(cadastroAtualizado.getDia());
        existeCadastro.setHora(cadastroAtualizado.getHora());

        return service.salvar(existeCadastro);

    }

}
