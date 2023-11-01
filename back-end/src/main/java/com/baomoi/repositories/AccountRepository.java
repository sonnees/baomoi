package com.baomoi.repositories;

import com.baomoi.models.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;
import java.util.Optional;

@RepositoryRestResource(path = "account")
public interface AccountRepository extends JpaRepository<Account, Long> {
    List<Account> findByGmail(String gmail);
}