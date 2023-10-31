package com.baomoi.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter @Getter
@NoArgsConstructor @AllArgsConstructor
@Entity @Table(name = "account")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "full-name", columnDefinition = "varchar(100)")
    private String fullName;
    @Column(columnDefinition = "varchar(64)")
    private String passwordHash;
    @Column(columnDefinition = "varchar(100)")
    private String gmail;

    public Account(String passwordHash, String gmail) {
        this.passwordHash = passwordHash;
        this.gmail = gmail;
    }
}
