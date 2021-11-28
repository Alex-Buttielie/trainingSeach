package com.alex.springangular.repositorys;

import com.alex.springangular.domain.Arquivo;
import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;
import java.sql.Date;
import java.util.List;

@Repository
public class ArquivoRespositoryImpl{

    private final EntityManager entityManager;

    public ArquivoRespositoryImpl(EntityManager entityManager){
        this.entityManager = entityManager;
    }

    public List<Arquivo> getArquivoParam(String data, String nome, Integer tipo) {

        String sql = "SELECT arq FROM Arquivo as arq";

               sql+=" WHERE 1=1";

        if (data != null && !data.equals("null") && !data.equals("")) {
            sql+=" and arq.data = :data" ;
        }

        if (nome != null && !nome.equals("") && !nome.equals("null")) {
            sql+=" and arq.nome = :nome";
        }

        if (tipo != null) {
            sql+=" and arq.tipo = :tipo";
        }

        var query = entityManager.createQuery(sql, Arquivo.class);

        if (data != null && !data.equals("null")  && !data.equals("")) {
            query.setParameter("data", Date.valueOf(data));
        }

        if (nome != null && !nome.equals("") && !nome.equals("null")) {
            query.setParameter("nome", nome);
        }

        if (tipo != null) {
            query.setParameter("tipo", tipo);
        }

        return query.getResultList();

    }
}
