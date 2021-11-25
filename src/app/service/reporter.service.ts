import { HttpClient,  HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IUser } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class ReporterService {
  
  private userUrl = 'assets/data/user.json';
  private userServerUrl='http://localhost:3000/users';
  constructor(private http:HttpClient){}

  getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.userServerUrl).pipe(
      tap(data=> console.log("all:",JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

 
 

  addUsers(user:IUser):Observable<IUser>{
   
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(user);
    console.log(body)
    
    return this.http.post<IUser>(this.userServerUrl,body,{'headers':headers}).pipe(
      catchError(this.handleError)
    );;
  }
  private handleError(err: HttpErrorResponse){
    let errorMessage='';
    if (err.error instanceof ErrorEvent){
        errorMessage = `An error occurd: ${err.error.message}`;

    }
    else{
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

    }
    console.error(errorMessage);
    return throwError(errorMessage);
}

}
