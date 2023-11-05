package com.baomoi.mapping;

import com.baomoi.dto.ArticleDTO;
import com.baomoi.dto.ArticleImageDTO;
import com.baomoi.dto.ArticlePublisherDTO;
import com.baomoi.enums.Category;
import lombok.AllArgsConstructor;
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
public class ArticlePublisherDTOMap {
    CategoryMap categoryMap;
    public List<ArticlePublisherDTO> toPage(Page<Object[]> objects){

        if(objects==null)
            return new ArrayList<>();

        return new ArrayList<>(objects.stream().map(i -> {
            String replace = i[4].toString().replace(" ", "T");
            return new ArticlePublisherDTO(
                    UUID.fromString(i[0].toString()),
                    i[1].toString(),
                    i[2].toString(),
                    i[3].toString(),
                    LocalDateTime.parse(replace),
                    Category.valueOf(categoryMap.getValueString(Integer.parseInt(i[5].toString()))),
                    i[6].toString()
            );
        }).toList());
    }
}
