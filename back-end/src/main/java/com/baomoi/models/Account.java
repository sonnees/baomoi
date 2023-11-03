package com.baomoi.models;

import com.baomoi.enums.Roles;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Setter @Getter
@NoArgsConstructor @AllArgsConstructor
@Entity @Table(name = "account")
public class Account {
    @Id
    @Column(columnDefinition = "varchar(100)")
    private String gmail;
    @Column(columnDefinition = "varchar(64)")
    private String passwordHash;

    @Enumerated
    private Roles role;

    @OneToOne(cascade = CascadeType.ALL)
    private Users users = null;

    @OneToOne(cascade = CascadeType.ALL)
    private Publisher publisher = null;

    @OneToOne (cascade = CascadeType.ALL)
    private ConfigAccount configAccount;

    public Account(String gmail, String passwordHash, Roles role) {
        this.gmail = gmail;
        this.passwordHash = passwordHash;
        this.role = role;
    }

    public Account(String gmail, String passwordHash, Roles role, Users users, ConfigAccount configAccount) {
        this.gmail = gmail;
        this.passwordHash = passwordHash;
        this.role = role;
        this.users = users;
        this.configAccount = configAccount;
    }

    public Account(String gmail, String passwordHash, Roles role, Publisher publisher, ConfigAccount configAccount) {
        this.gmail = gmail;
        this.passwordHash = passwordHash;
        this.role = role;
        this.publisher = publisher;
        this.configAccount = configAccount;
    }
}
