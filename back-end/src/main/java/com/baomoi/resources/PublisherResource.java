package com.baomoi.resources;

import com.baomoi.services.PublisherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PublisherResource {
    private final PublisherService service;

    @Autowired
    public PublisherResource(PublisherService service) {
        this.service = service;
    }


}
