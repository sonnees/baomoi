package com.baomoi.resources;

import com.baomoi.entity.Article;
import com.baomoi.entity.ImageArticle;
import com.baomoi.repositories.ImageArticleRepository;
import com.baomoi.services.ImageArticleService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/image-article")
public class ImageArticleResource {
    private final ImageArticleRepository imageArticleRepository;
    private final ImageArticleService imageArticleService;

    public ImageArticleResource(ImageArticleRepository imageArticleRepository, ImageArticleService imageArticleService) {
        this.imageArticleRepository = imageArticleRepository;
        this.imageArticleService = imageArticleService;
    }

    @PostMapping("/add-list")
    public void addList(@RequestBody List<ImageArticle> imageArticles){
        imageArticleRepository.saveAll(imageArticles);
    }
}
