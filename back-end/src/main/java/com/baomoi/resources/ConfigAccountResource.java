package com.baomoi.resources;

import com.baomoi.models.Account;
import com.baomoi.models.ConfigAccount;
import com.baomoi.repositories.AccountRepository;
import com.baomoi.repositories.ConfigAccountRepository;
import com.baomoi.services.AccountService;
import com.baomoi.services.ConfigAccountService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/config-account")
@AllArgsConstructor
public class ConfigAccountResource {
    private final ConfigAccountRepository configAccountRepository;
    private final ConfigAccountService configAccountService;

    @PostMapping("/add")
    public void add(@RequestBody ConfigAccount configAccount){
        configAccountService.add(configAccount);
    }

    @GetMapping("")
    public ConfigAccount findConfigAccountByAccount_Id(
            @RequestParam("id_account") long id
    ){
        return configAccountService.findConfigAccountByAccount_Id(id);
    }

}
