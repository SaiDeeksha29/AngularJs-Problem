import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceNameService {

  constructor(private httpClient: HttpClient) { }
  functionName(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/employeepayrollservice/");
  }
}


