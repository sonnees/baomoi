package com.baomoi;

import com.baomoi.models.Article;
import com.baomoi.models.ImageArticle;
import com.baomoi.models.Publisher;
import com.baomoi.enums.Category;
import com.baomoi.repositories.ArticleRepository;
import com.baomoi.repositories.ImageArticleRepository;
import com.baomoi.repositories.PublisherRepository;
import net.bytebuddy.utility.RandomString;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.UUID;

@SpringBootTest
class TestPublisherRepository {
    private final PublisherRepository publisherRepository;
    private final ArticleRepository articleRepository;
    private final ImageArticleRepository imageArticleRepository;

    private final String idPublisherByName = new RandomString(20).nextString();
    private final UUID idArticle = UUID.randomUUID();
    private final UUID idImageArticle= UUID.randomUUID();

    @Autowired
    public TestPublisherRepository(PublisherRepository publisherRepository, ArticleRepository articleRepository, ImageArticleRepository imageArticleRepository) {
        this.publisherRepository = publisherRepository;
        this.articleRepository = articleRepository;
        this.imageArticleRepository = imageArticleRepository;
    }

    @BeforeEach
    void addPublisher() {
            Publisher publisher = new Publisher(
                    idPublisherByName,"", new ArrayList<>()
            );
            Assertions.assertDoesNotThrow(()->publisherRepository.save(publisher), "error at add publisher");
            Assertions.assertDoesNotThrow(()->{
                addArticle();
                addImageArticle();
            }, "error at add article or add imageArticle");
    }

    @AfterEach
    void delete(){
            publisherRepository.delete(publisherRepository.findPublisherByName(idPublisherByName).orElse(new Publisher()));
            Publisher publisherTemp2 = publisherRepository.findPublisherByName(idPublisherByName).orElse(null);
            Assertions.assertNull(publisherTemp2, "error at delete publisher");

            Article article = articleRepository.findById(idArticle).orElse(null);
            Assertions.assertNull(article,"error at delete article");

            ImageArticle imageArticle = imageArticleRepository.findById(idImageArticle).orElse(null);
            Assertions.assertNull(imageArticle,"error at delete image article");
    }

    void addArticle() {
        Article article = new Article(
                idArticle,
                new RandomString(10).toString(),
                LocalDateTime.of(2023, 10, 10, 10, 10, 10),
                "Theo đề  của các  sư và Viện  sát",
                " 13/10, sau 5  xét xử, Tòa án Nhân dỷ",
                Category.PHAPLUAT,
                new ArrayList<>(),
                publisherRepository.findPublisherByName(idPublisherByName).orElse(new Publisher())
                );
        articleRepository.save(article);
    }

    void addImageArticle() {
        ImageArticle imageArticle = new ImageArticle(
                idImageArticle,
                new RandomString(10).toString(),
                "",
                articleRepository.findById(idArticle).orElse(new Article())
                );
        imageArticleRepository.save(imageArticle);
    }

    @Test()
    void readPublisher(){
        Publisher publisher = publisherRepository.findPublisherByName(idPublisherByName).orElse(null);
        Assertions.assertNotNull(publisher,"error at read publisher");
        readArticle();
        readImageArticle();


    }

    void readArticle(){
        Article article = articleRepository.findById(idArticle).orElse(null);
        Assertions.assertNotNull(article,"error at read article");
    }

    void readImageArticle(){
        ImageArticle imageArticle = imageArticleRepository.findById(idImageArticle).orElse(null);
        Assertions.assertNotNull(imageArticle,"error at read image article");
    }

}
