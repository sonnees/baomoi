package com.baomoi.repositories;

import com.baomoi.entity.Article;
import com.baomoi.entity.Publisher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

@RepositoryRestResource(path = "publisher")
public interface PublisherRepository extends JpaRepository<Publisher, Long> {
    public Optional<Publisher> findPublisherByName(String name);
}