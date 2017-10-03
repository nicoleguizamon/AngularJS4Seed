import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserdataService } from '../../../services/userdata.service';
import { UserCustom } from '../../../interfaces/user-custom';
import { Building } from '../../../interfaces/building';
import { AuthService } from '../../../services/auth-service/Auth-Service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    userCustom:UserCustom;
    buildingOptions: Building[];

    // ************************************ POPUP BUILDINGS *************************************
    displayBuildings: boolean = false;
    buildingSelectedId: string;
    buildingName:string;
    selectedValue:string;

    constructor(private translate: TranslateService, public router: Router,
                private userdataService: UserdataService, private auth: AuthService) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992) {
                this.toggleSidebar();
            }
        });

        this.userCustom = {} as UserCustom;
        this.buildingOptions =[] as Building[];
    }

    ngOnInit() {
        this.userdataService.getHeaderInfo().subscribe((post)=> {
            this.userCustom = {
                fullname: post.fullname,
                buildings: post.buildings
            }
            this.buildingOptions = post.buildings.slice(0);


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

    //Logout when close the browser
    @HostListener('window:beforeunload', ['$event'])
    beforeunloadHandler(event) {
        this.auth.logout();
    }
    @HostListener('window:unload', ['$event'])
    unloadHandler(event) {
        this.auth.logout();
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
        if(this.router.url == "/home") {
            this.userdataService.getBuildingNews();
            //TODO:If your navigate() doesn't change the URL that already shown on the address bar of
            //your browser, the router has nothing to do. It's not the router's job to refresh the data.
            //If you want to refresh the data, create a service injected into the component and invoke
            //the load function on the service. If the new data will be retrieved,
            //it'll update the view via bindings.
        } else {
            this.router.navigate(['/home']);
        }
    }
}
