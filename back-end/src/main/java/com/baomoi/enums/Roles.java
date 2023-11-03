package com.baomoi.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor @Getter
public enum Roles {
    ADMIN(0),
    PUBLISHER(1),
    USER(2);

    private final int value;

}
