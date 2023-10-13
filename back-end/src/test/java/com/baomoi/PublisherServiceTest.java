package com.baomoi;

import com.baomoi.entity.Article;
import com.baomoi.entity.ImageArticle;
import com.baomoi.entity.Publisher;
import com.baomoi.enums.Category;
import com.baomoi.services.ArticleService;
import com.baomoi.services.ImageArticleService;
import com.baomoi.services.PublisherService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.UUID;

@SpringBootTest
class PublisherServiceTest {
    private final PublisherService publisherService;
    private final ArticleService articleService;
    private final ImageArticleService imageArticleService;

    @Autowired
    public PublisherServiceTest(PublisherService publisherService, ArticleService articleService, ImageArticleService imageArticleService) {
        this.publisherService = publisherService;
        this.articleService = articleService;
        this.imageArticleService = imageArticleService;
    }

    @Test
    void addPublisher() {
        Publisher publisher = new Publisher(
            "VietnamNet","", new ArrayList<Article>()
        );
        Assertions.assertDoesNotThrow(()->publisherService.add(publisher), "error at add publisher");

        Assertions.assertDoesNotThrow(()->{
            Article article = addArticle(publisher.getId());
            addImageArticle(article.getId());
        }, "error at add article or add imageArticle");

        Publisher publisherTemp1 = publisherService.getByID(publisher.getId()).orElse(null);
        Assertions.assertNotNull(publisherTemp1,"error at read publisher");

        publisherService.delete(publisher.getId());
        Publisher publisherTemp2 = publisherService.getByID(publisher.getId()).orElse(null);
        Assertions.assertNull(publisherTemp2, "error at delete publisher");

    }

    Article addArticle(long id) {
        Article article = new Article(
                "Tạm dừng xét xử anh em 'đại gia lan đột biến' và Châu Thị Mỹ Linh",
                LocalDateTime.of(2023, 10, 10, 10, 10, 10),
                "Theo đề nghị của các luật sư và Viện Kiểm sát, Hội đồng xét xử Tòa án Nhân dân tỉnh Thái Nguyên đã tạm dừng xét xử để triệu tập thêm người tham gia tố tụng.",
                "Ngày 13/10, sau 5 ngày xét xử, Tòa án Nhân dân tỉnh Thái Nguyên quyết định tạm dừng phiên xét xử sơ thẩm vụ khai thác trái phép hơn 3 triệu tấn than tại Mỏ than Minh Tiến (huyện Đồng Hỷ, tỉnh Thái Nguyên).\n" +
                        "\n" +
                        "Trong phần tranh luận tại tòa, đại diện Viện Kiểm sát đã đề nghị tạm ngừng phiên tòa để triệu tập thêm người tham gia tố tụng, thu thập, xác minh thêm tài liệu, chứng cứ, bảo đảm đủ cơ sở giải quyết vụ án. Hội đồng xét xử đã chấp thuận yêu cầu của đại diện Viện Kiểm sát.",
                Category.PHAPLUAT,
                new ArrayList<>(),
                publisherService.getByID(id).orElse(new Publisher())
                );

        articleService.add(article);
       return article;
    }

    void addImageArticle(UUID id) {
        ImageArticle imageArticle = new ImageArticle(
                "Các bị cáo tại phiên tòa ngày 9/10.",
                "",
                articleService.getByID(id).orElse(null)
                );

        imageArticleService.add(imageArticle);
    }

}
