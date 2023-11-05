package com.baomoi.services;

import com.baomoi.dto.ArticleDTO;
import com.baomoi.dto.ArticleImageDTO;
import com.baomoi.mapping.ArticleDTOMap;
import com.baomoi.mapping.ArticleImageDTOMap;
import com.baomoi.mapping.CategoryMap;
import com.baomoi.models.Account;
import com.baomoi.repositories.AccountRepository;
import com.baomoi.repositories.ArticleRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;
import java.util.UUID;


@Service
@AllArgsConstructor
public class AccountService {
    private final AccountRepository accountRepository;

    public void add(Account account){
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        String encode = bCryptPasswordEncoder.encode(account.getPasswordHash());
        account.setPasswordHash(encode);
        accountRepository.save(account);
    }

    public Account checkLogin(String gmail, String password){
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        Account account = accountRepository.findAccountByGmail(gmail);
        if(account==null)
            return null;
        if(account.getPublisher()!= null)
            account.getPublisher().setArticles(new ArrayList<>());
        boolean matches = bCryptPasswordEncoder.matches(password, account.getPasswordHash());
        if(!matches)
            return null;
        return account;
    }

}
