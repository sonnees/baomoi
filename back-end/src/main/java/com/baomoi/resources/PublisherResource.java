package com.baomoi.resources;

import com.baomoi.models.Publisher;
import com.baomoi.repositories.PublisherRepository;
import com.baomoi.services.PublisherService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/publisher")
@AllArgsConstructor
public class PublisherResource {
    private final PublisherService publisherService;
    private final PublisherRepository publisherRepository;

    @PostMapping("/add-list")
    public void addList(@RequestBody List<Publisher> publishers){
        publisherRepository.saveAll(publishers);
    }

}
