import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HealthPackageService {

  private dataUrl = 'assets/json_data_files/data.json';

  constructor(private http: HttpClient) {}

  getPackages(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }
}
