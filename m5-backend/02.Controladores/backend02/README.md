Backend con NestJS
https://docs.nestjs.com/

Instalación
Instalación global, en cualquier terminal:

npm install -g @nestjs/cli

Comandos nestjs/cli
https://docs.nestjs.com/cli/overview

nest --help

##  Creación proyecto
nest new backend01 --skip-git --package-manager npm

## Ejecutar proyecto
Navegar hacia el proyecto:

npm run start:dev

o

nest start --watch

## Crear controladores

nest generate --help

## Objetivos:

* Crear nuevos métodos en controladores
* Crear nuevos controladores
* Crear nuevos controladores @Controller
* Pruebas con Postman

## Recuperar Datos
* Métodos @Get()
* Métodos @Get() con parámetros
* Métodos @Get() con parámetro y pipe ParseIntPipe
* Devolver string
* Devolver un objeto
* Devolver un array de objetos

## Crear nuevos datos
* Método @Post()
* @Body() para recibir un objeto en método @Post()
