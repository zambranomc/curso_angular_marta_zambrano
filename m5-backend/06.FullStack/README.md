

# Full Stack: Frontend con Angular + Backend con NestJS y TypeORM

## Backend

nest new backend07 --skip-git --package-manager npm
cd backend07
npm install --save @nestjs/typeorm typeorm mysql2

## Frontend

ng new frontend --routing --skip-git --style=css
cd frontend
ng add @angular/material -y --theme=indigo-pink


## Autenticación

* Módulo auth:
    * ng generate module auth --routing --module auth.module
    * ng generate service auth/auth
    * ng generate component auth/login
    * ng generate component auth/register
    * Crear JwtInterceptor


* Módulo users:
    * ng generate module users --routing --module users.module
    * ng generate service users/users --type=model --prefix=I
    * ng generate component users/user
   *  ng generate component users/profile
  




Full Stack: Frontend con Angular + Backend con NestJS y TypeORM
Backend
nest new backend07 --skip-git --package-manager npm cd backend07 npm install --save @nestjs/typeorm typeorm mysql2

Frontend
ng new frontend --routing --skip-git --style=css cd frontend ng add @angular/material -y --theme=indigo-pink

TODOs
 Copiar carpeta src de backend06 en backend07
 Copiar carpeta src de proyecto1 en frontend
 enableCors en main.ts backend para poder conectar frontend
 Crear archivo db.sql en backend
 Comprobar modelos Angular y modelos NestJS
 Actualizar servicios Angular para conectar con controladores Nestjs
 Actualizar ts de componente
 Actualizar html
 Crear nuevos módulos/componentes en angular
 Autenticación: crear módulos auth en angular y nest
 Validaciones backend
 Imágenes
 Testing