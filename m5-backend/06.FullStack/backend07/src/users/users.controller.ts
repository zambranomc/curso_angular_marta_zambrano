import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, Request, Put, UnauthorizedException, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.model';
import { AuthGuard } from '@nestjs/passport';
import { request } from 'http';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserRole } from './user-role.enum';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}


@UseGuards(AuthGuard('jwt'))
@Get('current')
findCurrentUser(@Request() request): Promise<User>{
    return request.user;
}

@UseGuards(AuthGuard('jwt'))
@Put()
async update(@Request() request, @Body() user: User): Promise<User>{
    //si el id de request.user.id no coincide con el user.id
    if (request.user.id !== user.id && 
        request.user.role !== UserRole.ADMIN)
        throw new UnauthorizedException('No se puede editar');

    return await this.userService.update(user);
    
    //Todo: en caso de actualizar datos que están en el token JWT será necesario
    // crear un nuevo token JWT y devolverlo para 
    //request.user.role no es admin
    //throw new UnauthorizedExceptio('Credenciales incorrectas');//401


}

//Avatar metodo se puede separar a un nuevo controlador filesController o AvatarController

@UseGuards(AuthGuard('jwt'))
@Post('avatar')
@UseInterceptors(FileInterceptor('file'))
async uploadAvatar(@Request() request, @UploadedFile() file: Express.Multer.File){
    console.log(file);
    request.user.avatarImage = file.filename;
    console.log(request.user);
    return await this. userService.updateAvatar(request.user);
}

//Guardar el nombre del archivo usando userService
//Http://localhost:3000/uploads/nombrearchivo.jpg
//Http://localhost:3000/uploads/aa82e38e-d80f-4e97-b677-84d8a010798e.jpg


}


