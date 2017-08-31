import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service/Auth-Service';
import { routerTransition } from '../router.animations';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { SpinnerService } from "../services/spinner.service";
import { Login } from "../interfaces/login";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
    //animations: [routerTransition()]
})

export class LoginComponent implements OnInit {
    urlclientImage: string;
    clientname: string;
    error: string;
    loginModel: Login;

    constructor(public router: Router, private authenticationService: AuthService, 
                    private loginService: LoginService, private spinnerService: SpinnerService) {
        this.loginModel= {} as Login;
    }

    ngOnInit() {
        this.authenticationService.logout();
        this.loginService.getCompanyInfo().subscribe((post)=> {
            this.urlclientImage = post.contacto;
            this.clientname =post.administracion;
        });
    }

    onSubmit() {
        this.spinnerService.setTrue();
        this.authenticationService.login(this.loginModel.username, this.loginModel.password).subscribe(result => { 
            if (result == true)
            {
                this.router.navigate(['/']);
            } else {
                this.error = 'Credenciales incorrectas';
            }
            this.spinnerService.setFalse();
        });
    }
}
