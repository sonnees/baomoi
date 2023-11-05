package com.baomoi.controller;

import com.baomoi.dto.ArticlePublisherDTO;
import com.baomoi.enums.Category;
import com.baomoi.models.Account;
import com.baomoi.models.Article;
import com.baomoi.models.ImageArticle;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.CollectionType;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;

@Controller
@RequestMapping("/publisher")
@AllArgsConstructor
public class PublisherController {
    ObjectMapper objectMapper ;
    MySingletonService mySingletonService;
    @GetMapping("home")
    public String viewHome(Model model,
                           @RequestParam(value = "page", required = false) Optional<Integer> page
    ) throws URISyntaxException, IOException, InterruptedException {
        System.out.println(page.orElse(0));
        Account account = mySingletonService.getAccount();
        if(account == null)
            return "login";
        int i =0;
        List<ArticlePublisherDTO> articlePublishers = null;
        for(i =0; i<Integer.MAX_VALUE; i++){
            String restApi1 = "http://localhost:8080/api/v1/article-page/publisher?id="+account.getPublisher().getId()+"&page="+i;
            HttpRequest httpRequest = HttpRequest.newBuilder()
                    .uri(new URI(restApi1))
                    .GET().build();
            HttpClient httpClient = HttpClient.newHttpClient();
            HttpResponse<String> send = httpClient.send(httpRequest, HttpResponse.BodyHandlers.ofString());

            try {
                CollectionType collectionType = objectMapper.getTypeFactory().constructCollectionType(List.class, ArticlePublisherDTO.class);
                List<ArticlePublisherDTO> o = objectMapper.readValue(send.body(), collectionType);
                if(i==page.orElse(1)-1)
                    articlePublishers = o;
                if(o.isEmpty())
                    break;
            } catch (Exception e){
                System.out.println(e.getMessage());
                model.addAttribute("err",true);
                return "login";
            }
        }
        int[] array = IntStream.range(1, i + 1).toArray();
        model.addAttribute("pageSize", array);
        model.addAttribute("articles",articlePublishers);
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
        Account account = (Account) model.getAttribute("account");
        if(account==null)
            return "login";
        article.setPublisher(account.getPublisher());

        if(!article.getImageArticles().get(2).getImageURL().isEmpty())
            article.getImageArticles().remove(2);
        if(!article.getImageArticles().get(1).getImageURL().isEmpty())
            article.getImageArticles().remove(1);


        return "redirect:form-new-article";

    }
}
