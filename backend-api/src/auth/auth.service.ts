import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{

    signup() {
        return {msg: 'service signed up'};
    }
    login() {
        return {msg: 'service logged in'};
}

}