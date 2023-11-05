package com.baomoi.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor @Getter
public enum Category {
    MOI(0),
    DOCLA(1),
    TINHYEU(2),
    GIAITRI(3),
    THEGIOI(4),
    PHAPLUAT(5),
    GIAODUC(6),
    CONGNGHE(7),
    AMTHUC(8),
    SUCKHOE(9),
    XE(10),
    KINHTE(11),
    BONGDA(12);

    private int value;

}
