import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchBoxComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    AboutPageComponent,
    HomePageComponent,
    SearchBoxComponent,
    SidebarComponent,
  ],
})
export class SharedModule {}

/**
 * NOTAS:
 * - Exportamos el AboutPageComponent y el HomePageComponent para utilzarlos fuera del ámbito de este módulo.
 * - La importación para utilizarlos en el módulo se hace por defecto cuando los creamos.
 * - Necesitamos importar también el RouterModule para poder utilizarlo en el ámbito del SharedModule
 */
