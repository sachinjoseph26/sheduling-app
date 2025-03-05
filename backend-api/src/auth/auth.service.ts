import { Injectable } from "@nestjs/common";
import { User } from "../user/entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AuthDto } from "./dto";
import * as argon from 'argon2';

@Injectable()
export class AuthService{
    constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
    ) {}

    async signup(dto: AuthDto) {

        // geberate pass hash
        const hash = await argon.hash(dto.password);
        // save user to db
        const user = await this.userRepository.create({
                    email: dto.email,
                    password: hash,

        });

        const userData = await this.userRepository.save(user)
        const {password, ...result} = userData;
        
        return {"saved user":result};
    }
    login() {
        return {msg: 'service logged in'};
}

}