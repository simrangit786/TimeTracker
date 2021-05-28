import { Injectable } from '@angular/core';

import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Project {
  id: string;
  projectname: string;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  endpoint = 'http://localhost:8001';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  
  getUsers(): Observable<Project> {
    return this.httpClient.get<Project>(this.endpoint + '/Projects')
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  addUser(data): Observable<Project> {
    return this.httpClient.post<Project>(this.endpoint + '/Projects', JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }  

  updateUser(id, data): Observable<Project> {
    return this.httpClient.put<Project>(this.endpoint + '/Projects/' + id, JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  deleteUser(id){
    return this.httpClient.delete<Project>(this.endpoint + '/Projects/' + id, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  processError(err) {
     let message = '';
     if(err.error instanceof ErrorEvent) {
      message = err.error.message;
     } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
     }
     console.log(message);
     return throwError(message);
  }
  
}

  

