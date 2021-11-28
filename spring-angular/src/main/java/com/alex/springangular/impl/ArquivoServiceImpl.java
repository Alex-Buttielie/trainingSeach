package com.alex.springangular.impl;

import com.alex.springangular.domain.Arquivo;
import com.alex.springangular.domain.enums.Tipo;
import com.alex.springangular.dto.ArquivoDto;
import com.alex.springangular.repositorys.ArquivoRespository;
import com.alex.springangular.repositorys.ArquivoRespositoryImpl;
import com.alex.springangular.services.ArquivoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ArquivoServiceImpl implements ArquivoService {

    @Autowired
    private ArquivoRespository respository;

    @Autowired
    private ArquivoRespositoryImpl respositoryImpl;

    private ArquivoRespository getRespository(){
        return respository;
    }

    private ArquivoRespositoryImpl getRespositoryImpl(){
        return respositoryImpl;
    }

    @Override
    public List<ArquivoDto> listarArquivo() {
        return Optional
                .ofNullable(montarListaArquivo(respository.findAll()))
                .orElseThrow(()-> new RuntimeException("Não existem arquivos cadastrados"));
    }

    @Override
    public List<ArquivoDto> getArquivoParam(String data, String nome, Integer tipo) {


        return Optional
                .ofNullable(montarListaArquivo(getRespositoryImpl().getArquivoParam(data, nome, tipo)))
                .orElseThrow(()-> new NullPointerException("teste"));
    }

    private List<ArquivoDto> montarListaArquivo(List<Arquivo> listaArquivos){

        List<Arquivo>  listarArquivos = listaArquivos;
        List<ArquivoDto> ArquivoDtoList = new ArrayList<>();

        listarArquivos
                .stream()
                .forEach(arquivo -> {
                    ArquivoDtoList.add(ArquivoDto.builder()
                            .nome(arquivo.getNome())
                            .data(arquivo.getData())
                            .qntLinhas(arquivo.getQntLinhas())
                            .valor(arquivo.getValor())
                            .tipo(arquivo.getTipo() == 1 ? Tipo.REMESSA.getDescricao() : Tipo.RETORNO.getDescricao())
                            .build());
                });

        return ArquivoDtoList;
    }
}
