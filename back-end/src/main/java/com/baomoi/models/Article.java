package com.baomoi.models;

import com.baomoi.enums.Category;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Entity @Table(name = "article")
public class Article implements Serializable {
    @Id
    private UUID id=UUID.randomUUID();

    @Column(columnDefinition = "varchar(200)", nullable = false)
    private String title ="";

    @Column(name = "post-time", nullable = false)
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    private LocalDateTime postTime = LocalDateTime.now();

    @Column(columnDefinition = "varchar(500)", nullable = false)
    private String summary="";

    @Column(columnDefinition = "varchar(10000)", nullable = false)
    private String content="";

    @Enumerated
    @Column(nullable = false)
    private Category category = Category.BONGDA;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "article", cascade = CascadeType.ALL)
    private List<ImageArticle> imageArticles = new ArrayList<>();

    @ManyToOne(optional = false)
    @JoinColumn(name = "publisher_id", nullable = false)
    private Publisher publisher = new Publisher();

    public Article(String title, LocalDateTime postTime, String summary, String content, Category category, List<ImageArticle> imageArticles, Publisher publisher) {
        this.title = title;
        this.postTime = postTime;
        this.summary = summary;
        this.content = content;
        this.category = category;
        this.imageArticles = imageArticles;
        this.publisher = publisher;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Article article = (Article) o;
        return Objects.equals(id, article.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}