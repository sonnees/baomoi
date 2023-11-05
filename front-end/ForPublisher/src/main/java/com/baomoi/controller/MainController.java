package com.baomoi.controller;
import com.baomoi.dto.ArticlePublisherDTO;
import com.baomoi.models.Account;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.CollectionType;
import lombok.AllArgsConstructor;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;

@Controller
@RequestMapping("")
@AllArgsConstructor
public class MainController {
    ObjectMapper objectMapper ;

    @GetMapping("login")
    public String getFormLogin(Model model){
        model.addAttribute("gmail","");
        model.addAttribute("password","");
        model.addAttribute("err",false);
        return "login";
    }

    @GetMapping("check-login")
    public String checkLoin(Model model,
                            @ModelAttribute("gmail") String gmail,
                            @ModelAttribute("password") String password
                            ) throws URISyntaxException, IOException, InterruptedException {
        String restApi = "http://localhost:8080/api/v1/account/login?gmail="+gmail+"&password="+password;
        HttpRequest httpRequest = HttpRequest.newBuilder()
                .uri(new URI(restApi))
                .GET().build();
        HttpClient httpClient = HttpClient.newHttpClient();
        HttpResponse<String> send = httpClient.send(httpRequest, HttpResponse.BodyHandlers.ofString());
        Account account = null;
        try {
            account = objectMapper.readValue(send.body(), Account.class);
        } catch (Exception e){
            System.out.println(e.getMessage());
            model.addAttribute("err",true);
            return "login";
        }

        if(account==null || account.getUsers()!=null){
            model.addAttribute("err",true);
            return "login";
        }
        System.out.println(account.getGmail());

        String restApi1 = "http://localhost:8080/api/v1/article-page/publisher?id="+account.getPublisher().getId();
        httpRequest = HttpRequest.newBuilder()
                .uri(new URI(restApi1))
                .GET().build();
        httpClient = HttpClient.newHttpClient();
        send = httpClient.send(httpRequest, HttpResponse.BodyHandlers.ofString());
        List<ArticlePublisherDTO> articlePublishers = null;
        try {
            CollectionType collectionType = objectMapper.getTypeFactory().constructCollectionType(List.class, ArticlePublisherDTO.class);
            articlePublishers = objectMapper.readValue(send.body(), collectionType);
        } catch (Exception e){
            System.out.println(e.getMessage());
            model.addAttribute("err",true);
            return "login";
        }

        model.addAttribute("articlePublishers",articlePublishers);
        model.addAttribute("account",account);
        articlePublishers.forEach(System.out::println);
        return "publisher/home";
    }
}
