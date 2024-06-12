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
      import('./modules/character/character.module').then(m => m.CharacterModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
