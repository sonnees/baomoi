package com.baomoi.services;

import com.baomoi.dto.ArticleDTO;
import com.baomoi.dto.ArticleImageDTO;
import com.baomoi.mapping.ArticleDTOMap;
import com.baomoi.mapping.ArticleImageDTOMap;
import com.baomoi.mapping.CategoryMap;
import com.baomoi.repositories.ArticleRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.UUID;


@Service
public class ArticleService {
    private final ArticleRepository articleRepository;
    private final ArticleDTOMap articleDTOMap;
    private final ArticleImageDTOMap articleImageDTOMap;
    private final CategoryMap categoryMap;

    public ArticleService(ArticleRepository articleRepository, ArticleDTOMap articleDTOMap, ArticleImageDTOMap articleImageDTOMap, CategoryMap categoryMap) {
        this.articleRepository = articleRepository;
        this.articleDTOMap = articleDTOMap;
        this.articleImageDTOMap = articleImageDTOMap;
        this.categoryMap = categoryMap;
    }

    public Page<ArticleDTO> getAllDTOByCategory(String category, Pageable pageable){
        int valueInt = categoryMap.getValueInt(category);
        Page<Object[]> getAllDTOByCategory = articleRepository.getAllDTOByCategory(valueInt,pageable);
        return articleDTOMap.toPage(getAllDTOByCategory);
    }

    public Page<ArticleDTO> getAllDTOByCategoryNew(Pageable pageable){
        Page<Object[]> allDTOByCategoryNew = articleRepository.getAllDTOByCategoryNew(pageable);
        return articleDTOMap.toPage(allDTOByCategoryNew);
    }

    public ArticleImageDTO getDetailById(UUID id){
        Object[] getDetailById = articleRepository.getDetailById(id).get(0);
        return articleImageDTOMap.toPage(getDetailById);
    }

}
