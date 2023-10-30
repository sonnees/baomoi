package com.baomoi.repositories;

import com.baomoi.models.ImageArticle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.UUID;

@RepositoryRestResource(path = "image-article")
public interface ImageArticleRepository extends JpaRepository<ImageArticle, UUID> {
}