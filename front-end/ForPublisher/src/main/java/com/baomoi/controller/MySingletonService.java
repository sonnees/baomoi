package com.baomoi.controller;

import com.baomoi.dto.ArticlePublisherDTO;
import com.baomoi.models.Account;
import com.baomoi.models.Publisher;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Getter @Setter
@NoArgsConstructor
public class MySingletonService {
    private Account account;
    private Publisher publisher;

    private List<List<ArticlePublisherDTO>> lists;

}
