package com.baomoi.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Getter @Setter @ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "image_article")
public class ImageArticle {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(columnDefinition = "varchar(255)")
    private String title;

    @Column(columnDefinition = "varchar(255)")
    private String imageURL;

    @ManyToOne
    @JoinColumn(name = "article_id")
    private Article article;

}