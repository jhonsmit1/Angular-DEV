import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-pages.component';
import { ListadoComponent } from './components/List/listado.component';
import { AgregarComponent } from './components/Add/agregar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainPageComponent,ListadoComponent,AgregarComponent],
  exports:[MainPageComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
