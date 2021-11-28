package com.alex.springangular.resources;

import com.alex.springangular.domain.Arquivo;
import com.alex.springangular.dto.ArquivoDto;
import com.alex.springangular.services.ArquivoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/arquivos")
public class ArquivoResource {

    @Autowired
    private ArquivoService arquivoService;

    public ArquivoService getService(){
        return  this.arquivoService;
    }

    @GetMapping("/list")
    public ResponseEntity<List<ArquivoDto>> list(){
        return  ResponseEntity.ok().body(getService().listarArquivo());

    }

    @GetMapping("/getArquivoParam")
    @ResponseBody
    public ResponseEntity<List<ArquivoDto>> getArquivo(@RequestParam (value = "data", required = false) String data,
                                                       @RequestParam (value = "nome", required = false)  String nome,
                                                       @RequestParam (value = "tipo", required = false)  String tipo){
        Integer tipoParam = null;

        if (tipo != null && !tipo.equals("null") && !tipo.equals("undefined") ){
            tipoParam = Integer.parseInt(tipo);
        }

        return ResponseEntity.ok().body(this.getService().getArquivoParam(data, nome, tipoParam));

    }
}
