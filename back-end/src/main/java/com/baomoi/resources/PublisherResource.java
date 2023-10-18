package com.baomoi.resources;

import com.baomoi.entity.Publisher;
import com.baomoi.repositories.PublisherRepository;
import com.baomoi.services.PublisherService;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/publisher")
public class PublisherResource {
    private final PublisherService publisherService;
    private final PublisherRepository publisherRepository;

    public PublisherResource(PublisherService publisherService, PublisherRepository publisherRepository) {
        this.publisherService = publisherService;
        this.publisherRepository = publisherRepository;
    }

    @PostMapping("/add-list")
    public void addList(@RequestBody List<Publisher> publishers){
        publisherRepository.saveAll(publishers);
    }

}
