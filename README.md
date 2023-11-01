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
- [GET] Return account by gmail and password (account not exist return null): <br>
  `/account/login?gmail={gmail}&password={password}`

- [GET] Return config account by id account (config account not exist return null): <br>
  `/config-account?id_account={id_account}`

- [POST | body-json] Update config account: <br>
  `/config-account/add`

- [GET] Return page latest article by category: <br>
  `/article-page/article-category?category={name}` <br>
  `/article-page/article-category?category={name}&page={page}` <br>
  `/article-page/article-category?category={name}&page={page}&size={size}` <br>

- [GET] Return page latest article: <br>
  `/article-page/article-new` <br>
  `/article-page/article-new?page={page}` <br>
  `/article-pagearticle-new?page={page}&size={size}` <br>

- [GET] Return article by id: <br>
  `/article-page/article-detail?id={id}`
