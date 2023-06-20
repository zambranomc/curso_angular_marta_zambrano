import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { get } from 'http';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello4')
  getHello2(): number {
    return 100;
  }

  // http://localhost:3000/hello5
  @Get('hello5')
  getHello5(): any {
    return {
      id: 1,
      fullname: 'hola',
      age: 25,
    };
  }

    @Get('hello6')
    getHello6(): any {
      return [{
        id: 1,
        fullname: 'hola',
        age: 25,
      },
      {
        id: 2,
        fullname: 'hola2',
        age: 25,
      },

    ];
    }
  //Método para traer un url
  // http://localhost:3000/hello/1
  // http://localhost:3000/hello/2
    @Get('hello/:id')
    getHelloById(@Param('id') id: string): any {
      console.log(id);
      return{
        id: id,
        fullName: 'hello',
      }
    }

  //Método para traer una url con dos parámetro
  //http://localhost:3000/first-name/Marta/last-name/Cruz
    @Get('first-name/:firstName/last-name/lastName')
    getFullName(@Param('firstName') firstName: string, @Param('lastName') lastName: string ): any {
      console.log(firstName);
      console.log(lastName);
      return{
        fullName: `${firstName} ${lastName}`,
      }
    }

    //url con multiples parámetros accedidos en forma de objeto
    //http://localhost:3000/hello-param/1/2
    @Get('hello-param/:id1/:id2')
    getHelloParam(@Param() params:any): void{
      console.log(params.id1);
      console.log(params.id2);
    }

}



