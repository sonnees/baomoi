package com.baomoi.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/v1/**")
                .allowedOrigins("http://localhost:19006")
                .allowedMethods("GET", "POST")
                .allowCredentials(true);

        registry.addMapping("/api/v1/**")
                .allowedOrigins("http://localhost:9090")
                .allowedMethods("GET", "POST")
                .allowCredentials(true);

    }
}
