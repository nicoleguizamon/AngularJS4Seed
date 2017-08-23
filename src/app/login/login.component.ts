import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service/Auth-Service';
import { routerTransition } from '../router.animations';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
    //animations: [routerTransition()]
})

export class LoginComponent implements OnInit {
    username: string='';
    password: string='';
    error: string='';
    loading: boolean = false;

    constructor(public router: Router, private authenticationService: AuthService) {

    }

    ngOnInit() {
        this.authenticationService.logout();
    }

    login() {
        localStorage.setItem('token',"TokenGenerado");
        this.router.navigate(['/dashboard']);
        /*this.loading = true;
        this.authenticationService.login(this.username, this.password).subscribe(result => { 
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
