import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service/Auth-Service';
import { Usuario } from "../classes/usuario";
import { routerTransition } from '../router.animations';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
    //animations: [routerTransition()]
})

export class LoginComponent implements OnInit {
    model: Usuario = new Usuario();
    error: string = '';
    loading: boolean = false;

    constructor(public router: Router, private authenticationService: AuthService) {

    }

    ngOnInit() {
        this.authenticationService.logout();
    }

    login() {
         localStorage.setItem('token',"TokenGenerado");
        this.router.navigate(['/home']);
        /*this.loading = true;
        this.authenticationService.login(this.model).subscribe(result => {
            if (result == true)
            {
                this.router.navigate(['/']);
            } else {
                this.error = 'Credenciales incorrectas';
                this.loading = false;
            }
        });*/
    }
}
