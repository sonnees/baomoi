package com.baomoi;

import com.baomoi.entity.Article;
import com.baomoi.entity.ImageArticle;
import com.baomoi.entity.Publisher;
import com.baomoi.enums.Category;
import com.baomoi.repositories.ArticleRepository;
import com.baomoi.repositories.ImageArticleRepository;
import com.baomoi.repositories.PublisherRepository;
import net.bytebuddy.utility.RandomString;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Random;
import java.util.UUID;

@SpringBootTest
class PublisherRepositoryTest {
    private final PublisherRepository publisherRepository;
    private final ArticleRepository articleRepository;
    private final ImageArticleRepository imageArticleRepository;

    private final String idPublisherByName = new RandomString(20).nextString();
    private final String idArticleByTitle =new RandomString(20).nextString();
    private final String idImageArticleByTitle= new RandomString(20).nextString();
    private boolean initialized = false;
    private boolean lastTested = false;

    @Autowired
    public PublisherRepositoryTest(PublisherRepository publisherRepository, ArticleRepository articleRepository, ImageArticleRepository imageArticleRepository) {
        this.publisherRepository = publisherRepository;
        this.articleRepository = articleRepository;
        this.imageArticleRepository = imageArticleRepository;
    }

    @Test
    void addPublisher() {
        if(!initialized) {
            initialized = true;

            Publisher publisher = new Publisher(
                    idPublisherByName,"", new ArrayList<>()
            );
            Assertions.assertDoesNotThrow(()->publisherRepository.save(publisher), "error at add publisher");
            Assertions.assertDoesNotThrow(()->{
                addArticle();
                addImageArticle();
            }, "error at add article or add imageArticle");
        }

    }

    void addArticle() {

        Article article = new Article(
                idArticleByTitle,
                LocalDateTime.of(2023, 10, 10, 10, 10, 10),
                "Theo đề nghị của các luật sư và Viện Kiểm sát, Hội đồng xét xử Tòa án Nhân dân tỉnh Thái Nguyên đã tạm dừng xét xử để triệu tập thêm người tham gia tố tụng.",
                "Ngày 13/10, sau 5 ngày xét xử, Tòa án Nhân dân tỉnh Thái Nguyên quyết định tạm dừng phiên xét xử sơ thẩm vụ khai thác trái phép hơn 3 triệu tấn than tại Mỏ than Minh Tiến (huyện Đồng Hỷ, tỉnh Thái Nguyên).\n" +
                        "\n" +
                        "Trong phần tranh luận tại tòa, đại diện Viện Kiểm sát đã đề nghị tạm ngừng phiên tòa để triệu tập thêm người tham gia tố tụng, thu thập, xác minh thêm tài liệu, chứng cứ, bảo đảm đủ cơ sở giải quyết vụ án. Hội đồng xét xử đã chấp thuận yêu cầu của đại diện Viện Kiểm sát.",
                Category.PHAPLUAT,
                new ArrayList<>(),
                publisherRepository.findPublisherByName(idPublisherByName).orElse(new Publisher())
                );

        articleRepository.save(article);
    }

    void addImageArticle() {
        ImageArticle imageArticle = new ImageArticle(
                idImageArticleByTitle,
                "",
                articleRepository.findArticleByTitle(idArticleByTitle).orElse(new Article())
                );

        imageArticleRepository.save(imageArticle);
    }

//    @Test
//    void readPublisher(){
//        System.out.println(idPublisher+" " + idArticle +" "+ idImageArticle);
//
//        Publisher publisher = publisherRepository.findById(idPublisher).orElse(null);
//        System.out.println(publisher);
//        Assertions.assertNotNull(publisher,"error at read publisher");
//    }
//
//    @Test
//    void readArticle(){
//        Article article = articleRepository.findById(idArticle).orElse(null);
//        Assertions.assertNotNull(article,"error at read article");
//    }
//
//    @Test
//    void readImageArticle(){
//        ImageArticle imageArticle = imageArticleRepository.findById(idImageArticle).orElse(null);
//        Assertions.assertNotNull(imageArticle,"error at read image article");
//
//        lastTested = true;
//    }


//    @After("")
//    void delete(){
//        if(lastTested){
//            publisherRepository.deleteById(idPublisher);
//            Publisher publisherTemp2 = publisherRepository.findById(idPublisher).orElse(null);
//            Assertions.assertNull(publisherTemp2, "error at delete publisher");
//
//            Article article = articleRepository.findById(idArticle).orElse(null);
//            Assertions.assertNotNull(article,"error at delete article");
//
//            ImageArticle imageArticle = imageArticleRepository.findById(idImageArticle).orElse(null);
//            Assertions.assertNotNull(imageArticle,"error at delete image article");
//        }
//    }


}
