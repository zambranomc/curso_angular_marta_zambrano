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