import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CatApiService {


  private apiURL = 'https://api.thecatapi.com/v1/breeds';
  private apiKey = 'bda53789-d59e-46cd-9bc4-2936630fde39';

  constructor(private http: HttpClient) { }


  getCatBreeds(): Observable<any[]> {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey
    });
    return this.http.get<any[]>(this.apiURL, { headers });
  }

  getCatInfo(catId: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey
    });
    const url = `${this.apiURL}/${catId}`; // Construir la URL para obtener detalles específicos del gato
    return this.http.get<any>(url, { headers });
  }


}
