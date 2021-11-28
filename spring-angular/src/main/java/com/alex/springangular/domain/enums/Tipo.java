package com.alex.springangular.domain.enums;

public enum Tipo {

    REMESSA(1, "REMESSA"),
    RETORNO(2, "RETORNO");

    private int cod;
    private String descricao;

    private Tipo(int cod, String descricao) {
        this.cod = cod;
        this.descricao = descricao;
    }

    public int getCod() {
        return cod;
    }

    public String getDescricao () {
        return descricao;
    }

    public static Tipo toEnum(Integer cod) {

        if (cod == null) {
            return null;
        }

        for (Tipo x : Tipo.values()) {
            if (cod.equals(x.getCod())) {
                return x;
            }
        }

        throw new IllegalArgumentException("Id inválido: " + cod);
    }
}
