package com.baomoi.repositories;

import com.baomoi.entity.ImageArticle;
import com.baomoi.entity.Publisher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;
import java.util.UUID;

@RepositoryRestResource(path = "image-article")
public interface ImageArticleRepository extends JpaRepository<ImageArticle, UUID> {
}