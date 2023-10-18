package com.baomoi.entity;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.Objects;
import java.util.UUID;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "image_article")
public class ImageArticle implements Serializable {
    @Id
    private UUID id = UUID.randomUUID();

    @Column(columnDefinition = "varchar(255)",nullable = false)
    private String title;

    @Column(columnDefinition = "varchar(255)",nullable = false)
    private String imageURL;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "article_id")
    private Article article;

    public ImageArticle(String title, String imageURL, Article article) {
        this.title = title;
        this.imageURL = imageURL;
        this.article = article;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ImageArticle that = (ImageArticle) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "ImageArticle{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", imageURL='" + imageURL + '\'' +
//                ", article=" + article +
                '}';
    }
}