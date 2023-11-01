package com.baomoi.mapping;

import com.baomoi.dto.ArticleDTO;
import com.baomoi.dto.ArticleImageDTO;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@Component
@AllArgsConstructor
public class ArticleImageDTOMap {
    public ArticleImageDTO toPage(Object[] object){
        if(object==null)
            return new ArticleImageDTO();
        String replace = object[4].toString().replace(" ", "T");
        List<String> imageURLs = Arrays.stream(object[6].toString().split(",")).toList();

        return new ArticleImageDTO(
                UUID.fromString(object[0].toString()),
                object[1].toString(),
                object[2].toString(),
                object[3].toString(),
                LocalDateTime.parse(replace),
                object[5].toString(),
                imageURLs
        );
    }
}
