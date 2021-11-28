package com.alex.springangular.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ArquivoDto {

    private Long id;
    private Date data;
    private String nome;
    private String tipo;
    private Integer qntLinhas;
    private Integer valor;

}
