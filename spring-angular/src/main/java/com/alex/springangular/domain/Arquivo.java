package com.alex.springangular.domain;

import com.alex.springangular.domain.enums.Tipo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;
import java.time.LocalDate;

@Entity
@Table(name = "ARQUIVO")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Arquivo {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "DATA")
    private Date data;

    @Column(name = "NOME")
    private String nome;

    @Column(name = "TIPO")
    private Integer tipo;

    @Column(name= "QNT_LINHAS")
    private Integer qntLinhas;

    @Column(name = "VALOR")
    private Integer valor;
}
