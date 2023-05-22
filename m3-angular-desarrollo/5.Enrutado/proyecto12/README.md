# Proyecto12

 Proyecto12

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.
# Angular: Enrutado con módulos 

## Development server
ng new proyecto12 --routing --skip-git --style=css

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
ng generate module photos --routing --module app.module
ng generate component photos/photo-gallery
ng generate component photos/photo-detail
ng generate interface photos/models/photo --type=model --prefix=I
ng generate service photos/services/photo

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
ng generate module users --routing --module app.module
ng generate component users/user-list
ng generate component users/user-detail
ng generate interface users/models/user --type=model --prefix=I
ng generate service users/services/user