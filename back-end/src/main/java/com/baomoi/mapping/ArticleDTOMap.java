package com.baomoi.mapping;

import com.baomoi.dto.ArticleDTO;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.UUID;

@Component
@AllArgsConstructor
public class ArticleDTOMap {

    public Page<ArticleDTO> toPage(Page<Object[]> objects){
        if(objects==null)
            return new PageImpl<>(new ArrayList<>());

        return new PageImpl<>(objects.stream().map(i -> {
            String replace = i[2].toString().replace(" ", "T");
            return new ArticleDTO(
                    UUID.fromString(i[0].toString()),
                    i[1].toString(),
                    LocalDateTime.parse(replace),
                    i[3].toString(),
                    i[4].toString()
            );
        }).toList());
    }
}
