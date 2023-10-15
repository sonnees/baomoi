package com.baomoi.entity;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Getter @Setter @ToString
@NoArgsConstructor @AllArgsConstructor
@Entity
@Table(name = "publisher")
public class Publisher implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(columnDefinition = "varchar(100)", nullable = false)
    private String name = "";

    @Column(columnDefinition = "varchar(255)", nullable = false)
    private String imageURLBrand = "";

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "publisher",cascade = CascadeType.REMOVE)
    @ToString.Exclude
    private List<Article> articles = new ArrayList<>();

    public Publisher(String name, String imageURLBrand, List<Article> articles) {
        this.name = name;
        this.imageURLBrand = imageURLBrand;
        this.articles = articles;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Publisher publisher = (Publisher) o;
        return id == publisher.id && Objects.equals(name, publisher.name) && Objects.equals(imageURLBrand, publisher.imageURLBrand) && Objects.equals(articles, publisher.articles);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}
