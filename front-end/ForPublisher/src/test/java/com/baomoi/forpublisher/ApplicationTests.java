package com.baomoi.forpublisher;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.UUID;

@SpringBootTest
class ApplicationTests {
    @Test
    void contextLoads() {
        System.out.println(UUID.randomUUID());
    }

}
