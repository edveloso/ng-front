import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseUrl = `http://localhost:8080/produtos/`;

  constructor(private http : HttpClient) { }

  getProdutos(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
