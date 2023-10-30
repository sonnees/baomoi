package com.baomoi.services;

import com.baomoi.repositories.ImageArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageArticleService {
    private final ImageArticleRepository imageArticleRepository;

    @Autowired
    public ImageArticleService(ImageArticleRepository imageArticleRepository) { this.imageArticleRepository = imageArticleRepository;}

}
