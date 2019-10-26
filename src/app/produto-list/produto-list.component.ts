import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './../produto.service';
import { Observable } from 'rxjs';
import { Produto } from '../produto';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  produtos : Observable<Produto[]>;

  constructor(private service : ProdutoService,
       private router : Router
    ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.produtos = this.service.getProdutos();
  }

}
