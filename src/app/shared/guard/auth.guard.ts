import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../services/auth-service/Auth-Service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router) { }

    canActivate() {
        if (localStorage.getItem('token')) {
            return true;
        }

        localStorage.setItem('token', '');
        this.router.navigate(['/login']);
        return false;
    }
}
