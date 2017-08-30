import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SpinnerService } from "./services/spinner.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    loading:boolean=false;
    constructor(private translate: TranslateService, private spinnerService: SpinnerService) {
        translate.addLangs(['en', 'fr', 'ur', 'es']);
        translate.setDefaultLang('en');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr|ur|es/) ? browserLang : 'en');
    }

    ngOnInit() {
        this.spinnerService.loadingVisibleChange.subscribe(value => {
            this.loading = this.spinnerService.loading;
        });
      }
}
