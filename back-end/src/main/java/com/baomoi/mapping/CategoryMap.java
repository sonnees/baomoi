package com.baomoi.mapping;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class CategoryMap {
    public int getValueInt(String category){
        return switch (category) {
            case "DOCLA" -> 1;
            case "TINHYEU" -> 2;
            case "GIAITRI" -> 3;
            case "THEGIOI" -> 4;
            case "PHAPLUAT" -> 5;
            case "GIAODUC" -> 6;
            case "CONGNGHE" -> 7;
            case "AMTHUC" -> 8;
            case "SUCKHOE" -> 9;
            case "XE" -> 10;
            case "KINHTE" -> 11;
            case "BONGDA" -> 12;
            default -> 13;
        };
    }
}
