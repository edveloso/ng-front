import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component';
import { ProdutoCreateComponent } from './produto-create/produto-create.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoListComponent,
    ProdutoEditComponent,
    ProdutoCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
