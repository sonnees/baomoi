package com.baomoi.models;

import com.baomoi.enums.Sexs;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter @Getter
@NoArgsConstructor
@Entity
@Table(name = "users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "full_name", columnDefinition = "varchar(100)")
    private String fullName;

    @Enumerated
    private Sexs sex;

}
