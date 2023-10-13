package com.baomoi.services;

import com.baomoi.entity.Publisher;
import com.baomoi.repositories.PublisherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PublisherService {
    private final PublisherRepository publisherRepository;

    @Autowired
    public PublisherService(PublisherRepository publisherRepository) {
        this.publisherRepository = publisherRepository;
    }

    public boolean add(Publisher publisher) {return publisherRepository.save(publisher).equals(publisher);}
    public boolean addAll(List<Publisher> list) {return publisherRepository.saveAll(list).equals(list);}
    public List<Publisher> getAll() {return (List<Publisher>) publisherRepository.findAll();}
    public Optional<Publisher> getByID(long id) {return publisherRepository.findById(id);}
    public void delete(long id) {publisherRepository.deleteById(id);}
}
