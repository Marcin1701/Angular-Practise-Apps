import { Injectable } from "@angular/core";

// Serwisy komunikują komponenty

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    isLogged: boolean = false;
}