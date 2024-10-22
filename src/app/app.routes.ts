import { Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';

export const routes: Routes = [
  {
    path: '',
    component: ListaProductosComponent
  },
  {
    path: 'create-product',
    component: CrearProductoComponent
  }
];
