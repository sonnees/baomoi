package com.baomoi.resources;

import com.baomoi.dto.ArticleDTO;
import com.baomoi.dto.ArticleImageDTO;
import com.baomoi.enums.Category;
import com.baomoi.models.Article;
import com.baomoi.repositories.ArticleRepository;
import com.baomoi.services.ArticleService;
import jakarta.persistence.criteria.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/article-page")
public class ArticleResource {
    private final ArticleRepository articleRepository;
    private final ArticleService articleService;

    public ArticleResource(ArticleRepository articleRepository, ArticleService articleService) {
        this.articleRepository = articleRepository;
        this.articleService = articleService;
    }

    @GetMapping("/article-category")
    public Page<ArticleDTO> getAllDTOByCategory(
            @RequestParam("page") Optional<Integer> page,
            @RequestParam("size") Optional<Integer> size,
            @RequestParam("category") String category){
        Pageable pageable = PageRequest.of(page.orElse(0),size.orElse(5));
        return articleService.getAllDTOByCategory(category, pageable);
    }

    @GetMapping("/article-new")
    public Page<ArticleDTO> getAllDTOByCategoryNew(
            @RequestParam("page") Optional<Integer> page,
            @RequestParam("size") Optional<Integer> size){
        Pageable pageable = PageRequest.of(page.orElse(0),size.orElse(5));
        return articleService.getAllDTOByCategoryNew(pageable);
    }

    @GetMapping("/article-detail")
    public ArticleImageDTO getDetailById(
            @RequestParam("id") Optional<UUID> id){
        return articleService.getDetailById(id.orElse(UUID.randomUUID()));
    }

    @PostMapping("/add-list")
    public void addList(@RequestBody List<Article> articles){
        articleRepository.saveAll(articles);
    }
}
