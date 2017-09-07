import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserdataService } from '../../../services/userdata.service';
import { UserCustom } from '../../../interfaces/user-custom';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    userCustom:UserCustom;

    constructor(private translate: TranslateService, public router: Router
                    , private userdataService: UserdataService) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992) {
                this.toggleSidebar();
            }
        });

        this.userCustom = {} as UserCustom;
    }

    ngOnInit() {
        this.userdataService.getHeaderInfo().subscribe((post)=> {
            this.userCustom = {
                fullname: post.fullname,
                buildings: post.buildings
            }
            console.log(this.userCustom);
        });

        if(this.userCustom.buildings != null && this.userCustom.buildings.length > 0)
        {
            alert(this.userCustom.buildings[0].id);
            localStorage.setItem("committeeId", this.userCustom.buildings[0].id);
        }
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('token');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
