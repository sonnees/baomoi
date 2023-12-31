package com.baomoi.resources;

import com.baomoi.dto.ArticleDTO;
import com.baomoi.dto.ArticleImageDTO;
import com.baomoi.dto.ArticlePublisherDTO;
import com.baomoi.models.Article;
import com.baomoi.models.ImageArticle;
import com.baomoi.repositories.ArticleRepository;
import com.baomoi.services.ArticleService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/article-page")
@AllArgsConstructor
public class ArticleResource {
    private final ArticleRepository articleRepository;
    private final ArticleService articleService;


    @GetMapping("/article-category")
    public Page<ArticleDTO> getAllDTOByCategory(
            @RequestParam("page") Optional<Integer> page,
            @RequestParam("size") Optional<Integer> size,
            @RequestParam("category") String category){
        Pageable pageable = PageRequest.of(page.orElse(0),size.orElse(5));
        return articleService.getAllDTOByCategory(category, pageable);
    }

    @GetMapping("/article-new")
    public Page<ArticleDTO> getAllDTOByDateTime(
            @RequestParam("page") Optional<Integer> page,
            @RequestParam("size") Optional<Integer> size){
        Pageable pageable = PageRequest.of(page.orElse(0),size.orElse(5));
        return articleService.getAllDTOByDateTime(pageable);
    }

    @GetMapping("/search")
    public Page<ArticleDTO> searchByTitle(
            @RequestParam("page") Optional<Integer> page,
            @RequestParam("size") Optional<Integer> size,
            @RequestParam("keySearch") String keySearch
            ){
        Pageable pageable = PageRequest.of(page.orElse(0),size.orElse(5));
        return articleService.searchByTitle(pageable,keySearch);
    }

    @GetMapping("/article-detail")
    public ArticleImageDTO getDetailById(
            @RequestParam("id") Optional<UUID> id){
        return articleService.getDetailById(id.orElse(UUID.randomUUID()));
    }

    @GetMapping("/publisher")
    public List<ArticlePublisherDTO> getAllByIdPublisher(
            @RequestParam("page") Optional<Integer> page,
            @RequestParam("size") Optional<Integer> size,
            @RequestParam("id") long id){
        Pageable pageable = PageRequest.of(page.orElse(0),size.orElse(5));
        return articleService.getAllByIdPublisher(id,pageable);
    }

    @PostMapping("/add")
    public void add(@RequestBody Article article){
        articleRepository.save(article);
    }

    @GetMapping("/delete/{id}")
    public void add(@PathVariable("id") UUID uuid){
        articleRepository.deleteById(uuid);
    }

}
