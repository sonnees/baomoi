package com.baomoi;

import com.baomoi.models.Account;
import com.baomoi.repositories.AccountRepository;
import com.baomoi.services.AccountService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootTest
public class TestAccountService {
    @Autowired
    AccountService accountService;

    @Autowired
    AccountRepository accountRepository;

    @Test
    void checkLogin(){
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        String encode = bCryptPasswordEncoder.encode("321");
        Account temp = new Account(encode, "2@gmail.com");
        accountRepository.save(temp);

        Account account = accountService.checkLogin("2@gmail.com", "321");

        Assertions.assertNotNull(account);

        accountRepository.delete(accountRepository.findByGmail("2@gmail.com").get(0));
    }
}
