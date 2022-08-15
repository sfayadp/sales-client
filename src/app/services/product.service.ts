import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private REST_API_SERVER = "https://localhost:44398/";



  constructor(
    private httpClient: HttpClient
  ) { }

  GetProducts(){
    return this.httpClient.get(this.REST_API_SERVER+'Product/GetProducts');
  }

}
