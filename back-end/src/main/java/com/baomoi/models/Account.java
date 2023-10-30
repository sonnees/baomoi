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
    @Column(columnDefinition = "varchar(64)")
    private String passwordHash;
    @Column(columnDefinition = "varchar(100)")
    private String gmail;

    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "config_user_id")
    private ConfigUser configUser;

    public Account(String passwordHash, String gmail, ConfigUser configUser) {
        this.passwordHash = passwordHash;
        this.gmail = gmail;
        this.configUser = configUser;
    }
}
