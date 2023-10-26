package com.baomoi.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter @Getter
@NoArgsConstructor @AllArgsConstructor
@Entity
@Table(name = "config_user")
public class ConfigUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private int fontSize;

    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "account_id")
    private Account account;
}
