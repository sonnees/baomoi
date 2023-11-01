package com.baomoi.services;

import com.baomoi.models.Account;
import com.baomoi.models.ConfigAccount;
import com.baomoi.repositories.AccountRepository;
import com.baomoi.repositories.ConfigAccountRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@AllArgsConstructor
public class ConfigAccountService {
    private final ConfigAccountRepository configAccountRepository;

    public void add(ConfigAccount configAccount){
        configAccountRepository.save(configAccount);
    }

    public ConfigAccount findConfigAccountByAccount_Id(Long id){
        return configAccountRepository.findConfigAccountByAccount_Id(id).get(0);
    }


}
