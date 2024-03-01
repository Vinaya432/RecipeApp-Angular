import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  D_URL:string="https://dummyjson.com/recipes"

  constructor(private http:HttpClient) { }

  getAllRecipesAPI(){
    return this.http.get(`${this.D_URL}`)
  }

  getrecipeByCategory(category: string){
    return this.http.get(`${this.D_URL}?category=${category}`)
  }

}
