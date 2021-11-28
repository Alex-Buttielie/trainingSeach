package com.alex.springangular.repositorys;

import com.alex.springangular.domain.Arquivo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArquivoRespository extends JpaRepository<Arquivo, Long> {

}
