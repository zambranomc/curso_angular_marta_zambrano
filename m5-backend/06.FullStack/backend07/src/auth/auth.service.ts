import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginDTO } from './dto/login.dto';
import { TokenDTO } from './dto/token.dto';
import { User } from 'src/users/users.model';
import * as bcrypt from 'bcrypt';



@Injectable()
export class AuthService {
    
    constructor (
        private userService: UsersService,
        private jwtService: JwtService
        ){}


    async login(login: LoginDTO): Promise<TokenDTO>{
        
        let user = await this.userService.findByEmail(login.email);

        if(!user)
            throw new UnauthorizedException ('Credencial incorrecta');// 401

        if(! bcrypt.compareSync(login.password, user.password))
         throw new UnauthorizedException ('Credencial incorrecta');// 401


         let payload = {
            email: user.email,
            sub: user.id,
            role: user.role
         }

         let token: TokenDTO = {
            
           token: await this.jwtService.signAsync(payload)
        }

         return token;
         
    }


    async register(user: User): Promise<TokenDTO>{

        let LoginDTO: LoginDTO = {
            email: user.email,
            password: user.password// contraseña original
        }
        //Cifrar contraseña bcrypt
        user.password = bcrypt.hashSync(user.password,10);// Contraseña cifrada
        await this.userService.create(user);

       
        return await this.login(LoginDTO);
    }

}
