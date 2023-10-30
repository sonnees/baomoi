package com.baomoi.mapping;

import org.springframework.stereotype.Component;

@Component
public class CategoryMap {
    public CategoryMap() {
    }

    public int getValueInt(String category){
        switch (category){
            case "DOCLA":
                return 1;
            case "TINHYEU":
                return 2;
            case "GIAITRI":
                return 3;
            case "THEGIOI":
                return 4;
            case "PHAPLUAT":
                return 5;
            case "GIAODUC":
                return 6;
            case "CONGNGHE":
                return 7;
            case "AMTHUC":
                return 8;
            case "SUCKHOE":
                return 9;
            case "XE":
                return 10;
            case "KINHTE":
                return 11;
            case "BONGDA":
                return 12;
        }
        return 12;
    }
}
