package com.baomoi.repositories;

import com.baomoi.entity.ConfigUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConfigUserRepository extends JpaRepository<ConfigUser, Long> {
}