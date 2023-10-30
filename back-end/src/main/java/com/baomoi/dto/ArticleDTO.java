package com.baomoi.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class ArticleDTO {
    private UUID id;
    private String title;
    private LocalDateTime postTime;
    private String imageURLBrand;
    private String imageURL;
}
