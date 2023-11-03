package com.baomoi;

import com.baomoi.enums.Roles;
import com.baomoi.models.Account;
import com.baomoi.models.ConfigAccount;
import com.baomoi.models.Publisher;
import com.baomoi.models.Users;
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


        Account temp = new Account(
                "2@gmail.com",
                encode,
                Roles.USER,
                new Users(), new ConfigAccount());
        accountRepository.save(temp);

        Account account = accountService.checkLogin("2@gmail.com", "321");

        Assertions.assertNotNull(account);

        Assertions.assertEquals(Roles.USER,account.getRole());

        accountRepository.delete(accountRepository.findAccountByGmail("2@gmail.com"));
    }
}
