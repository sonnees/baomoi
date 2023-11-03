package com.baomoi.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@Getter @Setter
@Entity
@Table(name = "config_account")
public class ConfigAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "font_size")
    private int fontSize;

    public ConfigAccount() {
        this.fontSize = 16;
    }
}
