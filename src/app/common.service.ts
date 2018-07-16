import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import {switchMap, map} from 'rxjs/operators';

@Injectable()
export class CommonService {

  constructor(private http: Http) { }

  GetRecipes() {
    return this.http.get('http://localhost:8080/get/');
  }

  addRecipe(data) {
    return this.http.post('http://localhost:8080/post/', data[0]);
  }

  // saveRecipe(recipe) {
  //   return this.http.post('http://localhost:8080/post/', recipe)
  //           .pipe(map((response: Response) => response.json()));
  // }

//  deleteUser(id) {
//     return this.http.post('http://localhost:8080/api/deleteUser/', {'id': id})
//             .map((response: Response) => response.json());
//   }

}
