package com.baomoi.repositories;

import com.baomoi.entity.ImageArticle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ImageArticleRepository extends JpaRepository<ImageArticle, UUID> {
}