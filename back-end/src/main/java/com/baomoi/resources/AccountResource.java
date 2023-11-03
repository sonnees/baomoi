package com.baomoi.resources;

import com.baomoi.dto.ArticleDTO;
import com.baomoi.dto.ArticleImageDTO;
import com.baomoi.models.Account;
import com.baomoi.models.Article;
import com.baomoi.repositories.AccountRepository;
import com.baomoi.repositories.ArticleRepository;
import com.baomoi.services.AccountService;
import com.baomoi.services.ArticleService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/account")
@AllArgsConstructor
public class AccountResource {
    private final AccountRepository accountRepository;
    private final AccountService accountService;

    @PostMapping("/add")
    public void add(@RequestBody Account account){
        accountService.add(account);
    }
    @PostMapping("/add-list")
    public void add(@RequestBody List<Account> list){
        accountRepository.saveAll(list);
    }

    @GetMapping("/login")
    public Account checkLogin(
            @RequestParam("gmail") String gmail,
            @RequestParam("password") String password
    ){
        return accountService.checkLogin(gmail,password);
    }

}
