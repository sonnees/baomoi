package com.baomoi.controller;

import com.baomoi.enums.Category;
import com.baomoi.models.Article;
import com.baomoi.models.ImageArticle;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Controller
@RequestMapping("/publisher")
public class PublisherController {
    @GetMapping("home")
    public String viewHome(Model model){

        return "publisher/home";

    }

    @GetMapping("form-new-article")
    public String getFormNewArticle(Model model){
        Article article = new Article();
        article.setImageArticles(List.of(new ImageArticle(), new ImageArticle(), new ImageArticle()));
        List<Category> categories = new ArrayList<>(List.of(Category.values()));
        categories.remove(0);

        model.addAttribute("article", article);
        model.addAttribute("categories", categories);
        return "publisher/new";

    }

    @PostMapping("add-article")
    public String addArticle(Model model,
        @ModelAttribute("article") Article article

    ){
        System.out.println(article.getTitle());
        System.out.println(article.getCategory());
        System.out.println(article.getSummary());
        System.out.println(article.getContent());
        System.out.println(article.getImageArticles().get(0).getImageURL());
        System.out.println(article.getImageArticles().get(0).getTitle());
        System.out.println(article.getImageArticles().get(1).getImageURL());
        System.out.println(article.getImageArticles().get(1).getTitle());
        System.out.println(article.getImageArticles().get(2).getImageURL());
        System.out.println(article.getImageArticles().get(2).getTitle());
        return "redirect:form-new-article";

    }
}
