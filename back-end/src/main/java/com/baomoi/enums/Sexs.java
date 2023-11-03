package com.baomoi.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor @Getter
public enum Sexs {
    None(0),
    NAM(1),
    NU(2);

    private final int value;
}
