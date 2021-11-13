import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../interfaces/content.interface';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private readonly _apiUrl: string = environment.urlApi;

  constructor(private _http: HttpClient) {}

  content(route: string): Observable<ApiResponse> {
    return this._http.get<ApiResponse>(`${this._apiUrl}/${route}`);
  }

  uploadFiles(route: string, form: any): Observable<any> {
    if (route === '') {
      route = 'upload';
    }
    return this._http.post(`${this._apiUrl}/upload/${route}`, form);
  }

  mkdir(route: string, foldername: string): Observable<any> {
    return this._http.get(`${this._apiUrl}/mkdir/${route}-${foldername}`);
  }
}
