import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppRouteEnum } from "./core/enums";
import { MainComponent } from "./layout/containers/main/main.component";


const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: AppRouteEnum.Cats,
                loadChildren: () => import('./pages/cats/cats.module').then((m) => m.CatsModule)
            },
            {
                path: '**',
                redirectTo: AppRouteEnum.Cats,
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}