package com.baomoi.resources;

import com.baomoi.models.Account;
import com.baomoi.models.ConfigAccount;
import com.baomoi.repositories.AccountRepository;
import com.baomoi.repositories.ConfigAccountRepository;
import com.baomoi.services.AccountService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/config-account")
@AllArgsConstructor
public class ConfigAccountResource {
    private final ConfigAccountRepository configAccountRepository;

    @PostMapping("/add")
    public void add(@RequestBody ConfigAccount configAccount){
        configAccountRepository.save(configAccount);
    }

}
