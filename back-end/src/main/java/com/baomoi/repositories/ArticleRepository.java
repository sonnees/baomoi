package com.baomoi.repositories;

import com.baomoi.entity.Article;
import com.baomoi.entity.ImageArticle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;
import java.util.UUID;

@RepositoryRestResource(path = "article")
public interface ArticleRepository extends JpaRepository<Article, UUID> {
}