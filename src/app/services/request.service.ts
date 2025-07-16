import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRequest } from '../types/Request';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {}

  getRequests(): Observable<IRequest[]> {
    return this.http.get<IRequest[]>(`${this.baseUrl}request`);
  }

  addRequest(request: IRequest): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}request`, request);
  }
}
