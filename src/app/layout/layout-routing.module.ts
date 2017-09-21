import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, NavigationStart } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { JwtHelper } from 'angular2-jwt';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'news', loadChildren: './news/news.module#NewsModule' },
            { path: 'expenses', loadChildren: './expenses/expenses.module#ExpensesModule' },
            { path: 'complaints', loadChildren: './complaints/complaints.module#ComplaintsModule' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {
    jwtHelper: JwtHelper = new JwtHelper();

    constructor(router:Router) {
        router.events.subscribe(event => {
            if(event instanceof NavigationStart) {
                var token = localStorage.getItem('token');
                if (this.jwtHelper.isTokenExpired(token)) {
                    //alert('Token expired');
                }
            }
            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
        });
    }
}
