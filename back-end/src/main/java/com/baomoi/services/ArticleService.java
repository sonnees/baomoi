package com.baomoi.services;

import com.baomoi.entity.Article;
import com.baomoi.entity.Publisher;
import com.baomoi.repositories.ArticleRepository;
import com.baomoi.repositories.PublisherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ArticleService {
    private final ArticleRepository articleRepository;

    @Autowired
    public ArticleService(ArticleRepository articleRepository) { this.articleRepository = articleRepository;}


}
