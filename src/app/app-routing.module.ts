import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

const routes: Routes = [
  /* {
    path: '',
    component: HomePageComponent,
  }, */
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'countries',
    loadChildren: () =>
      import('./countries/countries.module').then((m) => m.CountriesModule),
  },
  {
    path: '**',
    redirectTo: 'countries',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

/**
 * NOTAS:
 * - RouterModule.forRoot(routes) -> importamos el módulo Router que ya viene de angular y le indicamos forRoot porque es
 * el router principal de nuestra app. Podemos tener otros routers hijos a los que indicaremos forChild.
 * Solo hay un forRoot en toda la app.
 *  - loadChildren -> Carga perezosa. Una función que importa el modulo que queremos cargar cuando entremos en ese path.
 */
