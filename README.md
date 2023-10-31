# BÁO MỚI - BACK END
## Tổng quan

![Gradle](https://img.shields.io/badge/Gradle-02303A.svg?style=for-the-badge&logo=Gradle&logoColor=black)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Spring Boot Badge](https://img.shields.io/badge/Spring%20Boot-6DB33F?logo=springboot&logoColor=fff&style=for-the-badge)

![ERD](/img/diagram.png)

## Mô tả
Sử dụng `spring data rest` để giao tiếp với front-end. <br>
Sử dụng `entity dto` để truyền dữ liệu tới front-end.<br>
Để đảm bảo code hoạt động tốt, tôi sử dụng `junit` để test unit các modun của chương trình. 

## REST API
### Config
- port: 8080. <br>
- base-path: `/api/v1`. <br>
- default-page-size: 5. <br>
- limit-param-name: 10. <br>
### API Endpoint
Return page latest article by category:
- `/article-page/article-category?category={name}`
- `/article-page/article-category?category={name}&page={page}`
- `/article-page/article-category?category={name}&page={page}&size={size}`

Return page latest article:
- `/article-page/article-new`
- `/article-page/article-new?page={page}`
- `/article-pagearticle-new?page={page}&size={size}`

Return article by id:
- `/article-page/article-detail?id={id}`
