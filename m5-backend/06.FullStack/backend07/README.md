Nest + TypeORM con asociaciones entre entidades
nest new backend06 --skip-git --package-manager npm

# cd backend07

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


Asociaciones:
* ManyToOne Book - Author
* ManyToOne Book - Editorial
* OneToOne Author - Location
* ManyToMany Book - Category
* ManyToOne Reserva - User
* ManyToOne Reserva - Book


# Autenticación

npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt

nest generate module auth

nest generate service auth

nest generate controller auth


## Hacer Login (genera token)
1. AuthService
    * register
    * login: si todo ok se firma con una clave secreta
    * validateUserFromPayload
nest generate service auth
2. AuthModule:
    * ajustar imports: UsersModule, PassportModule, JwtModule
    * ajustar providers: AuthService, JwtStrategy

3. JwtStrategy extends PassportStrategy
    * utiliza la clave secreta para comprobar el token

4. JwtAuthGuard extends AuthGuard

5. @JwtAuthGuard en los métodos de los controladores
    * Explorar activar seguridad global

6. DTOs: Data Transfer Objects 


# Autenticación
npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt
nest generate module auth
nest generate service auth

nest generate controller auth


Login (genera token): 
1. AuthService
    * register
    * login: si todo ok se firma con una clave secreta
    * validateUserFromPayload

2. AuthModule:
    * ajustar imports: UsersModule, PassportModule, JwtModule
    * ajustar providers: AuthService, JwtStrategy

3. JwtStrategy extends PassportStrategy


# Autenticación
npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt
nest generate module auth
nest generate service auth
nest generate controller auth
## Login (genera token): 
1. AuthService
    * login: si todo ok se firma con una clave secreta
2. AuthModule:
    * ajustar imports: UsersModule, PassportModule, JwtModule
    * ajustar providers: AuthService, JwtStrategy
3. AuthController:
    * login que recibe un LoginDTO por @Body() por @Post
4. Abrir Workbench y añadir un usuario en la tabla user si no lo hay.
5. Abrir postman y enviar por POST a http://localhost:3000/auth/login
{
    "email": "user1@gmail.com",
    "password": "1234"
}
Ejemplo de respuesta que tiene que devolver: 
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQGdtYWlsLmNvbSIsInN1YiI6MSwicm9sZSI6InVzZXIiLCJpYXQiOjE2ODg0NTczNzYsImV4cCI6MTY4OTA2MjE3Nn0.OulRne6T5V0cQTQhVKqrVEYjnY-ArgMnSSc71bvYp44"
}
Añadir el token en jwt.io y ver que descodifica la información que tiene dentro.

## Verificar tokens en las sucesivas peticiones



1. Crear archivo jwt.strategy.ts en el módulo auth

2. Crear dentro la clase JwtStrategy
    * extends PassportStrategy(Strategy) 
    * constructor con llamada a super()
    * método validate(payload)

3. Añadir la clase JwtStrategy en providers del módulo auth

4. AuthController crear métodos:
    * hola1 sin seguridad
    * hola2 con seguridad: @UseGuards(AuthGuard('jwt'))
    * getProfile que extrae el user de la @Request
    * A partir de ahora podemos extraer el user de la @Request


Desde Postman:

2. Enviar el token desde Postman en una petición a un controlador cualquiera:
5. Enviar el token desde Postman en una petición a un controlador cualquiera como por ejemplo auth/hello2:

Authorization > Bearer Token > Pegar el token

Comprobar:

* auth/hola1 es público y no tiene seguridad, no necesita token

* auth/hola2 es seguro y necesita token

* auth/profile es seguro y necesita token, devuelve el usuario, sin la contraseña.


## Registro 

* AuthController
    register que recibe un User

* AuthService
    * register que crea el usuario y llama al login para devolver el token
    * Suele ser habitual agregar pasos extras al registro
        Enviar un sms
        Enviar un email


Autenticación
npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt

nest generate module auth

nest generate service auth

nest generate controller auth

Login (genera token):
AuthService

login: si todo ok se firma con una clave secreta
AuthModule:

ajustar imports: UsersModule, PassportModule, JwtModule
ajustar providers: AuthService, JwtStrategy
AuthController:

login que recibe un LoginDTO por @Body() por @Post
Abrir Workbench y añadir un usuario en la tabla user si no lo hay.

Abrir postman y enviar por POST a http://localhost:3000/auth/login

{ "email": "user1@gmail.com", "password": "1234" }

Ejemplo de respuesta que tiene que devolver:

{ "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQGdtYWlsLmNvbSIsInN1YiI6MSwicm9sZSI6InVzZXIiLCJpYXQiOjE2ODg0NTczNzYsImV4cCI6MTY4OTA2MjE3Nn0.OulRne6T5V0cQTQhVKqrVEYjnY-ArgMnSSc71bvYp44" }

Añadir el token en jwt.io y ver que descodifica la información que tiene dentro.

Verificar tokens en las sucesivas peticiones
Crear archivo jwt.strategy.ts en el módulo auth

Crear dentro la clase JwtStrategy

extends PassportStrategy(Strategy)
constructor con llamada a super()
método validate(payload)
Añadir la clase JwtStrategy en providers del módulo auth

AuthController crear métodos:

hola1 sin seguridad
hola2 con seguridad: @UseGuards(AuthGuard('jwt'))
getProfile que extrae el user de la @Request
A partir de ahora podemos extraer el user de la @Request
Desde Postman:

Enviar el token desde Postman en una petición a un controlador cualquiera como por ejemplo auth/hello2:
Authorization > Bearer Token > Pegar el token

Comprobar:

auth/hola1 es público y no tiene seguridad, no necesita token

auth/hola2 es seguro y necesita token

auth/profile es seguro y necesita token, devuelve el usuario, sin la contraseña.

Registro
AuthController

register que recibe un User
AuthService

register que crea el usuario y llama a login para devolver el token
Suele ser habitual agregar pasos extra en el registro como:
Enviar un SMS
Enviar un Email
Validar IP
Validar user agent
UserService

create que guarda un usuario en base de datos, lanza excepción si los datos ya están ocupados.
Cifrado contraseña
bcrypt: https://github.com/kelektiv/node.bcrypt.js#readme

En el registro hay que cifrar la contraseña antes de guardarla en base datos

En el login hay que comprobar la contraseña cifrada

Generar clave secreta segura
En el archivo secret-gen.js a nivel proyecto tenemos el código que genera claves.

Ejemplo:

8fed7b16f3e25645764e872dd64097052f4d4c6787e3d2aa0e760a51e606571a

Añadir la clave como variable de entorno y utilizarla en el backend.

process.env.NEST_JWT_SECRET

## VARIABLE DE ENTORNO PARA CLAVE SECRETA
Variable de entorno para la clave secreta
Agregar la variable de entorno NEST_JWT_SECRET.


## Subida de imagenes
Frontend:
ng generate component users/avatar

avatar.component.ts:

* onFileSelected()
* save()
*

avatar.component.html
* input type="file"
* Botón guardar con método save()

users routing module
* agregar ruta path



BACKEND:
* npm install -D @types/multer

* nest generate controller users/avatar
avatar.controller.ts

* otra opcion más facil es ponerlo en users.controller.ts
colocar un @Post con useInterceptors

* users.module.ts en el imports colocar
@Module({
  imports: [  
    MulterModule.register({
    storage: diskStorage({
      //Carpeta destino donde se guardaran los archivos interceptados en los controladores
      destination:'./uploads',
      // Definir como se genera el nombre del archivo antes de guardarlo en la carpeta uploads
      filename:(req,  file, callback)=>{
        let fileName = uuidv4() + extname(file.originalname)
        callback(null, fileName);
      }
    })
  }),

  * lleva el archivo a  carpeta uploads generando un nombre unico

* user.model.ts añadir un campo avatarImage

* En uploadAvatar() llamar a userService.updateAvatar() y guardar en el avatar en un atributo del usuario

* main.ts y añadir una línea de codigo para que el backend pueda servir imagenes al frontend






## OpenAPI

npm install @nestjs/swagger

En main.ts:

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  