package com.alex.springangular.services;

import com.alex.springangular.dto.ArquivoDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ArquivoService {

    List<ArquivoDto> listarArquivo();
    List<ArquivoDto> getArquivoParam(String data, String nome, Integer tipo);
}
