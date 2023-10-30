package com.baomoi.repositories;

import com.baomoi.models.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "account")
public interface AccountRepository extends JpaRepository<Account, Long> {
}