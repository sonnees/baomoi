package com.baomoi.resources;

import com.baomoi.entity.Article;
import com.baomoi.repositories.ArticleRepository;
import com.baomoi.services.ArticleService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/article")
public class ArticleResource {
    private final ArticleRepository articleRepository;
    private final ArticleService articleService;

    public ArticleResource(ArticleRepository articleRepository, ArticleService articleService) {
        this.articleRepository = articleRepository;
        this.articleService = articleService;
    }

    @PostMapping("/add-list")
    public void addList(@RequestBody List<Article> articles){
        articleRepository.saveAll(articles);
    }
}
