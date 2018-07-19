import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import 'rxjs';
import { Recipe } from './recipies/recipes.model';



@Injectable()
export class CommonService {

  constructor(private http: HttpClient) { }

  GetRecipes() {
    console.log('get');
    return this.http.get('http://localhost:8080/get');
  }

  addRecipe(data: Recipe[]) {
    console.log(data);
    return this.http.post('http://localhost:8080/post', data).subscribe(res => console.log(res));
  }

}
