Nest + TypeORM con asociaciones entre entidades
nest new backend06 --skip-git --package-manager npm

cd backend06

npm install --save @nestjs/typeorm typeorm mysql2

Módulo Books:

nest generate module books
nest generate controller books
nest generate service books
Crear books.model.ts o books.entity.ts
Módulo Database:

nest generate module database
## Módulo Authors:

nest generate module authors
nest generate controller authors
nest generate service authors
Crear authors.model.ts o authors.entity.ts

## Módulo editorials:

nest generate module editorials
nest generate controller editorials
nest generate service editorials
Crear editorials.model.ts o editorials.entity.ts

## Módulo locations:

nest generate module locations
nest generate controller locations
nest generate service locations
Crear locations.model.ts o locations.entity.ts


## Módulo categories:

nest generate module categories
nest generate controller categories
nest generate service categories
Crear categories.model.ts o locations.entity.ts

## Módulo Usuarios:

nest generate module users
nest generate controller users
nest generate service users
Crear users.model.ts o locations.entity.ts
Modelo users y rol

## Módulo Reservas:

nest generate module bookings
nest generate controller bookings
nest generate service bookings
Crear users.model.ts o locations.entity.ts
Modelo reserva

## ASOCIACIONES
* ManyToOne Book - Author
* ManyToOne Book - Editorial
* OneToOne Author - Location
* ManyToMany Book- Category

## Ejemplo One to Many
OneToMany - Author books[]

Asociaciones:
* ManyToOne Book - Author
* ManyToOne Book - Editorial
* OneToOne Author - Location
* ManyToMany Book - Category
* ManyToOne Reserva - User
* ManyToOne Reserva - Book
TODOs obligatorios:
* Enlazar NestJS con Angular
* Ajustar CRUD Angular para enviar información a NestJS
* Seguridad: login, registro
TODOs opcionales:
* Crear array de imágenes para libro
* Activar swagger
* Mockaroo db.sql
* Inserción automática de scripts de sql
Ejemplo One To Many: (Preferible usar ManyToOne en su lugar para guardar la asociación)
* OneToMany - Author books[]
* ManyToOne - Book 
* findAllByAuthorId


Nest + TypeORM con asociaciones entre entidades
nest new backend06 --skip-git --package-manager npm

cd backend06

npm install --save @nestjs/typeorm typeorm mysql2

Módulo Books:

nest generate module books
nest generate controller books
nest generate service books
Crear books.model.ts o books.entity.ts
Módulo Database:

nest generate module database
Módulo Authors:

nest generate module authors
nest generate controller authors
nest generate service authors
Crear authors.model.ts o authors.entity.ts
Módulo Editorial:

nest generate module editorials
nest generate controller editorials
nest generate service editorials
Crear editorials.model.ts o editorials.entity.ts
Módulo locations:

nest generate module locations
nest generate controller locations
nest generate service locations
Crear locations.model.ts o locations.entity.ts
Módulo categories:

nest generate module categories
nest generate controller categories
nest generate service categories
Crear categories.model.ts o locations.entity.ts
Módulo Users:

nest generate module users
nest generate controller users
nest generate service users
Modelo User y Rol
Módulo Reserva:

nest generate module bookings
nest generate controller bookings
nest generate service bookings
Modelo reserva
Asociaciones:

ManyToOne Book - Author
ManyToOne Book - Editorial
OneToOne Author - Location
ManyToMany Book - Category
ManyToOne Reserva - User
ManyToOne Reserva - Book
TODOs obligatorios:

Enlazar NestJS con Angular
Ajustar CRUD Angular para enviar información a NestJS
Seguridad: login, registro
TODOs opcionales:

Crear array de imágenes para libro
Activar swagger
Mockaroo db.sql
Inserción automática de scripts de sql
Subida de archivos
Ejemplo One To Many: (Preferible usar ManyToOne en su lugar para guardar la asociación)

OneToMany - Author books[]
ManyToOne - Book
findAllByAuthorId