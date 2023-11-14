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

    public String getValueString(int category){
        return switch (category) {
            case  1-> "DOCLA";
            case 2-> "TINHYEU";
            case 3->"GIAITRI";
            case 4->"THEGIOI" ;
            case 5->"PHAPLUAT";
            case 6->"GIAODUC" ;
            case 7->"CONGNGHE";
            case 8->"AMTHUC" ;
            case 9->"SUCKHOE";
            case 10->"XE" ;
            case 11->"KINHTE" ;
            case 12->"BONGDA" ;
            default -> "";
        };
    }
}
