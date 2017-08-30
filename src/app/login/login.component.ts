import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service/Auth-Service';
import { SpinnerService } from '../services/spinner.service';
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

    constructor(public router: Router, private authenticationService: AuthService,
        private spinnerService: SpinnerService) {

    }

    ngOnInit() {
        this.authenticationService.logout();
        //this.spinnerService.toggleSidebar();
    }

    login() {
        /*localStorage.setItem('token',"TokenGenerado");
        this.router.navigate(['/home']);*/

        this.spinnerService.setTrue();
        this.authenticationService.login(this.username, this.password).subscribe(result => {
            if (result == true)
            {
                this.router.navigate(['/']);
                this.spinnerService.setFalse();
            } else {
                this.error = 'Credenciales incorrectas';
                this.spinnerService.setFalse();
            }
        });
    }
}
