import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouteLinks } from '@core/enums/app-route-links.enum';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: AppRouteLinks.PERSON },
  {
    path: AppRouteLinks.PERSON,

    loadChildren: () =>
      import('./modules/person/person.module').then(m => m.PersonModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
