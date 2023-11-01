package com.baomoi.resources;

import com.baomoi.models.ImageArticle;
import com.baomoi.repositories.ImageArticleRepository;
import com.baomoi.services.ImageArticleService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/image-article")
@AllArgsConstructor
public class ImageArticleResource {
    private final ImageArticleRepository imageArticleRepository;
    private final ImageArticleService imageArticleService;

    @PostMapping("/add-list")
    public void addList(@RequestBody List<ImageArticle> imageArticles){
        imageArticleRepository.saveAll(imageArticles);
    }
}
