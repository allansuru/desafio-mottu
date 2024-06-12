import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouteLinks } from '@core/enums/app-route-links.enum';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: AppRouteLinks.HOME },
  {
    path: AppRouteLinks.HOME,

    loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: AppRouteLinks.FAVORITE,

    loadChildren: () =>
      import('./modules/person/person.module').then(m => m.PersonModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
