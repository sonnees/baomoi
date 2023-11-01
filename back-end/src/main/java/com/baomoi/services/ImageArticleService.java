package com.baomoi.services;

import com.baomoi.repositories.ImageArticleRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ImageArticleService {
    private final ImageArticleRepository imageArticleRepository;

}
