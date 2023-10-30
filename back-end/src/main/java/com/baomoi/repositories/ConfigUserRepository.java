package com.baomoi.repositories;

import com.baomoi.models.ConfigUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "configUser")
public interface ConfigUserRepository extends JpaRepository<ConfigUser, Long> {
}