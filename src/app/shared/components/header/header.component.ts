import { Component, OnInit, Input } from '@angular/core';
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
    // ************************************ POPUP BUILDINGS *************************************
    displayBuildings: boolean = false;
    buildingSelectedId: string;
    buildingName:string;

    constructor(private translate: TranslateService, public router: Router,
                private userdataService: UserdataService) {
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
            if(post.buildings != null && post.buildings.length > 0)
            {
                localStorage.setItem("committeeId", this.userCustom.buildings[0].id);
                this.buildingName = this.userCustom.buildings[0].name;
            }
        });
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

    // ************************************ POPUP BUILDINGS *************************************
    showDialogBuildings() {
        this.buildingSelectedId = localStorage.getItem("committeeId");
        this.displayBuildings = true;
    }

    selectBuilding() {
        localStorage.setItem("committeeId", this.buildingSelectedId);
        this.displayBuildings = false;
        this.buildingName = this.userCustom.buildings.find(x => x.id == this.buildingSelectedId).name;
    }
}
