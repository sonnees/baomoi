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

    public boolean add(Article article) {return articleRepository.save(article).equals(article);}
    public boolean addAll(List<Article> list) {return articleRepository.saveAll(list).equals(list);}
    public List<Article> getAll() {return (List<Article>) articleRepository.findAll();}
    public Optional<Article> getByID(UUID id) {return articleRepository.findById(id);}
    public void delete(UUID id) {articleRepository.deleteById(id);}
}
