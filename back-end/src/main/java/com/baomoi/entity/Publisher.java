package com.baomoi.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter @Setter @ToString
@NoArgsConstructor @AllArgsConstructor
@Entity
@Table(name = "publisher")
public class Publisher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(columnDefinition = "varchar(100)")
    private String name;

    @Column(columnDefinition = "varchar(100)")
    private String email;

    @Column(columnDefinition = "varchar(10)")
    private String phone;

    @Column(columnDefinition = "varchar(1000)")
    private String description;

    @Column(columnDefinition = "varchar(255)")
    private String imageURLBrand;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "publisher")
    private List<Article> articles;

}
