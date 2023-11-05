package com.baomoi.repositories;

import com.baomoi.models.ConfigAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "config-account")
public interface ConfigAccountRepository extends JpaRepository<ConfigAccount, Long> {

}
