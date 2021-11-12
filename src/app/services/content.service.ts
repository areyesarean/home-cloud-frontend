import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../interfaces/content.interface';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private readonly _apiUrl: string = environment.urlApi;

  constructor(private _http: HttpClient) {}

  content(route: string): Observable<ApiResponse> {
    console.log('service'+ route);
    
    return this._http.get<ApiResponse>(`${this._apiUrl}/${route}`);
  }

}
