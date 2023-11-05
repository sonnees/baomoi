package com.baomoi.repositories;

import com.baomoi.models.Article;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;
import java.util.UUID;

@RepositoryRestResource(path = "article")
public interface ArticleRepository extends JpaRepository<Article, UUID> {

    @Query(value = "select a.id, a.title, a.\"post_time\", p.imageurlbrand, ia.imageurl " +
            "from article a " +
            "left join public.publisher p on p.id = a.publisher_id " +
            "left join (select distinct(article_id) article_id, imageurl from image_article) ia on a.id = ia.article_id " +
            "where a.category= :category " +
            "order by  a.\"post_time\" desc", nativeQuery = true)
    Page<Object[]> getAllDTOByCategory(@Param("category") int category, Pageable pageable);

    @Query(value = "select a.id, a.title, a.\"post_time\", p.imageurlbrand, ia.imageurl " +
            "from article a " +
            "left join public.publisher p on p.id = a.publisher_id " +
            "left join (select distinct(article_id) article_id, imageurl from image_article) ia on a.id = ia.article_id " +
            "order by  a.\"post_time\" desc", nativeQuery = true)
    Page<Object[]> getAllDTOByCategoryNew(Pageable pageable);

    @Query(value = "select a.id, a.title, a.summary, a.content, a.\"post_time\", p.imageurlbrand, string_agg(ia.imageurl, ',') as imageurl from article a " +
            "left join public.publisher p on p.id = a.publisher_id " +
            "left join public.image_article ia on a.id = ia.article_id " +
            "where a.id = :id " +
            "group by a.id,p.imageurlbrand, a.\"post_time\" " +
            "order by a.\"post_time\" desc", nativeQuery = true)
    List<Object[]> getDetailById(UUID id);

    @Query(value = "select a.id, a.title, a.summary, a.content, a.\"post_time\",a.category, string_agg(ia.imageurl, ',') as imageurl from article a " +
            "            left join public.publisher p on p.id = a.publisher_id " +
            "            left join public.image_article ia on a.id = ia.article_id " +
            "            where a.publisher_id=:id" +
            "            group by a.id, a.\"post_time\" " +
            "            order by a.\"post_time\" desc",nativeQuery = true)
    Page<Object[]> getAllByIdPublisher(long id,Pageable pageable);
}