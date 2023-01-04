# TASK MANAGER API

## Açıklama

Bu proje basit crud işlemlerini yapabilidğimiz task manager uygulamasıdır.

## Kullanım

Bu Projeyi localde çalıştırmak için öncelikle MongoDB kurmanız gerekmektedir. [MongoDB](https://www.mongodb.com/try/download/community) adresinden indirebilirsiniz.

İndirmek istemez iseniz cloud üzerinde MongoDB kullanabilirsiniz. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) adresinden ücretsiz bir hesap oluşturabilirsiniz.

NodeJS ve NPM kurulu olmalıdır. [NodeJS](https://nodejs.org/en/download/) adresinden indirebilirsiniz.


```bash
# clone this repository and into the project folder
# config the .env file
npm install
```

```bash
npm run start
```

localhost:**PORT** adresinden uygulamayı kullanabilirsiniz.

- TASK OLUŞTURMAK İÇİN VE TÜM TASKLARI GETİRMEK İÇİN

localhost:**PORT**/api/tasks adresine POST, GET isteği atmanız gerekmektedir. İsteğin body'sinde name ve description alanları bulunmalıdır.

- TEKİL TASK GETİRMEK İÇİN, TASK GÜNCELLEMK İÇİN VE SİLMEK İÇİN

localhost:**PORT**/api/tasks/**<task_id>** adresine GET, PATCH, DELETE isteği atmanız gerekmektedir.

## Router
Endpointleri yönetir

## Controllers
Endpointlere gelen isteklerin ne yapacağına karar verir

## Models
Veritabanı Modeli oluşturur 

## Middlewares
İsteklerin önünde çalışan fonksiyonlardır. Örneğin bir kullanıcının token'ı var mı yok mu kontrol eder.
Burada Error-Handler middleware'ı oluşturduk. Bu middleware'ın görevi isteklerde hata oluşursa hata mesajını başarılı bir şekilde göndermek.
