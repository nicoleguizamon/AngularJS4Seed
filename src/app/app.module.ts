import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { BaseService } from './services/base-service.service';
import { UserdataService } from './services/userdata.service';
import { DownloadFileService } from './services/download-file.service';
import { AuthService } from './services/auth-service/Auth-Service';
import { LoadingModule } from "ngx-loading";
import { SpinnerService } from "./services/spinner.service";
import { LoginService } from './services/login.service';
import { UploadFileService } from './services/upload-file.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-4/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        LoadingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        })
    ],
    providers: [AuthGuard, AuthService, BaseService, UserdataService, DownloadFileService, LoginService, SpinnerService, UploadFileService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
