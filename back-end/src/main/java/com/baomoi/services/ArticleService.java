package com.baomoi.services;

import com.baomoi.dto.ArticleDTO;
import com.baomoi.dto.ArticleImageDTO;
import com.baomoi.dto.ArticlePublisherDTO;
import com.baomoi.mapping.ArticleDTOMap;
import com.baomoi.mapping.ArticleImageDTOMap;
import com.baomoi.mapping.ArticlePublisherDTOMap;
import com.baomoi.mapping.CategoryMap;
import com.baomoi.models.Article;
import com.baomoi.repositories.ArticleRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;


@Service
@AllArgsConstructor
public class ArticleService {
    private final ArticleRepository articleRepository;
    private final ArticleDTOMap articleDTOMap;
    private final ArticleImageDTOMap articleImageDTOMap;
    private final CategoryMap categoryMap;
    private final ArticlePublisherDTOMap articlePublisherDTOMap;

    public Page<ArticleDTO> getAllDTOByCategory(String category, Pageable pageable){
        int valueInt = categoryMap.getValueInt(category);
        Page<Object[]> getAllDTOByCategory = articleRepository.getAllDTOByCategory(valueInt,pageable);
        return articleDTOMap.toPage(getAllDTOByCategory);
    }

    public Page<ArticleDTO> getAllDTOByDateTime(Pageable pageable){
        Page<Object[]> allDTOByCategoryNew = articleRepository.getAllDTOByDateTime(pageable);
        return articleDTOMap.toPage(allDTOByCategoryNew);
    }

    public Page<ArticleDTO> searchByTitle(Pageable pageable,String keySearch){
        String temp = keySearch.trim();
        Page<Object[]> allDTOByCategoryNew = articleRepository.searchByTitle(pageable,temp);
        return articleDTOMap.toPage(allDTOByCategoryNew);
    }

    public ArticleImageDTO getDetailById(UUID id){
        Object[] getDetailById = articleRepository.getDetailById(id).get(0);
        return articleImageDTOMap.toPage(getDetailById);
    }

    public List<ArticlePublisherDTO> getAllByIdPublisher(long id,Pageable pageable){
        Page<Object[]> allByIdPublisher = articleRepository.getAllByIdPublisher(id,pageable);
        return articlePublisherDTOMap.toPage(allByIdPublisher);
    }

}
