package com.baomoi;

import com.baomoi.dto.ArticleDTO;
import com.baomoi.services.ArticleService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

@SpringBootTest
public class TestArticleService {
    @Autowired
    private ArticleService articleService;

    @Test
    public void getAllDTOByCategory(){
        Pageable pageable = PageRequest.of(0,3);
        Page<ArticleDTO> allDTOByCategory = articleService.getAllDTOByCategory("XE", pageable);
        Assertions.assertNotNull(allDTOByCategory);
    }

    @Test
    public void getAllDTOByCategoryNew(){
        Pageable pageable = PageRequest.of(0,3);
        Page<ArticleDTO> allDTOByCategoryNew = articleService.getAllDTOByCategoryNew(pageable);
        Assertions.assertNotNull(allDTOByCategoryNew);
    }
}
