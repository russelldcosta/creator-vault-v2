import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private baseUrl = 'http://localhost:8081'; // Your Spring Boot Port

  constructor(private http: HttpClient) { }

// frontend/src/app/services/api.ts
testConnection(): Observable<string> {
  return this.http.get(`${this.baseUrl}/test-db`, { 
    responseType: 'text' // <--- DO NOT FORGET THIS
  });
}
}