import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { UsersService } from "src/users/users.service";
import { Strategy, ExtractJwt } from 'passport-jwt';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
  

    constructor(private userService: UsersService){

       // console.log("Jwt strategy en acción!");
        super({
            //extrae el token del header Authorization y verifica si es correcto
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.NEST_JWT_SECRET
        })
    }

    async validate(payload: any){
       // console.log("Validate JWTStrategy");
       // console.log(payload);

        let user = await this.userService.findById(payload.sub);

        if(!user)
            throw new UnauthorizedException('Autenticación incorrecta');//401

        //quitar el password por seguridad
        let{password, ...userInfo} =user;
        return userInfo;


    }

}