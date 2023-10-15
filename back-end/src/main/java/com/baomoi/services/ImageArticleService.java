package com.baomoi.services;

import com.baomoi.entity.Article;
import com.baomoi.entity.ImageArticle;
import com.baomoi.repositories.ArticleRepository;
import com.baomoi.repositories.ImageArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ImageArticleService {
    private final ImageArticleRepository imageArticleRepository;

    @Autowired
    public ImageArticleService(ImageArticleRepository imageArticleRepository) { this.imageArticleRepository = imageArticleRepository;}

}
