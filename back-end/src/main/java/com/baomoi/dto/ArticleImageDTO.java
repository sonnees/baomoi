package com.baomoi.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class ArticleImageDTO {
    private UUID id;
    private String title;
    private String summary;
    private String content;
    private LocalDateTime postTime;
    private String imageURLBrand;
    private List<String> imageURLs;
}
