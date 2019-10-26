import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoCreateComponent } from './produto-create/produto-create.component';


const routes: Routes = [
    { path: '', redirectTo: 'produtos', pathMatch: 'full' },
    { path: 'produtos', component: ProdutoListComponent  },
    { path: 'add', component: ProdutoCreateComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
