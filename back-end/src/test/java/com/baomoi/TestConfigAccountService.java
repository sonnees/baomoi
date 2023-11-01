package com.baomoi;

import com.baomoi.models.Account;
import com.baomoi.models.ConfigAccount;
import com.baomoi.repositories.AccountRepository;
import com.baomoi.repositories.ConfigAccountRepository;
import com.baomoi.services.AccountService;
import com.baomoi.services.ConfigAccountService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootTest
public class TestConfigAccountService {
    @Autowired
    ConfigAccountService configAccountService;
    @Autowired
    ConfigAccountRepository configAccountRepository;
    @Autowired
    AccountRepository accountRepository;
    @Autowired
    AccountService accountService;

    @Test
    void findConfigAccountByAccount_Id(){

        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        String encode = bCryptPasswordEncoder.encode("321");
        Account temp = new Account(encode, "2@gmail.com");
        accountRepository.save(temp);
        Account account = accountRepository.findByGmail("2@gmail.com").get(0);

        configAccountService.add(
                new ConfigAccount(
                        1,20,account
                )
        );
        ConfigAccount configAccountByAccountId = configAccountService.findConfigAccountByAccount_Id(account.getId());
        Assertions.assertNotNull(configAccountByAccountId);

        configAccountRepository.delete(configAccountByAccountId);
        accountRepository.delete(account);
    }
}
