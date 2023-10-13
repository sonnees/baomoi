package com.baomoi.entity;

import com.baomoi.enums.Category;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Getter @Setter @ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "article")
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(columnDefinition = "varchar(200)")
    private String title;

    @Column(name = "post-time")
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm")
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    private LocalDateTime postTime;

    @Column(columnDefinition = "varchar(500)")
    private String summary;

    @Column(columnDefinition = "varchar(5000)")
    private String contend;

    @Enumerated
    private Category category;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "article")
    private List<ImageArticle> imageArticles;

    @ManyToOne
    @JoinColumn(name = "publisher_id")
    private Publisher publisher;

}