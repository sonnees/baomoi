package com.baomoi.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Setter @Getter
@NoArgsConstructor
@Entity @Table(name = "account")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "full_name", columnDefinition = "varchar(100)")
    private String fullName;
    @Column(columnDefinition = "varchar(64)")
    private String passwordHash;
    @Column(columnDefinition = "varchar(100)")
    private String gmail;

    public Account(String passwordHash, String gmail) {
        this.passwordHash = passwordHash;
        this.gmail = gmail;
    }

    public Account(long id, String fullName, String passwordHash, String gmail) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        String encode = bCryptPasswordEncoder.encode(passwordHash);

        this.id = id;
        this.fullName = fullName;
        this.passwordHash = encode;
        this.gmail = gmail;
    }
}
