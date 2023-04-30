1. ¿Cuál es el propósito de un constructor en TypeScript?

Crear una función dentro de la clase
Definir un atributo de la clase (verdadero)
Definir una interfaz
Inicializar un objeto creado a partir de una clase

2. ¿Qué es una interfaz en TypeScript?

Un método de una clase
Una función de utilidad
Un contrato que define la estructura de una entidad (verdadero)
Una clase abstracta

3. ¿Qué modificador de acceso hace que un atributo sea accesible solo dentro de la misma clase en TypeScript?

public
private (verdadero)
protected
readonly

4. ¿Cómo se implementa una interfaz en una clase de TypeScript?

class MyClass extends MyInterface {}
class MyClass implements MyInterface {} (verdadero)
class MyClass inherits MyInterface {}
class MyClass has MyInterface {}

5. Dada la siguiente clase:
 class Person {
    constructor(public name: string, private age: number) {}
}
¿Cuál de las siguientes afirmaciones es verdadera?

name y age son accesibles desde cualquier instancia de Person fuera de la clase
Solo name es accesible desde cualquier instancia de Person fuera de la clase (verdadero)
Solo age es accesible desde cualquier instancia de Person fuera de la clase
Ninguno de los atributos es accesible desde cualquier instancia de Person fuera de la clase

6. ¿Cuál de las siguientes opciones es una forma válida de definir un atributo en una clase de TypeScript?

var name: string;
let name: string;
name: string; (verdadero)
const name: string;

7. ¿Cuál de las siguientes opciones es una forma válida de llamar a un método de una instancia de una clase en TypeScript?

MyClass.myMethod();
MyClass->myMethod();
myInstance.myMethod();(verdadero)
myInstance::myMethod();

8. ¿Qué sucede si no se proporciona un modificador de acceso en un atributo de una clase en TypeScript?

El atributo es privado
El atributo es protegido
El atributo es público (verdadero)
El atributo es de solo lectura

9. ¿Cuál de las siguientes opciones es una forma válida de indicar que una clase deriva de otra en TypeScript?

class DerivedClass inherits BaseClass {}
class DerivedClass has BaseClass {}
class DerivedClass extends BaseClass {} (verdadero)
class DerivedClass implements BaseClass {}

10. Si se define una función con un parámetro opcional en TypeScript y no se proporciona un valor para ese parámetro al llamar a la función, ¿qué valor tomará el parámetro?

0
-1
undefined (verdadero)
null